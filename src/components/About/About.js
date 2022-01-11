import React from 'react'

function About() {
    return (
        <div className='h-full flex justify-center items-center'>
            <div>
                <h1 className="text-4xl text-center">About</h1>
                <p>This is a dish relevent website...</p>
                <p>we have so many websites around the world</p>
                <p>if you want one, contact now</p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    asd@gmail.com
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    +8802345667
                </p>
            </div>
        </div>
    )
}

export default About
