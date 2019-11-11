import { Router } from 'express';
import UsersController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UsersController.store);
routes.get('/users', UsersController.index);

routes.post('/students', StudentsController.store);
routes.get('/students', StudentsController.index);

export default routes;
