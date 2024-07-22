/* declarar dos variables */ 
var numeroUno;
var numeroDos;
var resultado;

/* solicitar los dos numero al usuario */
numeroUno = prompt('ingresa el primer numero:' );
numeroDos = prompt('ingresa el segundo numero:' );

/* parsear los datos */
numeroUno = parseFloat(numeroUno);
numeroDos = parseFloat(numeroDos)


/* realizar cada operacion */
var suma = numeroUno + numeroDos;
var resta = numeroUno - numeroDos;
var division = numeroUno / numeroDos;
var multiplicacion = numeroUno * numeroDos;
var modulo =  numeroUno % numeroDos;

/* mostrar cada resultado en pantalla */
resultado = numeroUno + numeroDos;
console.log(`el resultado de la suma es ${suma}`);
resultado = numeroUno - numeroDos;
console.log(`el resultado de la resta es ${resta}`);
resultado = numeroUno / numeroDos;
console.log(`el resultado de la division es ${division}`);
resultado = numeroUno * numeroDos;
console.log(`el resultado de la multiplicacion es ${multiplicacion}`);
resultado = numeroUno % numeroDos;
console.log(`el resultado del modulo es ${modulo}`);

/* forma 3  */
var numeroUno = parseFloat(prompt('ingresa el primer numero'));
var numeroDos = parseFloat}(prompt('ingresa el primer numero'));
