import EnderecoService from "../../service/EnderecoService";

class EnderecoController{
  async index(req,res){
    try{
    const enderecos = await EnderecoService.listEndereco();

    return res.json({enderecos});
    }catch(error){
      return res.json({error});
    }
  }

  async show(req, res){
    const {colaborador_cpf} = req.params;
    try{
    const {colaborador, endereco} = await EnderecoService.findEndereco({colaborador_cpf});
    
    return res.json({colaborador, endereco});
    }catch(error){
    return res.json({message:error});
  }
  }

  async store(req, res){
    const { colaborador_cpf } = req.params;
    const { cep,rua,numero,bairro,cidade} = req.body;
  
    try{
    const createEndereco = await EnderecoService.addEndereco(
       { cep, rua, numero,bairro,cidade,colaborador_cpf}
      );

    return res.json(createEndereco);
    }catch(error){
      return res.json({message:error});
    }
  }

  async update(req,res){
    const { colaborador_cpf } = req.params;
    const { cep,rua,numero,bairro,cidade } = req.body;
    try{
    const endereco = await EnderecoService.updateEndereco(
      {cep,rua,numero,bairro,cidade, colaborador_cpf}
    );
    return endereco;
    }catch(error){return res.json({error: error})}
  }
} 
export default new EnderecoController();