import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function MealDetail() {
    const { id } = useParams()
    const [meal, setMeal] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])

    return (
        <div className='lg:grid grid-cols-2'>
            <div>
                <img src={meal.strMealThumb} alt="" />
            </div>
            <div className='p-4'>
                <h1 className="text-4xl mb-4">{meal.strMeal}</h1>
                <p className="mb-2">Category : {meal.strCategory}</p>
                <p className="mb-2">Area : {meal.strArea}</p>
                <p className="mb-2">Ingredients : {meal.strIngredient1+' '+meal.strIngredient2+' '+meal.strIngredient3+' '+meal.strIngredient4+' '+meal.strIngredient5+' '+meal.strIngredient6+' '+meal.strIngredient7+' '+meal.strIngredient8+' '+meal.strIngredient9+' '+meal.strIngredient10+' '+meal.strIngredient11+' '+meal.strIngredient12+' '+meal.strIngredient13+' '+meal.strIngredient14+' '+meal.strIngredient15+' '+meal.strIngredient16+' '+meal.strIngredient17+' '+meal.strIngredient18+' '+meal.strIngredient19+' '+meal.strIngredient20}</p>
                <p className="mb-2"><span className="font-bold">Instructions</span> : {meal.strInstructions}</p>
                <button className='bg-red-600 p-2 mt-2 text-white rounded' onClick={() => window.open(meal.strYoutube,'_blank')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>Wath on youtube
                </button>
            </div>
        </div>
    )
}

export default MealDetail



// dateModified: null
// idMeal: "52841"
// strArea: "British"
// strCategory: "Starter"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "Olive Oil"
// strIngredient2: "Onions"
// strIngredient3: "Celery"
// strIngredient4: "Carrots"
// strIngredient5: "Potatoes"
// strIngredient6: "Bay Leaf"
// strIngredient7: "Tomato Puree"
// strIngredient8: "Sugar"
// strIngredient9: "White Vinegar"
// strIngredient10: "Chopped Tomatoes"
// strIngredient11: "Passata"
// strIngredient12: "Vegetable Stock Cube"
// strIngredient13: "Whole Milk"
// strIngredient14: ""
// strIngredient15: ""
// strIngredient16: ""
// strIngredient17: ""
// strIngredient18: ""
// strIngredient19: ""
// strIngredient20: ""
// strInstructions: "Put the oil, onions, celery, carrots, potatoes and bay leaves in a big casserole dish, or two saucepans. Fry gently until the onions are softened – about 10-15 mins. Fill the kettle and boil it.\r\nStir in the tomato purée, sugar, vinegar, chopped tomatoes and passata, then crumble in the stock cubes. Add 1 litre boiling water and bring to a simmer. Cover and simmer for 15 mins until the potato is tender, then remove the bay leaves. Purée with a stick blender (or ladle into a blender in batches) until very smooth. Season to taste and add a pinch more sugar if it needs it. The soup can now be cooled and chilled for up to 2 days, or frozen for up to 3 months.\r\nTo serve, reheat the soup, stirring in the milk – try not to let it boil. Serve in small bowls with cheesy sausage rolls."
// strMeal: "Creamy Tomato Soup"
// strMealThumb: "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg"
// strMeasure1: "3 tbsp"
// strMeasure2: "2 chopped"
// strMeasure3: "2 sticks"
// strMeasure4: "300g"
// strMeasure5: "500g"
// strMeasure6: "4"
// strMeasure7: "5 tblsp "
// strMeasure8: "2 tblsp "
// strMeasure9: "2 tblsp "
// strMeasure10: "1½ kg"
// strMeasure11: "500g"
// strMeasure12: "3"
// strMeasure13: "400ml"
// strMeasure14: ""
// strMeasure15: ""
// strMeasure16: ""
// strMeasure17: ""
// strMeasure18: ""
// strMeasure19: ""
// strMeasure20: ""
// strSource: "https://www.bbcgoodfood.com/recipes/2604646/creamy-tomato-soup"
// strTags: "Baking"
// strYoutube: "https://www.youtube.com/watch?v=lBhwjjUiFk4"
