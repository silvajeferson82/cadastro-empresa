import EnderecoService from "../../service/EnderecoService";

class EnderecoController{
  async show(req, res){
    const {colaborador_cpf} = req.params;

    const enderecoColaborador = await EnderecoService.findEndereco({colaborador_cpf});
    /* if(!enderecoColaborador){
      return res
        .status(404)
        .json({error:"Não existe endereco para CPF informado."})
    } */
    return res.json(enderecoColaborador);
  }

  async store(req, res){
    const { colaborador_cpf } = req.params;
    const { cep,rua,numero,bairro,cidade} = req.body;
    console.log(colaborador_cpf);
    const createEndereco = await EnderecoService.addEndereco(
       { cep, rua, numero,bairro,cidade,colaborador_cpf}
      );

    if(Object.keys(createEndereco).length === 0){
      return res
        .status(404)
        .json({error:"Não exite colaboardor com ID informado."})
    }  
    return res.json(createEndereco);
  }
} 
export default new EnderecoController();