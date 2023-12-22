import jwt from 'jsonwebtoken';
import jwtConfig from '../../db/config/jwtConfig';

export default function resLocals(req, res, next) {
  res.locals.path = req.originalUrl;
  const refreshToken = req.cookies[jwtConfig.refresh.name];
  if (refreshToken) {
    res.locals.user = jwt.verify(refreshToken, process.env.JWT_SIGNATURE_REFRESH);
  }
  next();
}
