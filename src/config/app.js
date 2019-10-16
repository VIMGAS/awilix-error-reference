/**
 * @function
 * @param {object} a
 * @param {import('@coobo/base/dist/env')} a.Env
 */
export default ({ Env }) => ({
  name: Env.get('APP_NAME'),
  port: parseInt(Env.get('APP_PORT'), 10),
  url: Env.get('APP_URL'),
  secret: Env.get('APP_SECRET'),
});
