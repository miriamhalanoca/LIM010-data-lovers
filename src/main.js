/* Manejo del DOM */
const pagina1 = document.getElementById('pantalla1');
const pagina2 = document.getElementById('pantalla2');
const boton1 = document.getElementById('btn');


/* inicio login */
let contador = 0;

boton1.addEventListener('click', (event) => {
  event.preventDefault();
  const contraseña = document.getElementById('pass').value;
  const nombre1 = document.getElementById('nombre').value;

  if (nombre1 === 'LABORATORIA' && contraseña === 'LABORATORIA') {
    pagina1.classList.add('hide');
    pagina2.classList.remove('hide');
  }
  else {
    contador = contador + 1;
    document.getElementById('error').innerHTML = 'la contraseña es incorrecta'
    if (contador === 3) {
      document.getElementById('error').innerHTML = 'no se reconoce la contraseña'
    }
  }

});
const botonAtras = document.getElementById('atras');
botonAtras.addEventListener('click', () => {
  pagina2.classList.add('hide');
  pagina1.classList.remove('hide');
});

/* fin Login*/

/* mostrar data*/
const datapokemon = document.getElementById('POKEMON.pokemon');
const contenedorpoke = document.getElementById('contenedorpokemones');

const mostrarpoke = (pokemon) => {
  let resultado = ' ';
  for (let i = 0; i < pokemon.length; i++)
  let  llamar = `
  <div> 
  <img src = "${pokemon[i].img}"/>
  <p> nombre= ${pokemon[i].name}</p>
  <div>`;
  resultado += llamar;
}
return resultado;
};
allpokemones.innerHTML = mostrarpoke(datapokemon)








