/* Manejo del DOM */
const paginaUno = document.getElementById('pantalla1');
const paginaDos = document.getElementById('pantallaDos');
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
    paginaUno.classList.add('hide');
    paginaDos.classList.remove('hide');
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
  paginaDos.classList.add('hide');
  paginaUno.classList.remove('hide');
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

const tipospoke = (data, tipo) => {
  let listatipos = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === tipo) {
        listatipos.push(data[i]);
      }

    }
  }
  return listatipos;
};