import React from 'react'
import {useAuth} from "../context/AuthProvider.jsx";
import toast from "react-hot-toast";

function Logout() {
    const[authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout successful");

            setTimeout(() => {
                window.location.reload();

            },1000);

        } catch (error) {
            toast.error("Error: " + error.message)
            setTimeout(()=>{},2000 );

        }
    }
    return (
        <>
        <div>
           <button className="px-3 py-2 text-white rounded-md bg-red-950 cursor-pointer dark:bg-rose-900 dark:text-white dark:border-white dark:border-solid dark:border-2" onClick={handleLogout}>Logout</button>
        </div>
        </>
    )
}

export default Logout
