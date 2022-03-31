import React from 'react'

const GifGridItem = ({ id, title, url }) => {


    return (
        <div className='animate__animated animate__fadeIn'>
            <img src={url} alt={title} className='card' />
            <h4>{title}</h4>
        </div>
    )
}

export default GifGridItem