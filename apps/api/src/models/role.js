const { Model } = require('sequelize');

class Role extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        tableName: 'role',
      },
    );
  }
}

module.exports = Role;
