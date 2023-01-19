const boom = require('@hapi/boom');
const faker = require('faker');
// const pool = require('../libs/postgres.pool');
// const pool = require('../libs/sequelize');
const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {
    // this.products = [];
    // this.generate();
    // this.pool = pool;
    // this.pool.on('error', (err, client) => {
      // console.error('Unexpected error on idle client', err);
    // });
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    // const query = 'SELECT * from task';
    // const response = await this.pool.query(query);
    // const [data, metadata] = await this.pool.query(query);
    // return response.rows;
    // return { data };
    
    const query = await models.Product.findAll();
    return query;
  }

  async findOne(id) {
    // const product = this.products.find((item) => item.id === id);
    // if (!product) {
      // throw boom.notFound('Product not found');
    // }

    // if (product.isBlock) {
      // throw boom.conflict('Product is block');
    // }
    

    const idNew = Number(id)
    const product = await models.Product.findOne({
      where: {
        idNew,
      },
    });
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound('Product not found');
    }

    const product = this.products[index];

    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound('Product not found');
    }

    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
