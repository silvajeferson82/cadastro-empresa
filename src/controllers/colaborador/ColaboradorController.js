import ColaboradorService from '../../service/ColaboradorService';

class ColaboradorController {
  async index(req, res) {
    const listColaborador = await ColaboradorService.listColaborador();

    return res.json(listColaborador);
  }

  async show(req, res) {
    const { cpf } = req.params;
    try{
    const colaboradorId = await ColaboradorService.findColaborador({ cpf });
    return res.json(colaboradorId);
    }catch(error){
      return res.json({error});
    }
  }

  async store(req, res) {
    const { nome,sobrenome,cpf,nascimento,email } = req.body;
    try{
      const colaborador = await ColaboradorService.addColaborador({
        nome,
        sobrenome,
        cpf,
        nascimento,
        email
      });
      return res.json(colaborador);
    }catch(error){
      return res.json({error});
    }
    
  }

  async update(req, res) {
    const { cpf } = req.params;
    const { nome, sobrenome, nascimento, email } = req.body;
    try {
      const editColaborador = await ColaboradorService.updateColaborador({ nome, sobrenome, cpf, nascimento, email });
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

