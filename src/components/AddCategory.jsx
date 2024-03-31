import React, { useEffect, useState } from 'react'

const AddCategory = ({ onNewCategory}) => {
    const [inputValue, setInputValue] = useState();
    const onInputChange = ({ target }) => {

        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
      if(inputValue.trim().length<=1)return;

      // setCategories(categories=>[ inputValue,...categories]);
      onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={(event) => { onSubmit(event) }}>
            <input
                type='text'
                placeholder='Buscar Gifts'
                name='cat'
                value={inputValue}
                onChange={(event) => onInputChange(event)
                }
            />
        </form>
    )
}

export default AddCategory
