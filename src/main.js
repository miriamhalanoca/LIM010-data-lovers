

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

/* main template  */
const poke = (pokemon) => {
  let almacenar = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let item = `
      <div class="contentpoke">
      <img class="imagenespoke" src="${pokemon[i].img}"/>
      <p class ="id">  ${pokemon[i].id}</p>
      <p class ="name"> ${pokemon[i].name}</p>
      <p class="huevo"> ${pokemon[i].egg}</p>
      </div>`;
    almacenar += item;
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
  arrayabc = ordenaralfabeticamente(pokedata, ordenarabcd);
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
