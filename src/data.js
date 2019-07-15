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
      huevos: mostradata[i].egg,
      identidad: mostradata[i].id,
      tipos: mostradata[i].type,
      altura: mostradata[i].height,
      ancho: mostradata[i].weight,
      dulces: mostradata[i].candy,
      contardulces: mostradata[i].candy_count,
      posibilidadesenordo: mostradata[i].spawn_chance,
      multiplicadores: mostradata[i].multipliers,
      debilidad: mostradata[i].weaknesses,

    });
  }
  return arraydatapokemon;
};

/* const huevosfilter = (kilometros) => {
const filtrarhuevos = pokedata.filter(pokedata1 => pokedata1.egg === kilometros);
}
return filtrarhuevos;*/


window.POKEMON = POKEMON.pokemon;

