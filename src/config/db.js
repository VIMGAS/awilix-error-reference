import buildDBUri from '../utils/dburi';

/**
 * @function
 * @param {object} a
 * @param {import('@coobo/base/dist/env')} a.Env
 */
export default ({ Env }) => ({
  host: Env.get('DB_HOST'),
  port: parseInt(Env.get('DB_PORT'), 10),
  name: Env.get('DB_NAME'),
  user: Env.get('DB_USER'),
  password: Env.get('DB_PASS'),
  uri:
    Env.get('MONGO_URI') ||
    Env.get('DB_URI') ||
    buildDBUri(
      Env.get('DB_HOST'),
      Env.get('DB_PORT'),
      Env.get('DB_NAME'),
      Env.get('DB_USER'),
      Env.get('DB_PASS'),
    ),
});
