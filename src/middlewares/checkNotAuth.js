/* eslint-disable consistent-return */
import jwtConfig from '../../db/config/jwtConfig';

export default function checkNotAuth(req, res, next) {
  const refresh = req.cookies[jwtConfig.refresh.name];
  if (!refresh) {
    return next();
  }
  res.redirect('/');
}
