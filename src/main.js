/* Manejo del DOM */
const pagina1 = document.getElementById('pantalla1');
const pagina2 = document.getElementById('pantalla2');
const boton1 = document.getElementById('btn');
const pantalla2 = document.getElementById('contenedorPoke');
const ordenAZ = document.getElementById('pet-select');
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
    document.getElementById('error').innerHTML = 'la contraseña es incorrecta';
    if (contador === 3) {
      document.getElementById('error').innerHTML = 'la contraseña es incorrecta vuelva a intentarlo mas tarde';
    }
  }
});
const botonAtras = document.getElementById('atras');
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
      </div>`;
    almacenar += item;
  }
  return almacenar;
};
contenedorPoke.innerHTML = poke(pokedata);
/* ordenar de la A-Z */
const filterpoke = () => {
  const namepoke = [];
  const arrAZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (let i = 0; i < arrAZ.length; i++) {
    for (let x = 0; x < pokedata.length; x++) {
      if (arrAZ[i] === pokedata[x].name[0]) {
        namepoke.push(pokedata[x]);
      }
    }
  }
  return namepoke;
};
ordenAZ.addEventListener('change', (event) => {
  if ('A-Z' === ordenAZ.value) {
    const ordenar = filterpoke();
    contenedorPoke.innerHTML = poke(ordenar);
  }
});
/* ordenar de Z-A */
const ordenarpokemones1 = () => {
  const nombrepokemones1 = [];
  const arrayordenAZ1 = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  for (let i = 0; i < arrayordenAZ1.length; i++) {
    for (let j = 0; j < pokedata.length; j++) {
      if (arrayordenAZ1[i] === pokedata[j].name[0]) {
        nombrepokemones1.push(pokedata[j]);
      }
    }
  }
  return nombrepokemones1;
};
ordenAZ.addEventListener('change', () => {
  if ('Z-A' === ordenAZ.value) {
    const ordenar1 = ordenarpokemones1();
    contenedorPoke.innerHTML = poke(ordenar1);
  }
});
const tipospoke = (data, tipos) => {
  let listatipos = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === tipos) {
        listatipos.push(data[i]);
      }

    }
  }
  return listatipos;
};

tipos.addEventListener('change', () => {
  const tipos = document.getElementById('tipos').value;
  let array = [];
  array = tipospoke(pokedata, tipos);
  contenedorPoke.innerHTML = poke(array);

});


