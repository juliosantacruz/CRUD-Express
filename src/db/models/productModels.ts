import { Model, DataTypes, Sequelize, ModelStatic } from "sequelize";
import { CATEGORY_TABLE } from "./categoryModels";

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
  },
  categoryId: {
    field: "category_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: CATEGORY_TABLE, key: "id" },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class ProductsModel extends Model {
  static associate(models: any) {
    this.belongsTo(models.Category, { as:'category'})
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: "Product",
      timestamps: false,
    };
  }
}

export { PRODUCTS_TABLE, ProductsSchemas, ProductsModel };

