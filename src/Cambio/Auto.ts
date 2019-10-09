import { Cambio } from "./Cambio";

export class Auto implements Cambio{

    public trocaMarcha() : void{
        console.log("trocando de marcha de forma automatica");
    }
}