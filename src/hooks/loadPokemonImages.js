import fetchPokemonImages from "./fetchImages";

const pokemonList = [
  { id: 1, name: "Bulbasaur" },
  { id: 4, name: "Charmander" },
  { id: 7, name: "Squirtle" },
  { id: 25, name: "Pikachu" },
  { id: 39, name: "Jigglypuff" },
  { id: 52, name: "Meowth" },
  { id: 63, name: "Abra" },
  { id: 66, name: "Machop" },
  { id: 92, name: "Gastly" },
  { id: 133, name: "Eevee" },
  { id: 147, name: "Dratini" },
  { id: 150, name: "Mewtwo" },
  { id: 151, name: "Mew" },
  { id: 16, name: "Pidgey" },
  { id: 19, name: "Rattata" },
  { id: 27, name: "Sandshrew" },
  { id: 35, name: "Clefairy" },
  { id: 37, name: "Vulpix" },
  { id: 41, name: "Zubat" },
  { id: 54, name: "Psyduck" },
];

export default async function loadPokemonImages(count) {
    const images = [];

    for (let i=0; i<count; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonList[i].id}`
        images.push({ url: url, id: pokemonList[i].id })
    }

    const results = await fetchPokemonImages(images);

    return results;
}