import { Router } from 'express';
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express';

import Colaborador from './controllers/colaborador/routes';
import Endereco from './controllers/enderecos/routes';

const routes = Router();

const options = {
  definition: {
      openapi: "3.0.0",
      info:{
          title: "API do projeto Agenda Empresa",
          version: "1.0.0",
          description: "Projeto com NodeJS, banco SQL(postgres) e swagger",
          license: {
              name:"Licensed Under MIT",
              url:"https://spdx.org/licenses/MIT.html",
          },
          contact: {
              name: "Jeferson Silva",
              email: "jefersonsilva.contato@gmail.com",
          },
      },
      servers: [
          {
            url:"http://localhost:3031",
            description: "Development server",
          }
      ],
  },
  apis:['**/*routes.js'],
};

const specs = swaggerJsDoc(options);
routes.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(specs, { explorer: false})
);

routes.use('/colaborador', Colaborador);
routes.use('/endereco',Endereco);

export default routes;