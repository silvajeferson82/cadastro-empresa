import { Router } from 'express';
import EnderecoController from './EnderecoController';

const routes = Router();

/**
 * @swagger
 * # schemes:
 * # - http
 * /endereco/list:
 *   get:
 *     tags: 
 *     - Endereços
 *     summary: Retorna a lista de Endreços.
 *     description: Lista de Endreços relacionados com o CPF do Colaborador.
 *     responses:
 *       200:
 *         description: Listagem de endereços.
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: 
 *                   type: string
 *                   description: Id do Endreço.
 *                   example: "12"
 *                 colaborador_cpf:
 *                   type: string
 *                   description: CPF do titular do Endreço.
 *                   example: "64513485146"
 *                 cep:
 *                   type: string
 *                   description: CEP do Colaborador.
 *                   example: "66045-230"
 *                 rua:
 *                   type: string
 *                   description: Endereço do Colaborador.
 *                   example: "Rua São João"
 *                 numero:
 *                   type: string
 *                   description: Número da residencia.
 *                   example: "71"
 *                 bairro:
 *                   type: string
 *                   description: Bairro do colaborador.
 *                   example: "Concordia"
 *                 cidade:
 *                   type: string
 *                   description: Cidade onde reside.
 *                   example: "Belém"
 *       500:
 *          description: Erro no servidor
 */

/**
 * @swagger
 * # schemes:
 * # - http
 * /endereco/list/{colaborador_cpf}:
 *   get:
 *     tags: 
 *     - Endereços
 *     summary: Retorna endereço e colaboardor pelo CPF informado.
 *     parameters:
 *       - name: colaborador_cpf
 *         in: path
 *         required: true
 *         description: "Inserir documento sem traços ou pontos"
 *         type: string
 *     responses:
 *       200:
 *         description: Endereço Localizado.
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: 
 *                   type: string
 *                   description: Id do Endreço.
 *                   example: "12"
 *                 colaborador_cpf:
 *                   type: string
 *                   description: CPF do titular do Endreço.
 *                   example: "64513485146"
 *                 cep:
 *                   type: string
 *                   description: CEP do Colaborador.
 *                   example: "66045-230"
 *                 rua:
 *                   type: string
 *                   description: Endereço do Colaborador.
 *                   example: "Rua São João"
 *                 numero:
 *                   type: string
 *                   description: Número da residencia.
 *                   example: "71"
 *                 bairro:
 *                   type: string
 *                   description: Bairro do colaborador.
 *                   example: "Concordia"
 *                 cidade:
 *                   type: string
 *                   description: Cidade onde reside.
 *                   example: "Belém"
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Não encontrado
 *       500:
 *          description: Erro no servidor
 */

/**
 * @swagger
 * # schemes:
 * # - http
 * /endereco/create/{colaborador_cpf}:
 *   post:
 *     tags: 
 *     - Endereços
 *     summary: Criar novo endereco para o colaborador.
 *     description:  Inserir colaborador_cpf, cep, rua, número, bairro e cidade 
 *     parameters:
 *       - name: colaborador_cpf
 *         in: path
 *         required: true
 *         description: "Inserir documento sem traços ou pontos"
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json: 
 *           schema:
 *               type: object
 *               properties:
 *                 cep:
 *                   type: string
 *                   description: CEP do Colaborador.
 *                   example: "66045-230"
 *                 rua:
 *                   type: string
 *                   description: Endereço do Colaborador.
 *                   example: "Rua São João"
 *                 numero:
 *                   type: string
 *                   description: Número da residencia.
 *                   example: "71"
 *                 bairro:
 *                   type: string
 *                   description: Bairro do colaborador.
 *                   example: "Concordia"
 *                 cidade:
 *                   type: string
 *                   description: Cidade onde reside.
 *                   example: "Belém"  
 *     responses:
 *       200:
 *         description: Sucesso ao cadastrar o endereço.
 * 
 */

/**
 * @swagger
 * # schemes:
 * # - http
 * /endereco/edit/{colaborador_cpf}:
 *   put:
 *     tags: 
 *     - Endereços
 *     summary: Editar endereço do colaborador.
 *     parameters:
 *       - name: colaborador_cpf
 *         in: path
 *         required: true
 *     description:  Inserir colaborador_cpf, cep, rua, número, bairro e cidade  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json: 
 *           schema:
 *             type: object
 *             properties:
  *                 cep:
 *                   type: string
 *                   description: CEP do Colaborador.
 *                   example: "66045-230"
 *                 rua:
 *                   type: string
 *                   description: Endereço do Colaborador.
 *                   example: "Rua São João"
 *                 numero:
 *                   type: string
 *                   description: Número da residencia.
 *                   example: "71"
 *                 bairro:
 *                   type: string
 *                   description: Bairro do colaborador.
 *                   example: "Concordia"
 *                 cidade:
 *                   type: string
 *                   description: Cidade onde reside.
 *                   example: "Belém"  
 *     responses:
 *       200:
 *         description: Sucesso ao editar o endereço.
 * 
 */

/**
 * @swagger
 * # schemes:
 * # - http
 * /endereco/delete/{colaborador_cpf}:
 *   delete:
 *     tags: 
 *     - Endereços
 *     summary: Excluir endereço do colaborador com CPF informado.
 *     parameters:
 *       - name: colaborador_cpf
 *         in: path
 *         required: true
 *         description: "Inserir documento sem traços ou pontos"
 *         type: string
 *     responses:
 *       200:
 *         description: Sucesso ao excluir cadastro.
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Não encontrado
 *       500:
 *          description: Erro no servidor
 *         
 */

routes.get('/',(req,res)=>{
  return res.json({mesage: "Teste na rota Endereco..."});
})

routes.post('/create/:colaborador_cpf', EnderecoController.store);
routes.get('/list/:colaborador_cpf',EnderecoController.show);
routes.get('/list',EnderecoController.index);
routes.put('/edit/:colaborador_cpf',EnderecoController.update);
routes.delete('/delete/:colaborador_cpf', EnderecoController.delete);

export default routes;