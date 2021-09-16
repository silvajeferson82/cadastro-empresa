import EnderecoService from "../../service/EnderecoService";

class EnderecoController{
  async store(req, res){
    const { colabaradorId } = req.params;
    const { cep,rua,numero} = req.body;

    console.log(req.params, req.body);

    const createEndereco = await EnderecoService.addEndereco({
        cep, rua, numero, colabaradorId
      });

    if(Object.keys(createEndereco).length === 0){
      return res
        .status(404)
        .json({error:"Não exite colaboardor com ID informado."})
    }  
    return res.json(createEndereco);
  }
} 
export default new EnderecoController();