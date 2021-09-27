'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('departamentos', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      colaborador_cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        deafultValue: null,
        references: { model: 'colaboradores', key: 'cpf'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      departamento:{
        type: Sequelize.STRING,
        allowNull: false
      },
      contratacao:{
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allownull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allownull: false,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('departamentos');
  }
};
