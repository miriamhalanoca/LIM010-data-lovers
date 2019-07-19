

/* Manejo del DOM */
const paginaUno = document.getElementById('pantallaUno');
const paginaDos = document.getElementById('pantallaDos');
const botonUno = document.getElementById('btn');
const botonInicio = document.getElementById('atras');
const encontrarPoke = document.getElementById('buscador');
const ordenAbc = document.getElementById('ordenar');
const tipos = document.getElementById('tipos');
const direccionOrdenado = document.getElementById('direccion-ordenado');
const pokefragil = document.getElementById('poke-debilidades');
const seleccionarHuevo = document.getElementById('eclosionar');
const menu = document.getElementById('menu-buscador');
const inicioaz = document.getElementById('Start');
const mayormenor = document.getElementById('Order');
const pokedata = POKEMON.pokemon;
let contador = 0;

/* login */
botonUno.addEventListener('click', (event) => {
  event.preventDefault();
  const contraseña = document.getElementById('pass').value;
  const usuario = document.getElementById('nombre').value;
  if (usuario === '' && contraseña === '') {
    paginaUno.classList.add('hide');
    paginaDos.classList.remove('hide');
    botonInicio.classList.remove('hide');
    document.getElementById('botones').classList.remove('hide');
  } else {
    contador = contador + 1;
    document.getElementById('error').innerHTML = 'la contraseña incorecta';
    if (contador === 3) {
      document.getElementById('error').innerHTML = 'la contraseña es incorrecta vuelva a intentarlo mas tarde';
    }
  }
});

/* boton de regreso a inicio */
botonInicio.addEventListener('click', () => {
  paginaDos.classList.add('hide');
  paginaUno.classList.remove('hide');
  botonInicio.classList.add('hide');
  document.getElementById('botones').classList.add('hide');
});

/* boton de orden alfabetico */
inicioaz.addEventListener('click', () => {
  ordenAbc.classList.remove('hide');
  direccionOrdenado.classList.add('hide');
  tipos.classList.add('hide');
  pokefragil.classList.add('hide');
  seleccionarHuevo.classList.add('hide');
});

/* boton por ascendente y decendente */
mayormenor.addEventListener('click', () => {
  direccionOrdenado.classList.remove('hide');
  ordenAbc.classList.add('hide');
  tipos.classList.add('hide');
  pokefragil.classList.add('hide');
  seleccionarHuevo.classList.add('hide');
});

/* boton de tipos de pokemones */
document.getElementById('Filter').addEventListener('click', () => {
  ordenAbc.classList.add('hide');
  direccionOrdenado.classList.add('hide');
  tipos.classList.remove('hide');
  pokefragil.classList.add('hide');
  seleccionarHuevo.classList.add('hide');
});

/* boton de devilidades */
document.getElementById('icon-devilidades').addEventListener('click', () => {
  ordenAbc.classList.add('hide');
  direccionOrdenado.classList.add('hide');
  tipos.classList.add('hide');
  pokefragil.classList.remove('hide');
  seleccionarHuevo.classList.add('hide');
});

/* boton de eclosionar */
document.getElementById('calculando').addEventListener('click', () => {
  ordenAbc.classList.add('hide');
  direccionOrdenado.classList.add('hide');
  tipos.classList.add('hide');
  pokefragil.classList.add('hide');
  seleccionarHuevo.classList.remove('hide');
});

/* main */
const poke = (pokemon) => {
  let almacenar = '';
  let tiposA = '';
  for (let i = 0; i < pokemon.length; i++) {
    for (let x = 0; x < pokemon[i].type.length; x++) {
      tiposA += `<span class="item-tipos ${pokemon[i].type[x]}-tipo"> ${pokemon[i].type[x]}</span>`;
    };
    let item = `
      <div id="${pokemon[i].id}" name="pokemon" class="contentpoke">
      <img class="imagenespoke" src="${pokemon[i].img}"/>
      <p class ="numero">N° ${pokemon[i].num}</p>
      <p class ="name"> ${pokemon[i].name}</p>
      <p class="tipos"> ${tiposA}</p>
      </div>`;
    almacenar += item;
    tiposA = '';
  }
  return almacenar;
};
contenedorPoke.innerHTML = poke(pokedata);

/* filtrar todos los pokemones por tipos */
tipos.addEventListener('change', (event) => {
  document.getElementById('porcentaje').classList.add('hide');
  const tipoSeleccionado = event.target.value;
  let newarray = [];
  newarray = tipospoke(pokedata, tipoSeleccionado);
  contenedorPoke.innerHTML = poke(newarray);
});

/* filtrar todos los pokemones por debilidades */
pokefragil.addEventListener('change', (event) => {
  document.getElementById('porcentaje').classList.add('hide');
  const fragil = event.target.value;
  let newarraydebil = [];
  newarraydebil = pokeDebilidad(pokedata, fragil);
  contenedorPoke.innerHTML = poke(newarraydebil);
});

/* filtrar por acendente a descendente */
direccionOrdenado.addEventListener('change', () => {
  document.getElementById('porcentaje').classList.add('hide');
  const ordenarUno = direccionOrdenado.value;
  console.log(ordenarUno);
  let array = [];
  array = descendente(pokedata, ordenarUno);
  contenedorPoke.innerHTML = poke(array);
});

/* ordenar alfabeticamente */
ordenAbc.addEventListener('change', () => {
  document.getElementById('porcentaje').classList.add('hide');
  const ordenarabcd = ordenAbc.value;
  console.log(ordenarabcd);
  let arrayabc = [];
  arrayabc = ordenAlfabeticamente(pokedata, ordenarabcd);
  contenedorPoke.innerHTML = poke(arrayabc);
});

/*  eclosionar huevos */
seleccionarHuevo.addEventListener('change', (event) => {
  document.getElementById('porcentaje').classList.remove('hide');
  const eggspoke = event.target.value;
  let array = [];
  array = huevosfilter(pokedata, eggspoke);
  contenedorPoke.innerHTML = poke(array);
  document.getElementById('porcentaje').innerHTML = `El porcentaje de ${eggspoke} es : ${((array.length) / 151 * 100).toFixed(2)} %`;
});

/* buscar pokemones */
encontrarPoke.addEventListener('input', (event) => {
  const pokeBusca = event.target.value.toLowerCase();
  const pokebuscado = buscador(pokedata, pokeBusca);
  contenedorPoke.innerHTML = poke(pokebuscado);
});

/* modal */
const modalMask = document.getElementById('modal-mask');
// const modalBox = document.getElementById('modal-box');
const infoPokemon = document.getElementById('info-pokemon');
const close = document.getElementById('close');

const openModal = () => {
  const eventIdPokemon = parseInt(event.target.parentElement.id);
  const newArray = pokedata.map(obj => {
    return obj.id;
  }).indexOf(eventIdPokemon);
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    modalMask.classList.remove('hide');
    infoPokemon.innerHTML = `
    <img class="img-modal" src="${pokedata[newArray].img}">
    <p class="name-modal">${pokedata[newArray].weight}</p>
    <p></p>
    <p></p>
    <p></p>
    `;
  }
  // console.log(eventIdPokemon);
};
contenedorPoke.addEventListener('click', () => {
  openModal();
});
close.addEventListener('click', () => {
  modalMask.classList.add('hide');
});


