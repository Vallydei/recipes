/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import jwtConfig from '../../db/config/jwtConfig';
import generateTokens from '../utils/generateTokens';

require('dotenv').config();

export default function verifyRefreshToken(req, res, next) {
  const refresh = req.cookies[jwtConfig.refresh.name];

  try {
    const user = jwt.verify(refresh, process.env.JWT_SIGNATURE_REFRESH);
    const { accessToken, refreshToken } = generateTokens(user);
    res
      .cookie(jwtConfig.access.name, accessToken, {
        maxAge: jwtConfig.access.expiresIn,
        httpOnly: true,
      })
      .cookie(jwtConfig.refresh.name, refreshToken, {
        maxAge: jwtConfig.refresh.expiresIn,
        httpOnly: true,
      });

    next();
  } catch (error) {
    return res.redirect('/login');
  }
}
