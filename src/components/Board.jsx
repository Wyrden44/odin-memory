import { useMemo, useState } from "react";
import Card from "./Card";

function shuffleArray(arr) {
  const a = arr.slice(); // copy — do NOT mutate props
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

export default function Board( { images, onGameOver, updateScore } ) {
    const [seen, setSeen] = useState([]);

    const shuffled = shuffleArray(images);
    
    const cards = shuffled.map((image, index) => <Card imageLink={image.url} onClick={() => onCardClick(image.id)} key={index} renew={seen.length}/>);

    function onCardClick(id) {
        if (seen.includes(id)) {
            setSeen([]);
            onGameOver(false);
        }
        else {
            setSeen([...seen, id]);
            updateScore(seen.length+1);

            // game over -win
            if (seen.length+1 === images.length) {
                onGameOver(true);
            }
        }
    }

    return (
        <>
            <div className="board">{cards}</div>
        </>
    );
}