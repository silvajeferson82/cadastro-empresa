import Enderecos from '../models/Enderecos';
import Colaborador from '../models/Colaborador';

class EnderecoService{
  async findEndereco({colaborador_cpf}){
    console.log('CHEGOU AQUI..');

    const enderecoColaborador = await Colaborador.findOne(
      {
        where: {cpf: colaborador_cpf},
        include:[{model: Enderecos}],
      });
    
    return enderecoColaborador;
  }

  async addEndereco( {cep,rua,numero,bairro,cidade,colaborador_cpf} ){
    try{
      const colaborador = await Colaborador.findOne({where: {cpf: colaborador_cpf}});
    
    if(!colaborador){
      const colaboradorNull = [];
      return colaboradorNull;
    }

    const createEndereco = await Enderecos.create({
      colaborador_cpf,cep,rua,numero,bairro,cidade
    })

    return createEndereco;
    }catch(err){return err}
    
  }
} 

export default new EnderecoService();