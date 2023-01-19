const boom = require('@hapi/boom');
// const { getConnection } = require('../libs/postgres');
// const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err, client) => {
      // console.error('Unexpected error on idle client', err);
    // });
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    // const query = 'SELECT * from task';
    // const response = await this.pool.query(query);
    // return response.rows;

    const query = await models.User.findAll();
    return query;
  }

  async findOne(id) {
    // const query = `SELECT title, completed from task where id = ${id}`;
    // const response = await this.pool.query(query);
    // return response.rows[0];
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const res = await user.update(changes);
    return res;
  }

  async delete(id) {
    const user = await this.findOne(id);
    const res = await user.destroy(); // Elimina
    return res;
  }
}

module.exports = UserService;
