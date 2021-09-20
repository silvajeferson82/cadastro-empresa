import { Model, DataTypes } from 'sequelize';
class Enderecos extends Model{
  static init(sequelize) {
    super.init({
      colaborador_cpf:{
        type: DataTypes.STRING,
        allowNull: false,
      },
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
      },
      bairro:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      cidade:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
        sequelize,
        tableName: 'enderecos'
      });
      return this;
  }
  static associate(models){
    this.belongsTo(models.Colaborador, { foreignKey: 'colaborador_cpf', as: 'colaborador'});
  }
  
}

module.exports = Enderecos;