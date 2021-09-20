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
     colaborador_cpf:{
       type: Sequelize.STRING,
       allowNull: false,
       deafultValue: null,
       references: { model: 'colaboradores', key: 'cpf'},
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
       type: Sequelize.INTEGER,
       allowNull: false,
     },
     bairro:{
       type: Sequelize.STRING,
       allowNull: false,
     },
     cidade:{
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
 }};


