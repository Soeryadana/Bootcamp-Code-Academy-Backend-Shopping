import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class products extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product_category',
        key: 'category_id'
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
  }
}
