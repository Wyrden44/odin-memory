import { useEffect, useState } from "react";
import Board from "./Board";
import loadPokemonImages from "../hooks/loadPokemonImages.js";

const IMAGE_COUNT = 10;

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
            const pokemonImages = await loadPokemonImages(IMAGE_COUNT);

            setImages(pokemonImages);
        }

        load();
    }, [])

    return (
        <>
            <div className="game">
                <div className="score">
                    
                    <div className="score-section">
                        <p className="label">SCORE</p>
                        <div className="score-score">
                            <p className="score-real">{score}</p>
                        </div>
                    </div>
                    <div className="score-section">
                        <p className="label">HIGH SCORE</p>
                        <div className="score-score">
                            <p className="score-real">{highScore}</p>
                        </div>
                    </div>
                </div>
                <Board onGameOver={onGameOver} updateScore={updateScore} images={images} />
            </div>
        </>
    );
}