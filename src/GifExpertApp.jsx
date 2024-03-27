import { useState } from 'react';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Anime', 'Carros']);
    const onAddCategories = () => {
        setCategories([...categories, 'categ']);
    }
    return (
        <>
            <h1>Gift APP</h1>
            <ol>
                <input placeholder='categorias'
                    name='cat'/>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
                <button onClick={onAddCategories}>Aggregar</button>
            </ol>
        </>
    )
}

