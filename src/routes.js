import express from 'express';
import Colaboradores from './controllers/colaborador/ColaboradorController';

const routes = express.Router();

routes.get('/teste', (req,res) => {
  return res.json({ teste:'Teste de Rotas...'})
});

routes.post('/create', Colaboradores.store);

routes.get('/list', Colaboradores.show);

routes.get('/list/:id', Colaboradores.index);

routes.put('/edit/:cpf', Colaboradores.update);

routes.delete('/delete/:cpf', Colaboradores.delete);


export default routes;