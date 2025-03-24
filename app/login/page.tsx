"use client"

import React from "react";
import LoginButton from "./_components/loginbutton";

// Login page
export default async function Page() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-slate-600 rounded-md w-64 h-80">
                <p className="mb-4 pt-5 text-white text-lg text-center">
                    Ideal Spaces
                </p>

                <div className="flex justify-center h-screen">
                    <LoginButton handleLogin={(email, password) => {}}/>
                </div>
            </div>
        </div>
    );
};