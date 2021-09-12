'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('colaboradores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento: {
        type: sequelize.STRING,
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
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
    }
    );
  
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.dropTable('colaboradores');
  }
};
