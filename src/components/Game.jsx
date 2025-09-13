import { useEffect, useState } from "react";
import Board from "./Board";
import loadPokemonImages from "../hooks/loadPokemonImages.js";
import Spinner from "./Spinner.jsx";

export default function Game({ difficulty }) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [images, setImages] = useState([]);
    const [spinner, setSpinner] = useState(true);

    function updateScore(newScore) {
        setScore(newScore);
        if (newScore > highScore) {
            setHighScore(newScore);
        }
    }

    function onGameOver(won) {
        setScore(0);

        if (won) {
            
        }
    }

    useEffect(() => {
        async function load() {
            let IMAGE_COUNT = 5;
            if (difficulty === "easy") {
                IMAGE_COUNT = 5;
            }
            else if (difficulty === "medium") {
                IMAGE_COUNT = 10;
            }
            else if (difficulty === "hard") {
                IMAGE_COUNT = 20;
            }
            // load images when initialising
            const pokemonImages = await loadPokemonImages(IMAGE_COUNT);

            setImages(pokemonImages);
            setSpinner(false);
        }

        load();
    }, [])

    if (spinner) {
        return (
            <>
                <Spinner />
            </>
        )
    }
    else {
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
}