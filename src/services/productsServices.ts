import { ProductsType } from "../types/productsType";
import boom from "@hapi/boom";
import { sequelize } from "../libs/sequelize";

export class ProductsService {
  constructor() {}

  async create(data: ProductsType) {
    const newProduct = await sequelize.models.Products.create(data);
    return newProduct;
  }
  async find() {
    const data = await sequelize.models.Products.findAll();
    return data;
  }

  async findOne(id: number | string) {
    const product = await sequelize.models.Products.findByPk(id);
    if (!product) {
      throw boom.notFound("products not found");
    }
    return product;
  }

  async update(id: string | number, changes: ProductsType) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id: number | string) {
    const product = await this.findOne(id);
    await product?.destroy();
    return { id };
  }
}
