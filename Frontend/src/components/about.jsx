import React from 'react'
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import MERN from  "/Users/vatsalpatel/Desktop/ProjectData/bookStore/Frontend/public/MERN.png";

function About() {
    return (
        <>
        <Navbar/>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-32">
                <div className="container max-w-96 flex">
                    {/*<p className="mb-8 lg:mb-16 font-lighttext-gray-500 dark:text-gray-400 sm:text-xl ">*/}
                    {/*    &nbsp;&nbsp;&nbsp;Developer Info: </p>*/}
                    <div className="py-28 px-3">
                    <a className="w-72  text-sm text-right">Thank you for visiting, please reach out to vatsal.patel74@gmail for inquiries </a>
                    </div>
                    {/*<div>*/}
                    {/*    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 px-4">*/}
                    {/*/!*        <li>*!/*/}
                    {/*            MongoDB*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            Express.js*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            React*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            Node.js*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
                <div className=" order-1 w-full md:w-1/2">
                    <img src={MERN} className=" w-60 mx-20 my-5 md:w-80 md:h-max md:mx-56 md:my-20"></img>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About
