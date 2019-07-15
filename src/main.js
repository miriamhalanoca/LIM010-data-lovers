/* Manejo del DOM */
const pagina1 = document.getElementById('pantalla1');
const pagina2 = document.getElementById('pantalla2');
const boton1 = document.getElementById('btn');

const ordenAZ = document.getElementById('ordenar');
const buscador = document.getElementById('botonbuscar');
const namebuscador = document.getElementById('nombre');
// const botoneclosionar = document.getElementById('petSelect1');
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
const botonAtras = document.getElementById('atras');
botonAtras.addEventListener('click', () => {
  pagina2.classList.add('hide');
  pagina1.classList.remove('hide');
});
// /* Modal */
// const contenedorPokecito = document.getElementById('contenedorPoke');
// /* al contenedor le agrego un evento clik */
// contenedorPokecito.addEventListener('click', () => {
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

// cerrando Modal
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('ocultar');
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
      <p class="huevos"> ${pokemon[i].egg}</p>
      </div>`;
    almacenar += item;
  }
  return almacenar;
};
contenedorPoke.innerHTML = poke(pokedata);

/* buscador */
/* const buscarpoke = (pokedata) => {
  let llamado = '';
  for (let i = 0; i < pokedata.length; i++) {
    if (namebuscador.value === pokedata[i].nombre && i < pokedata.length) {
      llamado = `
      <div class="contentpoke">
      <img class="imagenespoke" src="${pokedata[i].img}"/>
      <p class ="id">  ${pokedata[i].id}</p>
      <p class ="name"> ${pokedata[i].name}</p>
      <p class="numero"> ${pokedata[i].num}</p>
      <p class="huevos"> ${pokedata[i].egg}</p>
      </div>`;
      break;
    }
  }
  return llamado;
};

buscador.addEventListener('click', () => {
  contenedorPoke.innerHTML = buscarpoke(pokedata);
});*/
/* filtrado por tipos */
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
tipos.addEventListener('change', (event) => {
  const tipos = event.target.value;

  //  document.getElementById('tipos').value;
  let array = [];
  array = tipospoke(pokedata, tipos);
  contenedorPoke.innerHTML = poke(array);
});
/* filtrar por acendente a descendente  */
const descendente = (data, ordenar1) => {
  // eslint-disable-next-line id-length
  const ordenarMayorMenor = data.sort((a, b) => {
    if (a.spawn_chance > b.spawn_chance) {
      return 1;
    }
    if (a.spawn_chance < b.spawn_chance) {
      return -1;
    }
    return 0;
  });
  if (ordenar1 === '1') {
    return ordenarMayorMenor;
  }
  if (ordenar1 === '2') {
    return ordenarMayorMenor.reverse();
  }
  return 0;
};
tipo.addEventListener('change', () => {
  const ordenar1 = document.getElementById('tipo').value;
  let arrai = [];
  arrai = descendente(pokedata, ordenar1);
  contenedorPoke.innerHTML = poke(arrai);
});

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
const huevosfilter = (kilometros) => {
  const filtrarhuevos = pokedata.filter(pokedata1 => pokedata1.egg === kilometros);
  console.log(filtrarhuevos);
};
huevosfilter('10 km');


botoneclosionar.addEventListener('change', (event) => {
  const eclosionar = event.target.value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
});
contenedorPoke.innerHTML = poke(eclosionar);


  // const containerCalcu = document.getElementById('petSelect1');
  // containerCalcu.addEventListener('change', (event) => { 
  //   document.getElementById('respuestas').innerHTML = (window.POKE.computeStats(dataPoke, event.target.getAttribute('value')));




// console.log(huevosfilter(event.target.value));
// let filtrarhuevos = [];
// filtrarhuevos = huevosfilter(pokedata, eclosionar);
// console.log(filtrarhuevos);


// const neweclosionar = huevosfilter(pokedata, eclosionar);





//const filtrarhuevos = pokedata.filter(pokedata1 => pokedata1.egg === '5 km');
//console.log(filtrarhuevos);