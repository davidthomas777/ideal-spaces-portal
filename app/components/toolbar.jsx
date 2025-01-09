import React from 'react'
import LoginButton from "./loginbutton"


const Toolbar = () => {
    return (
        <div className="flex justify-center w-full px-4 py-3 fixed top-0">
            <LoginButton/>
        </div>
    )
}

export default Toolbar