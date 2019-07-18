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

/* filtrar todos los pokemones por tipos */
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

/* filtrar todos los pokemones por debilidades */
const pokeDebilidad = (data, debilidades) => {
  let listaDebilidad = [];
  for (let i = 0; i < data.length; i++) {
    // eslint-disable-next-line id-length
    for (let y = 0; y < data[i].weaknesses.length; y++) {
      if (data[i].weaknesses[y] === debilidades) {
        listaDebilidad.push(data[i]);
      }
    }
  }
  return listaDebilidad;
};

/* filtrar por acendente a descendente */
const descendente = (data, direccion) => {
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
  if (direccion === '1') {
    return ordenarMayorMenor;
  }
  if (direccion === '2') {
    return ordenarMayorMenor.reverse();
  }
  return 0;
};

/* ordenar alfabeticamente */
const ordenAlfabeticamente = (data, abcdef) => {
  // eslint-disable-next-line id-length
  const ordenarAZ = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.spawn_chance < b.spawn_chance) {
      return -1;
    }
    return 0;
  });
  if (abcdef === 'A-Z') {
    return ordenarAZ;
  }
  if (abcdef === 'Z-A') {
    return ordenarAZ.reverse();
  }
  return 0;
};

/*  eclosionar huevos */
const huevosfilter = (data, stringKm) => {
  const filtrarhuevos = data.filter(filterEggs => filterEggs.egg === stringKm);
  return filtrarhuevos;
};
/* buscar pokemones */
const buscador = (data, buscarpoke) => {
  return data.filter(buscarpokemones => buscarpokemones.name.toLowerCase().startsWith(buscarpoke));
};

window.POKEMON = POKEMON.pokemon;
window.tipospoke = tipospoke;
window.descendente = descendente;
window.huevosfilter = huevosfilter;
window.buscador = buscador;