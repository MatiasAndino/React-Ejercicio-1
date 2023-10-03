import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {loading && <p className='animate__flash'>Cargando...</p>}
            <div className='grid animate__pulse'>
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