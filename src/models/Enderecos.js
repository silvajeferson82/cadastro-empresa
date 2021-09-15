import { Model, DataTypes } from 'sequelize';

class Enderecos extends Model{
  static init(sequelize) {
    super.init({
      cep: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rua: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
      {
        sequelize,
        tableName: 'enderecos'
      });
    return this;
  }
}

module.exports = Enderecos;