import { Sequelize } from 'sequelize'
import {ProductsModel, ProductsSchemas} from './productModels'



export const setupModels=(sequelize:Sequelize)=>{
  ProductsModel.init(ProductsSchemas, ProductsModel.config(sequelize))
}
