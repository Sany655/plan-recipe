import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import Header from './components/Header/Header';
import About from './components/About/About';
import NotFount from './components/NotFoud/NotFount';
import MealDetail from './components/MealDetail/MealDetail';
import { useEffect, useState } from 'react';
import Favourites from './components/Favourites/Favourites';

function App() {
  const [searchValue,setSearchValue] = useState('')
  const [favs,setFavs]=useState([])
  const handleFav = fav => {
    if (!favs.find(f=>f.idMeal===fav.idMeal)) {
      setFavs([...favs,fav]); 
    }else{
      alert('Already in your favourite')
    }
  }
  const handleSearch = searchValue => {
    setSearchValue(searchValue);
  }
  const handleRemoveFav = id => {
    setFavs(favs.filter(f=>f.idMeal!==id));
  }
  useEffect(() => {
    if (localStorage.getItem('favs')) {
      const favourites = JSON.parse(localStorage.getItem('favs'));
      setFavs(favourites)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('favs',JSON.stringify(favs))
  },[favs])
  return (
    <>
      <Router>
        <Header handleSearch={handleSearch} favs={favs}/>
        <div className="lg:mx-56 bg-gray-200">
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/meals'><Meals search={searchValue} handleFav={handleFav}/></Route>
            <Route path='/meal/:id'><MealDetail /></Route>
            <Route path='/about'><About/></Route>
            <Route path='/favourites'><Favourites favs={favs} handleRemoveFav={handleRemoveFav}/></Route>
            <Route path='/*'><NotFount/></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
