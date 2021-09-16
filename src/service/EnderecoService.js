import Enderecos from '../models/Enderecos';
import Colaborador from '../models/Colaborador';

class EnderecoService{
  async addEndereco({ cep, rua, numero, colaboradorId }){
    const colaborador = await Colaborador.findByPk(colaboradorId);

    if(colaborador){
      const createEndereco = await Enderecos.create({
        cep, rua, numero, colaboradorId
      });

      return createEndereco;
    }

    const createEndereco = [];
    return createEndereco;
  }
} 

export default new EnderecoService();