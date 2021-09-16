import { Router } from 'express';
import EnderecoController from './EnderecoController';

const routes = Router();

routes.post('/create/:colaboradorId/endereco', EnderecoController.store);

export default routes;