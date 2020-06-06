/*var sum = function(a, b) {
    return a + b;
}

// Arrow Functions
// Não precisar do return, pq está implícito
var sum = (a, b) => a + b;

console.log(sum(5, 15));

var Obj = () => ({test: 123});

console.log(Obj());

var car = {
    showcContext: function showcContext(){
       this.log('fernando silva noleto');

       setTimeout(() => {
           console.log('after 1000ms');
       }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

car.showcContext();
*/

/*
function multiply(a, b = random()) {
    console.log(b)
    return a * b;
}

function random() {
    return Math.random() * 10;
}

console.log(multiply(1, undefined));
*/
/*
// Enhanced Object Literals
function method() {
    console.log("fernando")
}
var obj = {
    method
}

obj.method();

var obj = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 2));
*/

/*

function sum(a, b) {
    var value = 0;

    for(var i=0; i< arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}

console.log(sum(5, 5, 2, 3));

function somar(... args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(somar(5, 3));

const sum1 = (a, b, ... rest) => {
    console.log(a, b, rest);
}

console.log(sum(5, 7));
*/

/*
var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];

var obj = {
    name: 'Fernando'
};

var { name } = obj;

console.log(name);
*/

//  Introdução aos Iterators
/*
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]();

for (let value of  arr){
    console.log(value);
}

*/
// Introdução ao Generators
/*
function* hello() {
    console.log('Hello');
    yield 1;

    console.log('from');
    const value = yield 2;

    console.log(value);

}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

// TESTES


