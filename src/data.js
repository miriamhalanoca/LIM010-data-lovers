/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// data.js

const obteniendodatapoke = (mostradata) => {
  arraydatapokemon = [];
  for (let i = 0; i < mostradatapokemon.length; i++); {
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
      hutvos: mostradata[i].egg,
      posibilidadesenordo: mostradata[i].spawn_chance,
      aparicion: mostradata[i].avg_spawns,
      tiempodegeneracion: mostradata[i].spawn_time,
      multiplicadores: mostradata[i].multipliers,
      debilidad: mostradata[i].weaknesses,
      evolucion: mostradata[i].next_evolution,
    });
  }
  return arraydatapokemon;
};


window.POKEMON = POKEMON.pokemon;

