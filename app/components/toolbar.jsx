import React from 'react'
import LoginButton from "./loginbutton"


const Toolbar = () => {
    return (
        <div className="flex justify-center w-full px-4 py-3 fixed top-0">
            <p className='text-white'>test</p>
            <LoginButton/>
        </div>
    )
}

export default Toolbar