import { Router } from 'express';
import UsersController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UsersController.store);
routes.get('/users', UsersController.index);
routes.post('/sessions', SessionController.store);

export default routes;
