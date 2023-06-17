import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class product_category extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    category_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_category',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "product_category_pkey",
        unique: true,
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
  }
}
