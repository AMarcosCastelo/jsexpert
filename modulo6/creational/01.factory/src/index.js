const UserFactory = require('./factory/userFactory');

;(async () => {
  const userFactory = await UserFactory.createInstance();

  const result = await userFactory.find({ name: 'Antonio*'});

  console.log({ result });
})();