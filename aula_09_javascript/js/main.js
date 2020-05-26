/*alert('Meu alerta');

var lista = ["maça", "pêra", 168, nomecompleto = ["fernando", "silva"]];
lista.push(1.65);
lista.push(true);
console.log(lista);

var fruta = {nome: "maça", cor: "laranja"};
console.log(fruta);
*/

/*
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/

/*
var count = 0;
while(count <= 5) {
    console.log(count);
    count += 1;
}
*/

/*
for (count = 0; count <= 5; count++){
    alert(count);
}


var date = new Date();
alert(date.getDay());
*/
/*
function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

function botaoClicado(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!!!</b>";
}

function redirecionar(){
    window.open("https://www.globo.com/");
    //window.location.href = "https://www.globo.com/";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse!!!";
    elemento.innerHTML = "Obrigado por passar o mouse!!!";
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!!!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


