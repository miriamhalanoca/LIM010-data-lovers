/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// data.js
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
    for (let j = 0; j < data[i].weaknesses.length; j++) {
      if (data[i].weaknesses[j] === debilidades) {
        listaDebilidad.push(data[i]);
      }
    }
  }
  return listaDebilidad;
};


/* mostrar por orden alfabetico */
const ordenarAbc = (data) => {
  return data.sort((next, prev) => {
    if (next.name > prev.name) {
      return 1;
    } else {
      return -1;
    }
  });
};


/* mostrar por orden de aparicion */
const ordenAparicion = (data) => {
  return data.sort((posterior, anterior) => {
    if (posterior.spawn_chance > anterior.spawn_chance) {
      return 1;
    } else {
      return -1;
    }
  });
};


/*  eclosionar huevos */
const huevos = (data, stringKm) => {
  const filtrarhuevos = data.filter(filterEggs => filterEggs.egg === stringKm);
  return filtrarhuevos;
};



/* buscar pokemones */
const buscador = (data, buscarpoke) => {
  return data.filter(buscarpokemones => buscarpokemones.name.toLowerCase().startsWith(buscarpoke));
};

window.tipospoke = tipospoke;
window.pokeDebilidad = pokeDebilidad;
window.ordenarAbc = ordenarAbc;
window.huevos = huevos;
window.buscador = buscador;
window.ordenAparicion = ordenAparicion;
