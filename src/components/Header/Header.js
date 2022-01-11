import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Header(props) {
    const location = useLocation()
    const [expand, setExpand] = useState(false)
    const { favs } = props;
    return (
        <header className='sticky top-0 py-4 px-8 lg:px-60 bg-gray-900 text-white text-xl grid grid-cols-2'>
            <h1 className="text-2xl mb-2 lg:mb-0 border-2 border-yellow-900 p-2 mr-auto"><span className="text-yellow-400">Plan</span> <span className="text-yellow-700">Recipe</span></h1>
            <button onClick={() => setExpand(!expand)} className="ml-auto border-2 border-yellow-600 text-yellow-600 lg:hidden" style={{ width: "70px", height: "40px" }}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg></button>
            <nav className={`lg:ml-auto col-span-2 lg:col-span-1 ${expand ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row justify-center items-center`}>
                <NavLink
                    exact
                    className='lg:mr-4 mb-2 lg:mb-0'
                    to="/"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    onClick={() => setExpand(!expand)}
                >
                    Home
                </NavLink>
                <NavLink
                    className='lg:mr-4 mb-2 lg:mb-0'
                    to="/meals"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    onClick={() => setExpand(!expand)}
                >
                    Meals
                </NavLink>
                <NavLink
                    className='lg:mr-4 mb-2 lg:mb-0'
                    to="/about"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    onClick={() => setExpand(!expand)}
                >
                    About
                </NavLink>
                <NavLink
                    className='lg:mr-4 mb-2 lg:mb-0 relative py-1 px-1'
                    to="/favourites"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    onClick={() => setExpand(!expand)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm bg-green-500 p-1 rounded-full absolute -top-1 -right-1 font-bold">{favs.length > 0 ? favs.length : '0'}</span>
                </NavLink>
                {
                    location.pathname == '/meals' ? <input onChange={e => props.handleSearch(e.target.value)} className='focus:outline-none lg:px-2 text-black' type="text" placeholder='Search' /> : ''
                }
            </nav>
        </header>
    )
}

export default Header
