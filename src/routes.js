export default function RouteRegister({
  controller,
  Container,
  validate,
  Server,
}) {
  const router = Server.openRouter();

  // This solves the error, don't really know why...
  // Container.registrations.Container.resolve(Container);

  router
    .route('/accounts')
    .get(
      validate(
        'query',
        'AccountIndexValidator',
        // Container.resolve('AccountIndexValidator'),
        // Container.registrations.AccountIndexValidator.resolve(Container),
      ),
      controller('Account').index,
    )
    .post(
      validate('body', 'AccountStoreValidator'),
      controller('Account').store,
    );

  Server.useRouter('/', router);

  return router;
}
