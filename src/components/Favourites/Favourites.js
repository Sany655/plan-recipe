import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

function Favourites(props) {
    const favs = props.favs;
    const history = useHistory()
    return (
        <div className='p-3'>
            <h1 className="text-4xl text-center mb-4">Your Favourite Dishes</h1>
            <table className="table-fixed border border-blue-200">
                <thead>
                    <tr>
                        <th className='w-1/6'>Image</th>
                        <th className='p-4'>Title</th>
                        <th className='p-4'>Area</th>
                        <th className='p-4'>Category</th>
                        <th className='p-4'>Details</th>
                        <th className='p-4'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        favs.map((f, i) => (
                            <tr key={i}>
                                <td><img src={f.strMealThumb} alt="" /></td>
                                <td className='text-center'>{f.strMeal}</td>
                                <td className='text-center'>{f.strArea}</td>
                                <td className='text-center'>{f.strCategory}</td>
                                <td><button onClick={() => history.push(`meal/${f.idMeal}`)} className='px-4 py-1 bg-yellow-500 text-white'>Details</button></td>
                                <td><button onClick={() => props.handleRemoveFav(f.idMeal)} className='px-4 py-1 bg-red-500 text-white'>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Favourites
