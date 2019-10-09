import { Cambio } from "./Cambio";

export class Manual implements Cambio{

    public trocaMarcha() : void{
        console.log("trocando de marcha de formma Manual")
    }
}