import React from 'react'
import { useHistory } from 'react-router';

function Meal(props) {
    const { idMeal, strMealThumb, strMeal, strTags } = props.meal;
    const history = useHistory()
    return (
        <div className='bg-white hover:shadow-2xl'>
            <img src={strMealThumb} alt="Image not found" />
            <div className="p-4 shadow-xl shadow-inner">
                <h2 className="text-xl my-2">{strMeal}</h2>
                <p className='truncate'>Tag : {strTags}</p>
                <button className='bg-yellow-600 p-2 mt-2 text-white rounded' onClick={() => history.push(`meal/${idMeal}`)}>See Details</button>
                <button className='bg-red-600 p-2 mt-2 text-white rounded' onClick={() => props.handleFav(props.meal)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>Add to favourites
                </button>
            </div>
        </div>
    )
}

export default Meal
