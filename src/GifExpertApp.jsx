import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

function GifExpertApp() {
  const [categories, setCategories] = useState(['Los Simpson', 'Path of Exile', 'Mortal Kombat']);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      <ul>
        {
          categories.map(category => <li key={category}>{category}</li>)
        }
      </ul>
    </>
  )
}

export default GifExpertApp;