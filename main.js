// Ejercicio 1: Múltiplos de 5
function multiplosDeCinco() {
    let numero = parseInt(prompt("Introduce un número:"));
    let i = 1;
    let resultado = "Múltiplos de 5 hasta " + numero + ": ";
    while (i <= numero) {
        if (i % 5 === 0) {
            resultado += i + " ";
        }
        i++;
    }
    mostrarResultado(resultado);
}

// Ejercicio 2: ¡Lotería!
function loteria() {
    let num1 = parseInt(prompt("Introduce el primer número (entre 1 y 50):"));
    let num2 = parseInt(prompt("Introduce el segundo número (entre 1 y 50):"));
    let i = 1;
    let resultado = "";
    while (i <= 50) {
        if (i === num1 || i === num2) {
            resultado += i + " ¡Lotería!\n";
        } else {
            resultado += i + "\n";
        }
        i++;
    }
    mostrarResultado(resultado);
}

// Ejercicio 3: Capturar Números
function capturarNumeros() {
    let numeros = [];
    let numero;
    while (numero !== 0) {
        numero = parseInt(prompt("Introduce un número (0 para terminar):"));
        if (numero !== 0) {
            numeros.push(numero);
        }
    }
    mostrarResultado("Números capturados: " + numeros.join(', '));
}

// Ejercicio 4: Capturar Palabras
function capturarPalabras() {
    let palabras = [];
    let palabra;
    while (palabra !== "") {
        palabra = prompt("Introduce una palabra (deja vacío para terminar):");
        if (palabra !== "") {
            palabras.push(palabra);
        }
    }
    mostrarResultado("Palabras capturadas: " + palabras.join(' '));
}

// Ejercicio 5: Días de la Semana
function diasDeLaSemana() {
    let dia;
    while (dia !== "domingo") {
        dia = prompt("Introduce un día de la semana:");
        switch (dia.toLowerCase()) {
            case "lunes":
                alert("Comienza la semana con energía.");
                break;
            case "martes":
                alert("Segundo día de la semana, ¡vamos!");
                break;
            case "miércoles":
                alert("Mitad de semana, sigue adelante.");
                break;
            case "jueves":
                alert("Casi viernes, ¡ánimo!");
                break;
            case "viernes":
                alert("¡Viernes al fin!");
                break;
            case "sábado":
                alert("Disfruta tu fin de semana.");
                break;
            case "domingo":
                alert("Ve a descansar");
                break;
            default:
                alert("Ese no es un día válido.");
                break;
        }
    }
}

function mostrarResultado(mensaje) {
    document.getElementById('output').textContent = mensaje;
}