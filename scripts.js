console.log(document.title);

document.querySelector('.infocard');

//1- Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
var nombre = document.querySelector('#gen-1');
nombre.innerHTML = "Generasión 1 Pokimon"


//2- Cambia el color de fondo de la primera generación de Pokimon.
var color=document.querySelector('.infocard-list');
color.style = 'background-color: #e3f5fd';

//3-Imprime por consola la URL de la página.

console.log("La URL d ela página es: "+window.location.href);

//4-Imprime por consola el dominio de la página.

console.log("El dominio de la página es: "+window.location.hostname);

//5-Imprime todos los nodos de imagen.

const myNodelist = document.querySelectorAll("img");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].innerHTML;
}

console.log(myNodelist);

/*6- Sustituye el atributo "src" de todas las imágenes por este 
    "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"*/

    const imagen = document.querySelectorAll("img");
    for (let i = 0; i < imagen.length; i++) {
        imagen[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    }

   // console.log(imagen);

/* Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon 
    voladores itype flying*/