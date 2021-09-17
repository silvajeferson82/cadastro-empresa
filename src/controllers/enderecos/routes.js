import { Router } from 'express';
import EnderecoController from './EnderecoController';

const routes = Router();

routes.get('/endereco',(req,res)=>{
  return res.json({mesage: "Teste na rora Endereco..."});
})

routes.post('/create/:colaboradorId/endereco', EnderecoController.store);

export default routes;