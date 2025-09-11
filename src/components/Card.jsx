export default function Card({ imageLink, onClick }) {
    return (
        <div className="card" onClick={onClick} >
            <img draggable="false" src={imageLink} />
        </div>
    );
}