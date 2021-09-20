import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Colaborador from '../models/Colaborador';
import Enderecos from '../models/Enderecos';

const connection = new Sequelize(dbConfig);

Colaborador.init(connection);
Enderecos.init(connection);

Enderecos.associate(connection.models);
Colaborador.associate(connection.models);

module.exports = connection;