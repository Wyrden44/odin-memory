export default async function fetchPokemonImage(url) {
    try {
        const res = await fetch(url); 
        const data = await res.json();
        
        return { url: data.sprites.other["official-artwork"].front_default }
    }
    catch (error) {
        console.log("Error while loading the image:", error);
        return { url: "" }
    }
}