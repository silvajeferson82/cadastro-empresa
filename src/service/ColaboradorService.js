import Colaborador from '../models/Colaborador';

class ColaboradorService {
  async listColaborador() {
    const allColobordor = Colaborador.findAll();
    return allColobordor;
  }

  async findColaborador({id}) {
    const colaboradorId = await Colaborador.findOne({ where: { id } });
    return colaboradorId
  }

  async addColaborador({nome,sobrenome,cpf,nascimento,email}) {
    const cpfExist = await Colaborador.findOne({where: {cpf}});
    if (cpfExist) throw new Error("CPF já existe na base!");
    try {
      const createColaborador = await Colaborador.create({
        nome, sobrenome, cpf, nascimento, email
      });
      
      return createColaborador;
    }catch (error) {
      return new Error('Falha ao criar cadastro...');
    }
  }
    

  async updateColaborador({ nome, sobrenome, cpf, nascimento, email }) {

    const cpfExist = await Colaborador.findOne({where: {cpf}});
    if (cpfExist === null) throw new Error('CPF não exite na base.');

    if (cpfExist) {
      const editColaborador = await Colaborador.update(
        {
          nome, sobrenome, nascimento, email
        },
        { where: { cpf } }
      )
      console.log(editColaborador);
      return cpfExist;
    }
    return cpfExist;
  }

  async delColaborador({cpf}) {
    const colaboradorDel = await Colaborador.destroy({ where: { cpf } })
    return colaboradorDel;
  }
}
export default new ColaboradorService();