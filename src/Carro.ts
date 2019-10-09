import { Direcao } from "./Direcao/Direcao";
import { Motor } from "./Motor/Motor";
import { Rodado } from "./Rodado/Rodado";
import { Cambio } from "./Cambio/Cambio";

export class Carro{
    private direcao : Direcao;
    private motor : Motor;
    private rodado : Rodado;
    private cambio : Cambio;

    constructor(direcao : Direcao, motor : Motor, rodado : Rodado, cambio : Cambio){
        this.cambio = cambio;
        this.direcao = direcao;
        this.motor = motor;
        this.rodado = rodado;
    }

    public trocaMarchaCarro() : void{
        this.cambio.trocaMarcha();
    }

    public fazerCurvaCarro() : void{
        this.direcao.fazerCurva();
    }

    public movimentaCarro() : void{
        this.motor.movimentarCarro();
    }
    
    public rodaCarro() : void{
        this.rodado.roda();
    }
}