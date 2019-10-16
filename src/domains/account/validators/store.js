/**
 * Account.store validator
 *
 * @validates body
 * @param {object} DependencyInjection
 * @param {import('@hapi/joi')} DependencyInjection.Validator
 *
 * @returns {import('@hapi/joi').Schema}
 */
export default ({ Validator: joi }) =>
  joi.object().keys({
    cnpj: joi.cnpj().required(),
    razaoSocial: joi.string().required(),
    nomeFantasia: joi.string().required(),
    estado: joi
      .string()
      .length(2)
      .required(),
    createdBy: joi
      .string()
      .guid({ version: ['uuidv4'] })
      .optional(),
    associations: joi
      .array()
      .items(
        joi.object().keys({
          userId: joi
            .string()
            .guid({
              version: ['uuidv4'],
            })
            .required(),
          associationType: joi.string().allow('user', 'admin', 'owner'),
        }),
      )
      .has(
        joi.object().keys({
          associationType: joi
            .string()
            .allow('owner')
            .required(),
          userId: joi
            .string()
            .guid({
              version: ['uuidv4'],
            })
            .required(),
        }),
      )
      .unique('userId')
      .unique(
        (a, b) =>
          a.associationType === 'owner' &&
          a.associationType === b.associationType,
      ),
  });
