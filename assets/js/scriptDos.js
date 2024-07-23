/*crear un programa que pida al usuario ingresar la temperatura en grados celsius y que la transforme a grados kelvin y fareheit. (2)  */
/* celsius a kelvin 0 °C + 275.15 = 273.15 K */
/* celsius a fahrenheit: (0 °C x 9/5) +32 = 32 °F */

/* pedir el dato en celsius  */

 var celsius = prompt('ingresar los grados en celsius');
/* parsear a decimal */
 celsius = parseFloat(celsius);
 
 /* transformar a kelvin */
 /* 0 °C + 275.15 = 273.15 K  */
 /* 0 °C + 275.15 = 273.15 K */
 var kelvin = parseFloat(celsius) + 273.15;
 console.log(`el valor en kelvin de ${celsius} celsius es de: ${kelvin}`);
 /* transformar a fahrenheit */
 /* celsius a fahrenheit: (0 °C x 9/5) +32 = 32 °F */
 var fahrenheit = (celsius * 1.8) + 32;
 console.log(`el valor en fahrenheit de $(celsius) celsius es de: ${fahrenheit}`);