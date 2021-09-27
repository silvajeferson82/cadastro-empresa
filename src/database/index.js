import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Colaborador from '../models/Colaborador';
import Enderecos from '../models/Enderecos';
import Departamentos from '../models/Departamentos';

const connection = new Sequelize(dbConfig);

Colaborador.init(connection);
Enderecos.init(connection);
Departamentos.init(connection);

Colaborador.associate(connection.models);
Enderecos.associate(connection.models);
Departamentos.associate(connection.models);


module.exports = connection;