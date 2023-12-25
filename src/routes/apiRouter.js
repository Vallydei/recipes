import express from 'express';
import bcrypt from 'bcrypt';
import { User, Favorite } from '../../db/models';
import generateTokens from '../utils/generateTokens';
import jwtConfig from '../../db/config/jwtConfig';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      return res.status(400).send('All field should be non empty');
    }
    const hash = await bcrypt.hash(password, 13);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, hashPass: hash },
    });

    if (!created) {
      return res.status(400).send('Email already in use');
    }

    const plainUser = user.get();
    delete plainUser.hashPass;

    const { accessToken, refreshToken } = generateTokens(plainUser);

    return res
      .cookie(jwtConfig.access.name, accessToken)
      .cookie(jwtConfig.refresh.name, refreshToken)
      .sendStatus(200);
  } catch ({message}) {
    return res.send(message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send('All field should be non empty');
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send('Invalid email');
    }

    const isValid = await bcrypt.compare(password, user?.hashPass);

    if (!isValid) {
      return res.status(400).send('Invalid  password');
    }

    const plainUser = user.get();
    delete plainUser.hashpass;
    const { accessToken, refreshToken } = generateTokens(plainUser);

    return res
      .cookie(jwtConfig.access.name, accessToken)
      .cookie(jwtConfig.refresh.name, refreshToken)
      .send(JSON.stringify(plainUser));
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.post('/favorite', async (req, res) => {
  try {
    const { userIdGet, recipeIdGet } = req.body;
    const [created] = await Favorite.findOrCreate({
      where: { userId: userIdGet, recipeId: recipeIdGet },
      defaults: {},
    });
    if (!created) {
      return res.status(400).send('Email already in use');
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.delete('/account/deleterecipe', async (req, res) => {
  try {
    const { userId, recipeId } = req.body;
    await Favorite.destroy({
      where: { userId, recipeId },
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default router;
