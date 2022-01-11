import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QQqk_cBCKxqqpkr5i6q4EHSWfZHNnr4Gfg&usqp=CAU')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='flex flex:cols md:flex:row justify-around py-48' style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <div>
                    <h1 className="text-2xl md:text-4xl text-white">Welcome to Plan Recipe</h1>
                    <p className="text-md text-white">There so many food recipe</p>
                </div>
                <div className="">
                    <Link to={'/meals'}><button className="bg-yellow-600 text-white p-2">Check Recipe</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
