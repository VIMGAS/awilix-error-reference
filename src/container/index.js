/** @type {import('awilix').AwilixContainer} */
import Container from '@coobo/base';
import path from 'path';

import routes from '../routes';

const asFunction = Container.resolve('asFunction');
const asValue = Container.resolve('asValue');
Container.register('appRoot', asValue(path.join(__dirname, '../../')));

const app = Container.resolve('Application');
app.loadModel = () => {};
app.loadControllers();

Container.register('routes', asFunction(routes).singleton());
Container.resolve('routes');

export default Container;
