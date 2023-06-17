import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class customers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    cust_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "customers_pkey",
        unique: true,
        fields: [
          { name: "cust_id" },
        ]
      },
    ]
  });
  }
}
