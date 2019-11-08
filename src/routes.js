import { Router } from 'express';
import UsersController from './app/controllers/UsersController';

const routes = new Router();

// routes.get('/', (req, res) => {
//   res.json({ message: 'hello world' });
// });

routes.post('/users', UsersController.store);
routes.get('/users', UsersController.index);
export default routes;
