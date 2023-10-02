import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    
    const getGifts = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Los+Simpson&limit=10&api_key=eyRI1ruZBiMj2KYRJcVeht0XcTAyELBo';
        const resp = await fetch( url );
        const { data } = await resp.json();
        
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        setImages(gifs);
    }
    
    useEffect( () => {
        getGifts();
    }, []);

    return (
        <div className='grid'>
            <h3>{ category }</h3>
            {
                images.map(( image ) => (
                    <GifGridItem 
                        key={ image.id }
                         { ...image }
                    />
                ))
            }
        </div>
    )
}

export default GifGrid;