/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import jwtConfig from '../../db/config/jwtConfig';
import verifyRefreshToken from './verifyRefreshToken';

require('dotenv').config();

export default function verifyAccessToken(req, res, next) {
  const access = req.cookies[jwtConfig.access.name];
  try {
    const user = jwt.verify(access, process.env.JWT_SIGNATURE_ACCESS);
    res.locals.user = user; 
    return next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}
