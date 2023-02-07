const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor() {}

  async find() {
    const res = await models.Customer.findAll();
    return res;
  }

  async findeOne(id) {
    const user = await models.Customer.findByPk(id);
    if (!user) {
      throw boom.notFound('Customer not found');
    }
    return user;
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findeOne(id);
    const res = await model.update(changes);
    return res;
  }

  async delete(id) {
    const model = await this.findeOne(id);
    await model.destroy();
    return { response: true };
  }
}

module.exports = CustomerService;
