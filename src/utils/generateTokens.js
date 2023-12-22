import jwt from 'jsonwebtoken';
import jwtConfig from '../../db/config/jwtConfig';

require('dotenv').config();

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, process.env.JWT_SIGNATURE_ACCESS, {
    expiresIn: jwtConfig.access.expiresIn,
  }),
  refreshToken: jwt.sign(payload, process.env.JWT_SIGNATURE_REFRESH, {
    expiresIn: jwtConfig.refresh.expiresIn,
  }),
});

export default generateTokens;
