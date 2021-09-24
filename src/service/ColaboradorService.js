import Colaborador from '../models/Colaborador';

class ColaboradorService {
  async listColaborador() {
    const allColobordor = Colaborador.findAll();
    return allColobordor;
  }

  async findColaborador({cpf}) {
    const colaborador= await Colaborador.findOne({ where: { cpf } });

    if(!colaborador){
      throw new Error("Não existe cadastro para esse CPF");
    }
    return colaborador
  }

  async addColaborador({nome,sobrenome,cpf,nascimento,email}) {
    const cpfExist = await Colaborador.findOne({where: {cpf}});
    if (cpfExist){
      throw new Error('Já existe cadastro para esse CPF');
    }

    const createColaborador = await Colaborador.create({nome,sobrenome,cpf,nascimento,email})
      
    return createColaborador;
  }
  
    
  async updateColaborador({ nome, sobrenome, cpf, nascimento, email }) {

      const editColaborador = await Colaborador.update(
        {
          nome, sobrenome, nascimento, email
        },
        { where: { cpf } }
      );

      if(editColaborador !== 0){
        const cpfExist = await Colaborador.findOne({where: {cpf}});
        return cpfExist;
      }


    return editColaborador;
  }

  async delColaborador({cpf}) {
    const colaboradorDel = await Colaborador.destroy({ where: { cpf } })
    return colaboradorDel;
  }
}
export default new ColaboradorService();