"use client"

import React from 'react';

const LoginButton = () => {
    const handleLogin = () => {
        window.location.href = '/login'; // Redirect to the login page
    };

    return (
        <button onClick={handleLogin} className="px-4 py-2 bg-red-500 mt-5">
            Login
        </button>
    );
};

export default LoginButton