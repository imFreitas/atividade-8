// CIRCULO
var raio = prompt("Raio do circulo: ");

raio = parseFloat(raio);

var area = Math.PI * raio * raio;

alert("Area da circunferencia = "+ area);
///////////////////////////////////////////////////////////////////////////////////////

// TRIANGULO

var base = prompt("Base do triangulo");
var altura = prompt("Altura do Triangulo");

var area = base * altura/2;

alert ("Area do triangulo = "+ area);

///////////////////////////////////////////////////////////////////////////////////////

//PARALELOGRAMA

var base = prompt("Base do paralelograma");
var altura = prompt("Altura do paralelograma");

var area = base * altura;

alert ("Area do paralelograma="+ area);

///////////////////////////////////////////////////////////////////////////////////////

//TRAPEZIO 

var base_maior = prompt("Base maior do trapezio");
var base_menor = prompt("Base menor do trapezio");

var area = base_maior * base_menor;

alert ("Area do trapezio="+ area);



///////////////////////////////////////////////////////////////////////////////////////

//LOSANGO

var diagonal_maior = prompt("diagonal maior do losango");
var diagonal_menor = prompt("diagonal menor do losango");

var diagonal_menor = diagonal_maior * altura/2;

alert ("Area do losango="+ area);



///////////////////////////////////////////////////////////////////////////////////////

//QUADRADO  

var lado = prompt("Base maior do trapezio");
var area = lado * lado;

alert ("Area do quadrado="+ area);



///////////////////////////////////////////////////////////////////////////////////////

//RETANGULO

var base = prompt("Base do retangulo");
var altura = prompt("Altura do retangulo");

var area = base * altura;

alert ("Area do retangulo="+ area);



