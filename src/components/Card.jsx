import { useEffect, useState } from "react";

export default function Card({ imageLink, onClick, renew }) {
    const [currImage, setCurrImage] = useState(imageLink);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        setFlip(true);
        const timeout = setTimeout(() => {
            setCurrImage(imageLink);
            setFlip(false);
        }, 500)
        return () => clearTimeout(timeout);
    }, [renew]);

    return (
        <div className="card" onClick={onClick} >
            <div className={`card-inner ${flip ? "flipped" : ""}`}>
                <div className="card-front">
                    <img draggable="false" src={currImage} />
                </div>
                <div className="card-back">
                    <div className="card-back-filler">P</div>
                </div>
            </div>
        </div>
    );
}