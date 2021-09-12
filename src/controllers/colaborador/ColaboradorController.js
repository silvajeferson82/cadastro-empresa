import ColaboradorService from '../../service/ColaboradorService';

class ColaboradorController {
  async show(req, res) {
    const listColaborador = await ColaboradorService.listColaborador();

    return res.json(listColaborador);
  }

  async index(req, res) {
    const { id } = req.params;
    const colaboradorId = await ColaboradorService.findColaborador({ id });
    if (!colaboradorId)
      return res
      .status(404)
      .json({ message: "Não existe cadastro para esse colaborador"})
    return res.json(colaboradorId);
  }

  async store(req, res) {
    const { nome,sobrenome,cpf,nascimento,email } = req.body;
    console.log('CPF => ',cpf);

      const colaborador = await ColaboradorService.addColaborador({
        nome,
        sobrenome,
        cpf,
        nascimento,
        email
      });
      return res.json(colaborador);
    
  }

  async update(req, res) {
    const { cpf } = req.params;
    const { nome, sobrenome, nascimento, email } = req.body;
    
    const editColaborador = ColaboradorService.updateColaborador({ nome, sobrenome, cpf, nascimento, email });
  
    return res.json(editColaborador);
  }

  async delete(req, res) {
    const { cpf } = req.params;
    const deleteColaborador = await ColaboradorService.delColaborador({ cpf });
    if (!deleteColaborador)
      return res
        .status(404)
        .json({ error: "Não existe cadastro para esse CPF!" });
    
    return res.json({ message: "Cadastro excluido com sucesso." });
  }
}


export default new ColaboradorController();

