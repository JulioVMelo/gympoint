import jwt from 'jsonwebtoken';

import Users from '../models/Users';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ eror: 'user not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'password not match' });
    }
    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '9184c55dfb27b8f82277af5d612c3bad', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
