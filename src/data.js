/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const pokedata = (pokemon) => {
  let resultado1 = [];
  for (let i = 0; i < pokemon.length; i++)
    resultado1.push({
      img: pokemon[i].img,
      name: pokemon[i].name,

    });
  return resultado1;
};

window.pokemon = {
  pokedata: pokedata,
};
