import React, { useState } from "react";
import Card from "./Card";
import "./carousel.css";



export default function Carousel() {

    const [count, setCount] = useState(0);
    const [albumCovers, setAlbumCovers] = useState([
        "https://placedog.net/300/200",
        "https://placedog.net/320/200",
        "https://placedog.net/400/200",
        "https://placedog.net/500/200",
        "https://placedog.net/400/300",
    ]);


    return (
        <div className="carousel">
            <button onClick={() => setCount(count === 0 ? albumCovers.length - 1 : count - 1)} className="moveButton">Prev</button>
            <button onClick={() => setCount(count === albumCovers.length - 1 ? 0 : count + 1)} className="moveButton">Next</button>
            <Card picture={albumCovers[count]} />
            <Card picture={albumCovers[count === albumCovers.length - 1 ? 0 : count + 1]} />
            <Card picture={albumCovers[count === albumCovers.length - 2 ? 0 : (count === albumCovers.length - 1 ? 1 : count + 2)]} />
        </div>
    )
}
