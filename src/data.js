/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//data.js
const pokemon1 = (pokemon) => {
  const retornar = [];
  for(let i; i<pokemon.length;i++);{
    retornar.push({
      img:pokemon[i].img, 
      nombre:pokemon[i].name,
    });
  }
  return retornar;
};

window.POKEMON = {
  pokemon1:pokemon1,
};
