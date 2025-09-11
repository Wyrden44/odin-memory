import { useState } from "react";
import Card from "./Card";

export default function Board( { images, onGameOver, updateScore } ) {
    const [seen, setSeen] = useState([]);
    
    const cards = images.map((image) => <Card imageLink={image.url} onClick={() => onCardClick(image.id)} key={image.id} />);

    function onCardClick(id) {
        if (seen.includes(id)) {
            setSeen([]);
            onGameOver();
        }
        else {
            setSeen([...seen, id]);
            updateScore(seen.length+1);
        }
    }

    return (
        <>
            <div>{cards}</div>
        </>
    );
}