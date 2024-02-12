import {CategoryType} from '../types/categoryType'
import boom from "@hapi/boom";
import { sequelize } from "../libs/sequelize";



export class CategoryService{
  constructor(){}

  async create(data:CategoryType){
    const newCategory = await sequelize.models.Category.create(data)
    return newCategory
  }

  async find(){
    const data = await sequelize.models.Category.findAll();
    return data
  }

  async findOne(id: number ){
    const category = await sequelize.models.Category.findByPk(id,{
      include:['products']
    })
    if (!category) {
      throw boom.notFound("category not found");
    }
    return category;
  }

  async update(id: number, changes:CategoryType ){
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id: number ){
    const category = await this.findOne(id);
    await category?.destroy();
    return { id };
  }
}
