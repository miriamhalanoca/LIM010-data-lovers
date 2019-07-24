global.window = global;
// global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const poketest = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }],
  'next_evolution': [{
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'candy': 'Bulbasaur Candy',
  'egg': 'Not in Eggs',
  'spawn_chance': 0.017,
  'avg_spawns': 1.7,
  'spawn_time': '11:30',
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }, {
    'num': '002',
    'name': 'Ivysaur'
  }]
}, {
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'candy': 'Charmander Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.253,
  'avg_spawns': 25.3,
  'spawn_time': '08:45',
  'multipliers': [1.65],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'next_evolution': [{
    'num': '005',
    'name': 'Charmeleon'
  }, {
    'num': '006',
    'name': 'Charizard'
  }]
},
];


describe('tipospoke', () => {
  it('debería mostrar del tipo Grass', () => {
    expect(tipospoke(poketest, 'Grass')[0].type).toEqual(['Grass', 'Poison']);
  });
});

describe('pokeDebilidad', () => {
  it('debería mostrar debilidad Water', () => {
    expect(pokeDebilidad(poketest, 'Water')[0].weaknesses).toEqual(['Water', 'Ground', 'Rock']);
  });
});

describe('ordenarAbc', () => {
  it('debería mostrar los pokemones en orden albatico de A-Z', () => {
    expect(ordenarAbc(poketest, 'AZ')[0].name).toEqual('Bulbasaur');
  });
});

describe('ordenarAbc', () => {
  it('debería mostrar los pokemones en orden albatico de Z-A', () => {
    expect(ordenarAbc(poketest, 'ZA')[0].name).toEqual('Bulbasaur');
  });
});

describe('ordenAparicion', () => {
  it('debería mostrar los numeros ascendente', () => {
    expect(ordenAparicion(poketest, '1')[0].name).toEqual('Venusaur');
  });
});

describe('ordenAparicion', () => {
  it('debería mostrar los numeros ascendente', () => {
    expect(ordenAparicion(poketest, '2')[0].name).toEqual('Venusaur');
  });
});

describe('huevos', () => {
  it('debería mostrar los pokemones por filtrado', () => {
    expect(huevos(poketest, '2 km')[0].egg).toEqual('2 km');
  });
});

describe('buscador', () => {
  it('debería mostrar los pokemones en el buscador', () => {
    expect(buscador(poketest, 'bul')[0].name).toEqual('Bulbasaur');
  });
});