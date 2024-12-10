let number = prompt("Dime un número entre 1 y 100");
const secretNumb = 7;


if (!isNaN(number) && number.trim() !== "") {
    number = parseInt(number); 
} else {
    console.log("Entrada incorrecta, por favor escribe un número entre 1 y 100.");
    }


if (number < 1 || number > 100) {
    console.log("Error. El número debe estar entre 1 y 100.");
    } else if (number < secretNumb) {
        console.log("Ups, el número secreto es incorrecto, el número es menor. Vuelve a intentarlo");
    } else if (number > secretNumb) {
        console.log("Ups, el número secreto es incorrecto, el número es mayor. Vuelve a intentarlo");
    } else {
        console.log("¡Felicidades, adivinaste el número secreto!");
        }