import React from 'react'
import {Link} from "react-router-dom";
import Login from "./Login.jsx";
import Navbar from "./Navbar.jsx";
import { useForm } from "react-hook-form";


function Signup() {
    const { register, handleSubmit, formState: { errors } ,} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Navbar/>
            <div>

                <div
                    className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>


            <div className="items-center justify-center flex h-screen ">
                <div className="border-2 rounded-2xl px-4 py-4 drop-shadow-md ">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><Link to="/">✕</Link></button>

                        <h3 className="font-normal text-lg text-center">&nbsp;User Registration</h3>
                        <div className="mt-4 px-0 space-y-2 ">
                            <span className="font-light"> &nbsp;Name</span>
                            <br/>
                            <input type="text" placeholder="Enter your full name"
                                   className="  w-80 px-3 py-1 border rounded-md outline-none"
                                   {...register("name", { required: true })}
                            />
                            <br/>
                            {errors.name && <span className="font-light text-xs text-red-500">*Required Field*</span>}
                        </div>
                        <div className="mt-4 px-0 space-y-2 font-normal ">
                            <span> &nbsp;Email</span>
                            <br/>
                            <input type="email" placeholder="Enter your email"
                                   className="  w-80 px-3 py-1 border rounded-md outline-none"
                                   {...register("email", { required: true })}
                            />
                            <br/>
                            {errors.email && <span className="font-light text-xs text-red-500">*Required Field*</span>}
                        </div>
                        <div className="mt-4 my-5 px-0 space-y-2 font-normal">
                            <span> &nbsp;Password</span>
                            <br/>
                            <input type="password" placeholder="Password"
                                   className=" w-80 px-3 py-1 border rounded-md outline-none"
                                   {...register("password", { required: true })}
                            />
                            <br/>
                            {errors.password && <span className="font-light text-xs text-red-500">*Required Field*</span>}
                        </div>
                        {/* Button */}
                        <div className="flex">
                            <button
                                className=" flex rounded-md bg-rose-950 text-white px-2 hover:bg-rose-600 hover:scale-105 duration-200">Signup
                            </button>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Have an account? {" "}
                                <button className="underline text-blue-500 cursor-pointer"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                >
                                    Login
                                </button>{" "}
                                <Login />
                            </p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Signup
