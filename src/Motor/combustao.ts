import { Motor } from "./Motor";

export class Combustao implements Motor {

    public movimentarCarro() : void{
        console.log("Movimentando carro via Combustão");
    }
}