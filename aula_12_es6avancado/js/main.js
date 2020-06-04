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