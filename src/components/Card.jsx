export default function Card({ imageLink, onClick }) {
    console.log(imageLink);
    return (
        <div className="card" onClick={onClick} >
            <img src={imageLink} />
        </div>
    );
}