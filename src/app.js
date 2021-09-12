import express from 'express';
import routes from './routes';

import './database';

class App{
  constructor() {
    this.server = express();
    this.server.use(express.json({ limit: '100mb', extended: true }));
    this.server.use(routes);
  
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;