/**
 * @function
 * @param {object} a
 * @param {import('@coobo/base/dist/env')} a.Env
 */
export default ({ Env }) => Env.get('NODE_ENV') || 'development';
