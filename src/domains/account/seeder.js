export default function AccountSeeder({ Factory, AccountModel }) {
  return Factory.blueprint(AccountModel, (fake, i, data) => ({
    razaoSocial: fake.company(),
    nomeFantasia: fake.company(),
    cnpj: fake.cnpj(false),
    estado: fake.state({ country: 'us' }),
    associations: [
      {
        associationType:
          data.associationType || fake.pickone(['user', 'admin', 'owner']),
        userId: data.userId || fake.guid({ version: 4 }),
      },
    ],
    edits: [],
    createdBy: fake.guid({ version: 4 }),
    createdAt: fake.date({ year: 2018 }),
  }));
}
