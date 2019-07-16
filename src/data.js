/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// data.js
const obteniendodatapoke = (mostradata) => {
  arraydatapokemon = [];
  for (let i = 0; i < mostradata.length; i++); {
    arraydatapokemon.push({
      numero: mostradata[i].num,
      imagenes: mostradata[i].img,
      nombre: mostradata[i].name,
      identidad: mostradata[i].id,
      tipos: mostradata[i].type,
      altura: mostradata[i].height,
      ancho: mostradata[i].weight,
      dulces: mostradata[i].candy,
      contardulces: mostradata[i].candy_count,
      posibilidadesenordo: mostradata[i].spawn_chance,
      multiplicadores: mostradata[i].multipliers,
      debilidad: mostradata[i].weaknesses,
      huevo1: mostradata[i].egg,

    });
  }
  return arraydatapokemon;
};

/* filtrado por poderes de pokemones */

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




/*filtrar por acendente a descendente */
const descendente = (data, ordenar1) => {
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

/*  eclosionar huevos */
const huevosfilter = (data,stringKm) => {
const filtrarhuevos = data.filter(filterEggs => filterEggs.egg === stringKm);
return filtrarhuevos;
 };

window.POKEMON = POKEMON.pokemon;



