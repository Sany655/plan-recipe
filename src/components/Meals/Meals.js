import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

function Meals(props) {
    const { search } = props;
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => { setMeals(data); setLoading(false); })
    }, [search])
    return (
        <div>
            {
                loading ? <h6 className="text-4xl text-yellow-600 text-center">Loading...</h6> : (
                    <>
                        <h2 className="text-2xl p-6">Total {meals.meals?.length} meals available</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-6'>
                            {
                                meals.meals?.map((meal, i) => <Meal key={i} meal={meal} handleFav={props.handleFav} />)
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Meals
