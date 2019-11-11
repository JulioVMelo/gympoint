import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    try {
      const { name, email, age, weight, height } = await Students.create(
        req.body
      );

      res.status(200).json({
        message: 'student created',
        Data: { name, email, age, weight, height },
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async index(req, res) {
    try {
      const students = await Students.findAll();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}

export default new StudentsController();
