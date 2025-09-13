export default function GameOverModal({show, onRestartClick, onMainMenuClick}) {
    return (
        <div className={`modal ${show ? "show" : ""}`}>
            <h1 className="modal-heading">Congrats! You Won!</h1>
            <div className="modal-buttons">
                <button className="modal-restart" onClick={onRestartClick}>Restart</button>
                <button className="modal-menu" onClick={onMainMenuClick}>Main Menu</button>
            </div>
        </div>
    )
}