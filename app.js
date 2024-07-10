const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  };
  
  // Exercise 1
  console.dir(pokemon, { maxArrayLength: null });
  console.log(pokemon.find(p => p.Number === 59).Name);
  
  // Exercise 2
  console.log(game);
  
  // Exercise 3
  game.difficulty = "Med";
  
  // Exercise 4
  const starterPokemon = pokemon.find(p => p.starter);
  game.party.push(starterPokemon);
  
  // Exercise 5
  const additionalPokemon = pokemon.filter(p => p.Type === "Fire" || p.HP > 50).slice(0, 3);
  game.party.push(...additionalPokemon);
  
  // Exercise 6
  game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
      gym.completed = true;
    }
  });
  
  // Exercise 7
  const evolutionMap = {
    1: 2,
    4: 5,
    7: 8,
    25: 26,
  };
  
  const starterIndex = game.party.findIndex(p => p.starter);
  const starter = game.party[starterIndex];
  const evolvedPokemon = pokemon.find(p => p.Number === evolutionMap[starter.Number]);
  game.party.splice(starterIndex, 1, evolvedPokemon);
  
  // Exercise 8
  game.party.forEach(p => console.log(p.Name));
  
  // Exercise 9
  pokemon.filter(p => p.starter).forEach(p => console.log(p.Name));
  
  // Exercise 10
  game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);
  };
  
  game.catchPokemon(pokemon.find(p => p.Number === 10));
  
  // Exercise 11
  game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);
    const pokeball = this.items.find(item => item.name === "pokeball");
    if (pokeball) {
      pokeball.quantity--;
    }
  };
  
  game.catchPokemon(pokemon.find(p => p.Number === 20));
  console.log(game.items);
  
  // Exercise 12
  game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
      gym.completed = true;
    }
  });
  
  // Exercise 13
  game.gymStatus = function () {
    const gymTally = { completed: 0, incomplete: 0 };
    this.gyms.forEach(gym => {
      if (gym.completed) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    });
    console.log(gymTally);
  };
  
  game.gymStatus();
  
  // Exercise 14
  game.partyCount = function () {
    return this.party.length;
  };
  
  console.log(game.partyCount());
  
  // Exercise 15
  game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
      gym.completed = true;
    }
  });
  
  // Exercise 16
  console.log(game);
  