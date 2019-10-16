import container from './container';

const server = container.resolve('Server');

export default server.boot();
