import express from 'express';
import routes from './routeGeneral';
import cors from 'cors';

import './database';

class App{
  constructor() {
    this.server = express();
    this.server.use(express.json({ limit: '100mb', extended: true }));
    this.server.use(routes);
    this.server.use(cors());
  
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;