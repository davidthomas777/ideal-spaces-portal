"use client"

import { React, useState } from 'react';

const twBorder = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const twButton = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

interface Props {
    handleLogin: (email: String, password: String) => void;
};

export default function LoginButton({ handleLogin }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="">
            <form>
                {/* Email */}
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white text-sm">Email</label>
                    <input type="email" id="email" className={twBorder} placeholder="idealspaces@gmail.com" onChange={(e) => {setEmail(e.target.value)}} required />
                </div>

                {/* Password */}
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 font-medium text-gray-900 dark:text-white text-sm">Password</label>
                    <input type="password" id="password" className={twBorder} onChange={(e) => {setPassword(e.target.value)}}required />
                </div>

                {/* Button */}
                <div className="flex justify-center">
                    <button type="submit" onClick={() => handleLogin(email, password)} className={twButton}>
                        Login
                    </button>
                </div>

            </form>
        </div>
    );
};