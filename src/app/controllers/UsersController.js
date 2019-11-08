import Users from '../models/Users';

class UsersController {
  async store(req, res) {
    try {
      const { name, email } = await Users.create(req.body);

      res.status(200).json({
        message: 'user created',
        Data: { name, email },
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async index(req, res) {
    try {
      const users = await Users.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}

export default new UsersController();
