
/* Manejo del DOM */
const pagina1 = document.getElementById('pantalla1');
const pagina2 = document.getElementById('pantalla2');
const boton1 = document.getElementById('btn');
const botonAtras = document.getElementById('atras');
const encontrarPoke = document.getElementById('buscador');
const ordenAZ = document.getElementById('ordenar');
const tipos = document.getElementById('tipos');
const direccionOrdenado = document.getElementById('direccion-ordenado');
const seleccionarHuevo = document.getElementById('eclosionar');
const pokedata = POKEMON.pokemon;
let contador = 0;


/* login */
boton1.addEventListener('click', (event) => {
  event.preventDefault();
  const contraseña = document.getElementById('pass').value;
  const nombre1 = document.getElementById('nombre').value;
  if (nombre1 === '' && contraseña === '') {
    pagina1.classList.add('hide');
    pagina2.classList.remove('hide');
  } else {
    contador = contador + 1;
    document.getElementById('error').innerHTML = 'la contraseña incorect';
    if (contador === 3) {
      document.getElementById('error').innerHTML = 'la contraseña es incorrecta vuelva a intentarlo mas tarde';
    }
  }
});

/* boton de regreso a inicio */
botonAtras.addEventListener('click', () => {
  pagina2.classList.add('hide');
  pagina1.classList.remove('hide');
});

/* main */
const poke = (pokemon) => {
  let almacenar = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let item = `
      <div class="contentpoke">
      <img class="imagenespoke" src="${pokemon[i].img}"/>
      <p class ="id">  ${pokemon[i].id}</p>
      <p class ="name"> ${pokemon[i].name}</p>
      <p class="numero"> ${pokemon[i].num}</p>
      <p class="huevo"> ${pokemon[i].egg}</p>
      </div>`;
    almacenar += item;
  }
  return almacenar;
};
contenedorPoke.innerHTML = poke(pokedata);

/* filtrar todos los pokemones por tipos */
tipos.addEventListener('change', (event) => {
  const tipoSeleccionado = event.target.value;
  let newarray = [];
  newarray = tipospoke(pokedata, tipoSeleccionado);
  contenedorPoke.innerHTML = poke(newarray);
});

/* filtrar por acendente a descendente */
direccionOrdenado.addEventListener('change', () => {
  const ordenar1 = direccionOrdenado.value;
  console.log(ordenar1);
  let array = [];
  array = descendente(pokedata, ordenar1);
  contenedorPoke.innerHTML = poke(array);
});

/* ordenar de la A-Z */
ordenAZ.addEventListener('change', () => {
  if ('A-Z' === ordenAZ.value) {
    const ordenar = filterpoke();
    contenedorPoke.innerHTML = poke(ordenar);
  }
});
/* ordenar de Z-A */
ordenAZ.addEventListener('change', () => {
  if ('Z-A' === ordenAZ.value) {
    const ordenar1 = ordenarpokemones1();
    contenedorPoke.innerHTML = poke(ordenar1);
  }
});

/*  eclosionar huevos */
seleccionarHuevo.addEventListener('change', (event) => {
  const eggspoke = event.target.value;
  let array = [];
  array = huevosfilter(pokedata, eggspoke);
  contenedorPoke.innerHTML = poke(array);
  document.getElementById('porcentaje').innerHTML = `el porcentaje de ${eggspoke} es : ${((array.length) / 151 * 100).toFixed(2)} %`;
});

/* buscar pokemones */
encontrarPoke.addEventListener('input', (event) => {
  const pokeBusca = event.target.value.toLowerCase();
  const pokebuscado = buscador(pokedata, pokeBusca);
  contenedorPoke.innerHTML = poke(pokebuscado);
});

/* Modal */
// const pantalla2 = document.getElementById('contenedorPoke');
// /* al contenedor le agrego un evento clik */
// pantalla2.addEventListener('click', () => {
//   const pokecito = event.target.parentElement.id - 1;
//   console.log(pokecito);
//   /* Pongo condicional que si el atributo name  del padre de ese elemento es pokemon, muestra modal e inserta datos del pokemon */
//   if (event.target.parentElement.getAttribute('name') === 'pokemon') {
//     /* Muestra modal */
//     document.getElementById('my-modal').classList.remove('ocultar');
//     /* Insertar info de pokemon en Modal */
//     document.getElementById('caracteristicas').innerHTML = `
// <img class="imagenModal" src="${pokedata[pokecito].img}"/>
// <p> Nombre:${pokedata[pokecito].name}</p>
// <p>Peso: ${pokedata[pokecito].weight}</p>
// <p>Altura: ${pokedata[pokecito].height}</p>
// <p>Tipo: ${pokedata[pokecito].type}</p> `;
//   }
// });
// document.getElementById('close').addEventListener('click', () => {
//   document.getElementById('my-modal').classList.add('ocultar');
//  });

