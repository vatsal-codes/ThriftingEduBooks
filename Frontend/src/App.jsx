import React from 'react'
import Home from "./home/Home.jsx";
import {Route, Routes} from "react-router-dom"
import Certifications from "./certifications/Certifications.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Contacts from "./contacts/contacts.jsx";


function App() {
    return (
        <>
           <div className="dark:bg-rose-900 dark:text-black">
               <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/certifications" element={<Certifications/>}/>
                   <Route path="/signup" element={<Signup/>}/>
                   <Route path="/login" component={<Login/>}/>
                   <Route path="/contacts" element={<Contacts/>}/>

               </Routes>
           </div>
        </>
    )
}

export default App
