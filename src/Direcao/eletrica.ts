import { Direcao } from "./Direcao";

export class Eletrica implements Direcao{

    public fazerCurva() : void{
        console.log("Fazendo curva(Eletrica)");
    }
}