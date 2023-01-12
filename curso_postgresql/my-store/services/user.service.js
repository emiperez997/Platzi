const boom = require('@hapi/boom');
// const { getConnection } = require('../libs/postgres');
const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
    });
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * from task';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    const query = `SELECT title, completed from task where id = ${id}`;
    const response = await this.pool.query(query);
    return response.rows[0];
  }

  async update(id, changes) {
    return { id, changes };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
