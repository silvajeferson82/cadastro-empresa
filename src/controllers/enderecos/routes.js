import { Router } from 'express';
import EnderecoController from './EnderecoController';

const routes = Router();

routes.get('/endereco',(req,res)=>{
  return res.json({mesage: "Teste na rota Endereco..."});
})

routes.post('/create/:colaborador_cpf', EnderecoController.store);
routes.get('/list/:colaborador_cpf',EnderecoController.show);

export default routes;