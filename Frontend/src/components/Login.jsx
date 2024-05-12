import React from 'react'
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } ,} = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/*<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>*/}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                    <h3 className="font-normal text-lg">&nbsp;Login</h3>
                    <div className="mt-4 px-0 space-y-2 font-normal " >
                        <span> &nbsp;Email</span>
                        <br/>
                        <input
                        type="email"
                        placeholder="Enter your email"
                        className="  w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}
                        />
                        <br/>
                        {errors.email && <span className="font-light text-xs text-red-500">*Required Field*</span>}
                    </div>
                    <div className= "mt-4 my-5 px-0 space-y-2 font-normal">
                        <span> &nbsp;Password</span>
                        <br/>
                        <input type="password"
                               placeholder="Password"
                               className=" w-80 px-3 py-1 border rounded-md outline-none"
                               {...register("password", { required: true })}
                        />
                        <br/>
                        {errors.password && <span className="font-light text-xs text-red-500">*Required Field*</span>}
                    </div>
                    {/* Button */}
                    <div className="flex">
                    <button className=" flex rounded-md bg-rose-950 text-white px-2 hover:bg-rose-600 hover:scale-105 duration-200">Login</button>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not registered?  <Link to="/signup" className="underline text-blue-500 cursor-pointer"> Signup</Link></p>
                    </div>
                    </form>
                    </div>
            </dialog>
        </div>
    );
}

export default Login
