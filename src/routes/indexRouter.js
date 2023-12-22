import express from 'express';
import checkNotAuth from '../middlewares/checkNotAuth';
import verifyAccessToken from '../middlewares/verifyAccessToken';
import jwtConfig from '../../db/config/jwtConfig';
import { Recipe, User } from '../../db/models';

const Sequelize = require('sequelize');

const router = express.Router();

router.get('/', async (req, res) => {
  try {

    const recipes = await Recipe.findAll({ order: Sequelize.literal('random()'), limit: 9 });
    
    const mapedRecipes = recipes.map((el) => {
      const numberIngridients = el.dataValues.ingredients.split(',').length;
      return {
        ...el.dataValues,
        numberIngridient: numberIngridients,
        ingredients: el.dataValues.ingredients.split(','),
      };
    });

    const initState = { mapedRecipes };
    res.render('Layout', initState);
  } catch (error) {
    console.error('Произошла ошибка при получении рецептов:', error);
  }
});

router.get('/account/:id', async (req, res) => {
  const { id } = req.params;
  const userRecipe = await User.findOne({
    where: {
      id,
    },
    include: Recipe,
  });

  const mapedRecipes = userRecipe.dataValues.Recipes.map((el) => {
    const numberIngridients = el.dataValues.ingredients.split(',').length;

    return {
      ...el.dataValues,
      numberIngridient: numberIngridients,
      ingredients: el.dataValues.ingredients.split(','),    
    };
  });

  res.render('Layout', {mapedRecipes});
});

router.get('/signup', checkNotAuth, (req, res) => {
  res.render('Layout', {});
});

router.get('/login', checkNotAuth, (req, res) => res.render('Layout'));

router.get('/logout', (req, res) =>
  res.clearCookie(jwtConfig.access.name).clearCookie(jwtConfig.refresh.name).redirect('/'),
);

router.get('/account', verifyAccessToken, (req, res) => res.render('Layout'));

export default router;
