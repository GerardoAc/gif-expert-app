import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGits"
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImagenes = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);

    }

    useEffect(() => {
        getImagenes();
    }, [])
    return (
        <>
            <h1>
                {category}
            </h1>
            <div className="card-grid">
                {
                    images.map((image) => {
                       
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    })
                }
            </div>
        </>
    )
}

