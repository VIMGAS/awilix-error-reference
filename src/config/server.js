/**
 * @function
 * @param {object} a
 * @param {import('@coobo/base/dist/env')} a.Env
 */
export default ({ Env }) => ({
  cors: {
    origins: Env.get('SERVER_CORS_ALLOWED_ORIGINS').split(','),
  },
});
