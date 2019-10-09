"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var eletrico_1 = require("./Motor/eletrico");
var hidraulica_1 = require("./Direcao/hidraulica");
var Aro21_1 = require("./Rodado/Aro21");
var Auto_1 = require("./Cambio/Auto");
var motor = new eletrico_1.MEletrico();
var direcao = new hidraulica_1.Hidraulica();
var rodado = new Aro21_1.Aro21();
var cambio = new Auto_1.Auto();
//let cambio2 = new Manual();
var carro = new Carro_1.Carro(direcao, motor, rodado, cambio);
carro.fazerCurvaCarro();
carro.movimentaCarro();
carro.rodaCarro();
carro.trocaMarchaCarro();