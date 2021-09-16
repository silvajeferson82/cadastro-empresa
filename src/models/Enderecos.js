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
    },{
        sequelize,
        tableName: 'enderecos'
      });
  }
  static associate(models){
    this.belongsTo(models.Colaborador, { foreignKey: 'colaboradorId', as: 'colaborador'});
  }
  
}

module.exports = Enderecos;