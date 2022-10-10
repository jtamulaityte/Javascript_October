/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.read = function() {
        this.a = +prompt('What is "a" number?', 0);
        this.b = +prompt('What is "b" number?', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.subtraction = function() {
        return this.a - this.b;
    };
    this.multiplication = function() {
        return this.a * this.b;
    };
    this.division = function() {
        return this.a / this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum());
alert("Subtraction = " + calculator.subtraction());
alert("Multiplication = " + calculator.multiplication());
alert("Division = " + calculator.division());

