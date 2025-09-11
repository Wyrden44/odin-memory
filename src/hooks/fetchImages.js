import fetchPokemonImage from "./fetchImage";

export default async function fetchPokemonImages(images) {
    for (let i=0; i<images.length; i++) {
        try {
            const results = await Promise.all(
            images.map((image) =>
                fetchPokemonImage(image.url).then((img) => ({ ...img, id: image.id }))
            )
            );
            return results;
        }
        catch (error) {
            console.log("An error occurred while loading the images:", error);
            return [];
        }
    }
}