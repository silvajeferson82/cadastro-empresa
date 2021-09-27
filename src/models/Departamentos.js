import { Model, DataTypes } from 'sequelize';

class Departamentos extends Model{
  static init(sequelize){
    super.init({
      colaborador_cpf:{
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      departamento:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      contratacao:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    },{
      sequelize,
      tableName: 'departamentos'
    });
    return this;
  }
  static associate(models){
    this.belongsTo(models.Colaborador, { foreignKey: 'colaborador_cpf', as: 'colaborador'});
  }
}

module.exports = Departamentos;