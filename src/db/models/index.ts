import { Sequelize } from 'sequelize'
import {ProductsModel, ProductsSchemas} from './productModels'
import {CategoryModel, CategorySchemas} from './categoryModels'




export const setupModels=(sequelize:Sequelize)=>{
  ProductsModel.init(ProductsSchemas, ProductsModel.config(sequelize));
  CategoryModel.init(CategorySchemas, CategoryModel.config(sequelize));


  CategoryModel.associate(sequelize.models);
  ProductsModel.associate(sequelize.models);
}
