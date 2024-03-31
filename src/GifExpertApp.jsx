import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Anime', 'Carros']);

    const onAddCategories = (NewCategory) => {
        let flag = true;
        categories.forEach((cate) => {
            if (cate === NewCategory) {
                flag = false;
            }
        })
        if (flag) {
            setCategories([...categories, NewCategory]);
        }
    }
    return (
        <>
            <h1>Gift APP</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategories(value)}
            />
            <ol>

                {categories.map(category => {
                    return <GifGrid key={category} category={category} />
                })}

            </ol>
        </>
    )
}

