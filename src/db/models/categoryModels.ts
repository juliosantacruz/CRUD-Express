import { Model, DataTypes, Sequelize } from "sequelize";


const CATEGORY_TABLE = "category";

const CategorySchemas = {
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
};


class CategoryModel extends Model{
  static associate(models:any){
    this.hasMany(models.Product,{
      as:'products',
      foreignKey:'categoryId'
    })
  }

  static config(sequelize:Sequelize){
    return{
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName:'Category',
      timestamps:false,
    }
  }
}

export {CATEGORY_TABLE,  CategorySchemas, CategoryModel}
