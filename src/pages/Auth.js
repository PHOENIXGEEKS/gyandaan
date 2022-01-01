/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import SmallLoader from '../utilities/SmallLoader';

export default function Auth() {
    const [authType, setAuthType] = useState("login");
    const [userType, setUserType] = useState("student");
    const [isSubmitting, setSubmitting] = useState(false);

    const authHandler = async event => {
        event.preventDefault()
        setSubmitting(true)
        const res = await fetch(
            'http://localhost:5000/auth',
            {
                body: JSON.stringify({
                    name: event.target.name.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'

            }
        )
        console.log(res)
    }

    return (
        <div id="login_page" className="w-full flex min-h-screen">
            {/* Left part */}
            <div className="w-1/3 bg-primary-red"></div>
            {/* Right part */}
            <div className="w-2/3 h-full p-20">
                {/* heading----option to signup----form----button */}
                <div>
                    {authType == "login" ? (
                        <h1 className="text-4xl font-bold">Login</h1>
                    ) : (
                        <h1 className="text-4xl font-bold">Signup</h1>
                    )}
                </div>

                <div className="mt-4">
                    {authType == "login" ? (
                        <h1 className="">
                            Dont have an account yet?{" "}
                            <span
                                className="text-primary-red underline cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setAuthType("signup");
                                }}
                            >
                                Signup
                            </span>
                        </h1>
                    ) : (
                        <h1 className="">
                            Already have an account?{" "}
                            <span
                                className="text-primary-red underline cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setAuthType("login");
                                }}
                            >
                                Login
                            </span>
                        </h1>
                    )}
                </div>

                <form onSubmit={authHandler}>
                    <div className="flex space-x-10 my-12">
                        <button
                            className={
                                "rounded-full px-8 py-2 border-2 border-primary-red " +
                                (userType == "student"
                                    ? "bg-primary-red text-white shadow-xl"
                                    : "bg-white text-primary-red")
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setUserType("student");
                            }}
                        >
                            Student
                        </button>

                        <button
                            className={
                                "rounded-full px-8 py-2 border-2 border-primary-red " +
                                (userType == "mentor"
                                    ? "bg-primary-red text-white shadow-xl"
                                    : "bg-white text-primary-red")
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setUserType("mentor");
                            }}
                        >
                            Mentor
                        </button>
                    </div>

                    <div>
                        <div className="flex flex-col space-y-4">
                            {authType == "login" ? (
                                ""
                            ) : (
                                <div className="flex flex-col space-y-4">
                                    <label htmlFor="name" value="">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name="name"
                                        className="shadow-lg rounded-full px-4 py-2 w-80 border border-grey"
                                        placeholder="Enter your Name"
                                    />
                                </div>
                            )}
                            <label htmlFor="email_id" value="">
                                Email:
                            </label>
                            <input
                                type="email"
                                required
                                name="email_id"
                                className="shadow-lg rounded-full px-4 py-2 w-80 border border-grey"
                                placeholder="Enter your Email"
                            />
                            <label htmlFor="password" value="">
                                Password:
                            </label>
                            <input
                                type="password"
                                required
                                name="password"
                                className="shadow-lg rounded-full px-4 py-2 w-80 border border-grey"
                                placeholder="Enter your Password"
                            />

                            {authType == "login" ? (
                                ""
                            ) : (
                                <div className="flex flex-col space-y-4">
                                    <label htmlFor="conPassword" value="">
                                        Confirm Password:
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        name="conPassword"
                                        className="shadow-lg rounded-full px-4 py-2 w-80 border border-grey"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex flex-row bg-primary-red w-32 rounded-full px-8 py-2 text-white border-2 border-red-500 block mt-12 mb-4"
                                userType={userType}
                            >
                                {authType == "login" ? <p>Login</p> : <p>Signup</p>}
                                {isSubmitting ? <SmallLoader /> : ""}
                            </button>
                        </div>

                        {authType == "login" ? <a href="#" className="underline">
                            Forget password
                        </a> : null}

                    </div>
                </form>
            </div>
        </div>
    );
}