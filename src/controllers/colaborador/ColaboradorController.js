import ColaboradorService from '../../service/ColaboradorService';

class ColaboradorController {
  async show(req, res) {
    const listColaborador = await ColaboradorService.listColaborador();

    return res.json(listColaborador);
  }

  async index(req, res) {
    const { cpf } = req.params;
    console.log('CPF => ',cpf);
    const colaboradorId = await ColaboradorService.findColaborador({ cpf });
    if (!colaboradorId)
      return res
      .status(404)
      .json({ message: "Não existe cadastro para esse CPF"})
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
      if (colaborador === 0)
      return res
        .status(404)
        .json({ error: "Já existe cadastro para esse CPF!" });
      return res.json(colaborador);
    
  }

  async update(req, res) {
    const { cpf } = req.params;
    const { nome, sobrenome, nascimento, email } = req.body;
    try {
      const editColaborador = await ColaboradorService.updateColaborador({ nome, sobrenome, cpf, nascimento, email });
      console.log(editColaborador);
      if (editColaborador <= 0){
        return res
          .status(404)
          .json({ error: "Não existe cadastro para esse CPF!" });
      }
      return res.json(editColaborador);
    } catch (error) {
      return new Error(error);
    }
    
  }

  async delete(req, res) {
    const { cpf } = req.params;
    const deleteColaborador = await ColaboradorService.delColaborador({ cpf });
    if (!deleteColaborador)
      return res
        .status(404)
        .json({ error: "Não existe cadastro para esse CPF!" });
    
    return res.json({ message: `Cadastro do CPF ${cpf} excluido com sucesso.` });
  }
}


export default new ColaboradorController();

