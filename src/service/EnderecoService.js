import Enderecos from '../models/Enderecos';
import Colaborador from '../models/Colaborador';

class EnderecoService{
  async listEndereco(){
    const enderecos =  await Enderecos.findAll();

    return enderecos;
  }

  async findEndereco({colaborador_cpf}){
    const colaborador = await Colaborador.findOne(
      {
        where: {cpf: colaborador_cpf}
      });

      if(!colaborador){
        throw new Error ("Não existe cadastro para esse CPF")
      }

      const endereco = await Enderecos.findOne({where: {colaborador_cpf}});
    
    return { colaborador, endereco };
  }

  async addEndereco( {cep,rua,numero,bairro,cidade,colaborador_cpf} ){

    const colaborador = await Colaborador.findOne({where: {cpf: colaborador_cpf}});
    
    if(!colaborador){
      throw new Error ("Não existe cadastro para esse CPF")
    }

    const createEndereco = await Enderecos.create({
      colaborador_cpf,cep,rua,numero,bairro,cidade
    })

    return createEndereco;
    
  }
  async updateEndereco({cep,rua,numero,bairro,cidade,colaborador_cpf}){
    const colaborador = await Colaborador.findOne({where: {cpf: colaborador_cpf}});
    
    if(!colaborador){
      throw new Error ("Não existe cadastro para esse CPF")
    }

    const editEndereco = await Enderecos.update(
      { 
        cep,rua,numero,bairro,cidade
      },
      { where: {colaborador_cpf}}
    )

    return editEndereco;
  }
} 

export default new EnderecoService();