"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(direcao, motor, rodado, cambio) {
        this.cambio = cambio;
        this.direcao = direcao;
        this.motor = motor;
        this.rodado = rodado;
    }
    Carro.prototype.trocaMarchaCarro = function () {
        this.cambio.trocaMarcha();
    };
    Carro.prototype.fazerCurvaCarro = function () {
        this.direcao.fazerCurva();
    };
    Carro.prototype.movimentaCarro = function () {
        this.motor.movimentarCarro();
    };
    Carro.prototype.rodaCarro = function () {
        this.rodado.roda();
    };
    return Carro;
}());
exports.Carro = Carro;
