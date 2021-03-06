import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Students from '../app/models/Students';
import Users from '../app/models/Users';

const models = [Students, Users];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
