import express from 'express';
import Colaboradores from './ColaboradorController';

const routes = express.Router();

/**
 * @swagger
 * # schemes:
 * # - http
 * /colaborador/list:
 *   get:
 *     tags: 
 *     - Colaborador
 *     summary: Retorna a lista de colaboradores.
 *     responses:
 *       200:
 *         description: Listagem dos colaboradores.
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: 
 *                   type: string
 *                   description: Id do Colaboradores.
 *                   example: "12"
 *                 nome:
 *                   type: string
 *                   description: Primeiro nome do Colaborador.
 *                   example: "Fulano"
 *                 sobrenome:
 *                   type: string
 *                   description: Segundo nome do Colaborador.
 *                   example: "Da Silva"
 *                 nascimento:
 *                   type: string
 *                   description: Data de nascimento.
 *                   example: "1975-01-10"
 *                 cpf:
 *                   type: string
 *                   description: CPF do Colaborador.
 *                   example: "71492027057"
 *                 email:
 *                   type: string
 *                   description: E-mail do colaborador.
 *                   example: "teste@email.com.br"
 *       500:
 *          description: Erro no servidor
 */

/**
 * @swagger
 * # schemes:
 * # - http
 * /colaborador/list/{cpf}:
 *   get:
 *     tags: 
 *     - Colaborador
 *     summary: Retorna o colaboardor pelo CPF informado.
 *     parameters:
 *       - name: cpf
 *         in: path
 *         required: true
 *         description: "Inserir documento sem traços ou pontos"
 *         type: string
 *     responses:
 *       200:
 *         description: Listagem dos colaboradores.
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: 
 *                   type: string
 *                   description: Id do Colaboradores.
 *                   example: "12"
 *                 nome:
 *                   type: string
 *                   description: Primeiro nome do Colaborador.
 *                   example: "Fulano"
 *                 sobrenome:
 *                   type: string
 *                   description: Segundo nome do Colaborador.
 *                   example: "Da Silva"
 *                 nascimento:
 *                   type: string
 *                   description: Data de nascimento.
 *                   example: "1975-01-10"
 *                 cpf:
 *                   type: string
 *                   description: CPF do Colaborador.
 *                   example: "71492027057"
 *                 email:
 *                   type: string
 *                   description: E-mail do colaborador.
 *                   example: "teste@email.com.br"
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
 * /colaborador/create:
 *   post:
 *     tags: 
 *     - Colaborador
 *     summary: Criar novo cadastro de colaborador.
 *     description:  Inserir nome, sobrenome, nascimento, cpf e e-mail. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json: 
 *           schema:
 *             type: object
 *             properties:
 *               nome: 
 *                 type: string
 *                 description: Primeiro nome.
 *                 example: "Antonio"
 *               sobrenome:
 *                 type: string
 *                 description: Segundo nome.
 *                 example: "Da Silva"
 *               nascimento: 
 *                 type: string
 *                 description: Nascimento do colaborador.
 *                 example: "1970-01-01" 
 *               cpf: 
 *                 type: string
 *                 description: CPF do colaborador.
 *                 example: "64803665060"
 *               email: 
 *                 type: string
 *                 description: Email do colaborador.
 *                 example: "teste@email.com.br"   
 *     responses:
 *       200:
 *         description: Sucesso ao cadastrar o colaborador.
 * 
 */

/**
 * @swagger
 * # schemes:
 * # - http
 * /colaborador/edit/{cpf}:
 *   put:
 *     tags: 
 *     - Colaborador
 *     summary: Editar cadastro de colaborador.
 *     parameters:
 *       - name: cpf
 *         in: path
 *         required: true
 *     description:  Inserir nome, sobrenome, nascimento e e-mail. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json: 
 *           schema:
 *             type: object
 *             properties:
 *               nome: 
 *                 type: string
 *                 description: Primeiro nome.
 *                 example: "Antonio"
 *               sobrenome:
 *                 type: string
 *                 description: Segundo nome.
 *                 example: "Da Silva"
 *               nascimento: 
 *                 type: string
 *                 description: Nascimento do colaborador.
 *                 example: "1970-01-01" 
 *               email: 
 *                 type: string
 *                 description: Email do colaborador.
 *                 example: "teste@email.com.br"   
 *     responses:
 *       200:
 *         description: Sucesso ao cadastrar o colaborador.
 * 
 */


/**
 * @swagger
 * # schemes:
 * # - http
 * /colaborador/delete/{cpf}:
 *   delete:
 *     tags: 
 *     - Colaborador
 *     summary: Excluir cadastro do colaborador com CPF informado.
 *     parameters:
 *       - name: cpf
 *         in: path
 *         required: true
 *         description: "Inserir documento sem traços ou pontos"
 *         type: string
 *         example: "28412429001"
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


routes.post('/create', Colaboradores.store);

routes.get('/list', Colaboradores.index);

routes.get('/list/:cpf', Colaboradores.show);

routes.put('/edit/:cpf', Colaboradores.update);

routes.delete('/delete/:cpf', Colaboradores.delete);


export default routes;