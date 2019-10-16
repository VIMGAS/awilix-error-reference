/**
 * Account.index validator
 *
 * @validates body
 * @param {object} DependencyInjection
 * @param {import('@hapi/joi')} DependencyInjection.Validator
 *
 * @returns {import('@hapi/joi').Schema}
 */
export default ({ Validator: joi }) =>
  joi
    .object()
    .keys({
      cnpj: joi.cnpj(),
      ids: joi.array().items(
        joi.string().guid({
          version: ['uuidv4'],
        }),
      ),
      userId: joi.string().guid({
        version: ['uuidv4'],
      }),
      associationType: joi.string().allow('user', 'admin', 'owner'),
    })
    .with('associationType', 'userId');
