/* Manejo del DOM */
const pagina1 = document.getElementById('pantalla1');
const pagina2 = document.getElementById('pantalla2');
const boton1 = document.getElementById('btn');
const botonAtras = document.getElementById('atras');
const pantalla2 = document.getElementById('contenedorPoke');
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

/*filtrar todos los pokemones por tipos */
tipos.addEventListener('change', (event) => {
  const tipoSeleccionado = event.target.value;
  let newarray = [];
  newarray = tipospoke(pokedata, tipoSeleccionado);
  contenedorPoke.innerHTML = poke(newarray);
});

/*filtrar por acendente a descendente */
direccionOrdenado.addEventListener('change', () => {
  const ordenar1 = direccionOrdenado.value;
  console.log(ordenar1);
  let array = [];
  array = ascendente(pokedata, ordenar1);
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
  const huevo = event.target.value;
  let array = [];
  array = huevosfilter(pokedata, huevo);
  contenedorPoke.innerHTML = poke(array);
});


