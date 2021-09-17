import Enderecos from '../models/Enderecos';
import Colaborador from '../models/Colaborador';

class EnderecoService{
  async addEndereco( cep, rua, numero, colaboradorId ){
    console.log('TESTE AQUI--',cep, rua, numero, colaboradorId);
    const colaborador = await Colaborador.findByPk(colaboradorId);
    console.log(colaborador);
    if(colaborador){
      const createEndereco = await Enderecos.create({
        cep, rua, numero, colaboradorId,
      })

      return createEndereco;
    }

    const colaboradorNull = [];
    return colaboradorNull;
    
  }
} 

export default new EnderecoService();