/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
export default registerAs('app', () => ({
  /*
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  url: process.env.APP_URL,
  port: process.env.APP_PORT,
  */
  //JWT_SECRET:process.env.JWT_SECRET,
  port: process.env.APP_PORT,
  title:process.env.APP_TITLE,
}));