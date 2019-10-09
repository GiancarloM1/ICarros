import { Motor } from "./Motor";

export class MEletrico implements Motor{
    
    public movimentarCarro() : void{
        console.log("Movimentando carro com motor eletrico");
    }
}