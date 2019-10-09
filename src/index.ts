import { Carro } from "./Carro";
import { MEletrico } from "./Motor/eletrico";
import { Hidraulica } from "./Direcao/hidraulica";
import { Aro21 } from "./Rodado/Aro21";
import { Auto } from "./Cambio/Auto";
import { Manual } from "./Cambio/manual";

let motor = new MEletrico();
let direcao = new Hidraulica();
let rodado = new Aro21();
let cambio = new Auto();
//let cambio2 = new Manual();
let carro = new Carro(direcao, motor, rodado, cambio);

carro.fazerCurvaCarro();
carro.movimentaCarro();
carro.rodaCarro();
carro.trocaMarchaCarro();