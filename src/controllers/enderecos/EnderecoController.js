import EnderecoService from "../../service/EnderecoService";

class EnderecoController{
  async store(req, res){
    const { colaboradorId } = req.params;
    const { cep,rua,numero} = req.body;

    const createEndereco = await EnderecoService.addEndereco(
        cep, rua, numero, colaboradorId
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