import { useEffect, useState } from "react";
import Board from "./Board";
import loadPokemonImages from "../hooks/loadPokemonImages.js";

export default function Game() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [images, setImages] = useState([]);

    function updateScore(newScore) {
        setScore(newScore);
        if (newScore > highScore) {
            setHighScore(newScore);
        }
    }

    function onGameOver() {
        setScore(0);
    }

    useEffect(() => {
        async function load() {
            // load images when initialising
            const pokemonImages = await loadPokemonImages(5);

            setImages(pokemonImages);
        }

        load();
    }, [])

    return (
        <>
            <div className="game">
                <div className="score">
                    <p>Score: {score}</p>
                    <p>High Score: {highScore}</p>
                </div>
                <Board onGameOver={onGameOver} updateScore={updateScore} images={images} />
            </div>
        </>
    );
}