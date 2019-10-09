import { Direcao } from "./Direcao";

export class Hidraulica implements Direcao{

    public fazerCurva() : void {
        console.log("Fazendo curva(hidraulico)");
    }
}