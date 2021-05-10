import React from 'react'

export default function Movie({title, rating, deleteMovie}) {
    const addStars = (rating) => {
        const stars = []
        for(let i = 0; i < rating; i++){
            stars.push(<img src="images/star.png" key={i} alt="Star"></img>)
        }
        return stars;
    }
    return (
        <li data-grade={rating} data-title={title}>
            {title}
            {addStars(rating)}
            <img src="images/delete.png" onClick={() => deleteMovie(title, rating)} alt="Delete"/>
        </li>
    )
}
