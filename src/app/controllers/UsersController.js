import Users from '../models/Users';

class UsersController {
  async store(req, res) {
    try {
      const { name, email, password_hash } = await Users.create(req.body);

      res.status(200).json({
        name,
        email,
        password_hash,
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
