export default function SelectDifficulty({ onDifficultySelect }) {
    return (
        <div className="difficulty-section">
            <h1>Select Difficulty</h1>
            <div className="select-difficulty">
                <button className="difficulty" onClick={() => onDifficultySelect("easy")}>Easy</button>
                <button className="difficulty" onClick={() => onDifficultySelect("medium")}>Medium</button>
                <button className="difficulty" onClick={() => onDifficultySelect("hard")}>Hard</button>
            </div>
        </div>
    )
}