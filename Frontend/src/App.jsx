import React from 'react'
import Home from "./home/Home.jsx";
import {Navigate, Route, Routes} from "react-router-dom"
import Certifications from "./certifications/Certifications.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Contacts from "./contacts/contacts.jsx";
import {Toaster} from "react-hot-toast";
import {useAuth} from "./context/AuthProvider.jsx";
import About from "./components/about.jsx";


function App() {
    const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
    return (
        <>
           <div className="dark:bg-rose-900 dark:text-black">
               <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/certifications" element={authUser ? <Certifications/> : <Navigate to="/signup"/>} w/>
                   <Route path="/signup" element={<Signup/>}/>
                   <Route path="/login" component={<Login/>}/>
                   <Route path="/contacts" element={<Contacts/>}/>
                   <Route path="/about" element={<About/>}/>
               </Routes>
               <Toaster/>
           </div>
        </>
    )
}

export default App
