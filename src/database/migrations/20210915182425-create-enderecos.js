'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      colaboradorId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'colaboradores', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('enderecos');
  }
};
