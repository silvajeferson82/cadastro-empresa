import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Colaborador from '../models/Colaborador';
import Enderecos from '../models/Enderecos';

const connection = new Sequelize(dbConfig);

Colaborador.init(connection);
Enderecos.init(connection);

module.exports = connection;