import App from './app';
import CarRouter from './routes/CarRouter';

const server = new App();

server.addRouter(CarRouter);

export default server;
