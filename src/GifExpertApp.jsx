import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
  const [categories, setCategories] = useState(['Los Simpson']);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      <ul>
        {
          categories.map(category => (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          ))
        }
      </ul>
    </>
  )
}

export default GifExpertApp;