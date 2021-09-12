import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Colaborador from '../models/Colaborador';

const connection = new Sequelize(dbConfig);

Colaborador.init(connection);

module.exports = connection;