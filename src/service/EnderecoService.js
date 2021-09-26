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

      if(!endereco){
        throw new Error ("Não existe endereço para esse CPF")
      }
    
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
    const endereco = await Enderecos.findOne({where: {colaborador_cpf}});
  
    if(!endereco){
      throw new Error ("Não existe endereço para esse CPF")
    }
    
    const editEndereco = await Enderecos.update(
      { 
        cep,rua,numero,bairro,cidade
      },
      { where: {colaborador_cpf}}
    );

    let enderecoUpdated;

    if(editEndereco !== 1){
      enderecoUpdated = await Enderecos.findOne({where: {colaborador_cpf}});
    }

    return enderecoUpdated;
  }

  async delEndereco({colaborador_cpf}){
    const deletEndereco = await Enderecos.destroy({where: {colaborador_cpf}});

    if(!deletEndereco){
      throw new Error('Não foi localizado cadastro para esse CPF.');
    }

    return deletEndereco;
  }
} 

export default new EnderecoService();