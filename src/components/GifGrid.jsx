import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import { getGifts } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    
    useEffect( () => {
        getGifts( category ).then( setImages );
    }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>
            <div className='grid'>
                {
                    images.map(( image ) => (
                        <GifGridItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;