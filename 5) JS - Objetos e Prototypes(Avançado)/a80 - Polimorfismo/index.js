// SuperClass 
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;


}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: R$: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/C: ${this.agencia}/${this.conta} | ` + 
    `Saldo: R$: ${this.saldo.toFixed(2)}`
    );
}

// Polimorfismo -> Fazer um método se comportar de forma diferente, em classes filhas do mesmo pai
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); // Herença
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){ //Sobrecrito, pode sacar até o limite negativo
        console.log(`Saldo insuficiente: R$: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

// Polimorfismo -> Fazer um método se comportar de forma diferente, em classes filhas do mesmo pai.
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo); // Herença
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const conta1 = new Conta(11,22,10);
const contaC1 = new ContaCorrente(11,22,0,100);
/*
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(30);
conta1.sacar(30);
*/

contaC1.depositar(10);
contaC1.sacar(110);
contaC1.sacar(1);

const contaP1 = new ContaPoupanca(12,33,0);

contaP1.depositar(10);
contaP1.sacar(110);
contaP1.sacar(1);


