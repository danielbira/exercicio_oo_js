function Acelerar (tipo){
    this.tipo = tipo;
    this.correr = function(){
        console.log("O " + this.tipo + " da cor " + this.cor + " esta correndo ");
    }
}

function Veiculo(tipo, modelo, cor){
    this.modelo = modelo;
    this.cor = cor;

    Acelerar.call (this, tipo);
}


const carro = new Veiculo ("carro", "bmw", "verde");
const moto = new Veiculo ("moto", "honda", "preta");
carro.correr();
moto.correr();