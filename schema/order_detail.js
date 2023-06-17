import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class order_detail extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    detail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'product_id'
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_detail',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "order_detail_pkey",
        unique: true,
        fields: [
          { name: "detail_id" },
        ]
      },
    ]
  });
  }
}
