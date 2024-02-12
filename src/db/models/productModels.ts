import { Model, DataTypes, Sequelize } from "sequelize";

const PRODUCTS_TABLE = "products";

const ProductsSchemas = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  stars: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }
};


class ProductsModel extends Model{
  static associate(){
    //
  }

  static config(sequelize:Sequelize){
    return{
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName:'Products',
      timestamps:false,
    }
  }

}

export {PRODUCTS_TABLE,  ProductsSchemas,ProductsModel}
