import React from 'react'
import OrthoPTBook from "/Users/vatsalpatel/Desktop/ProjectData/bookStore/Frontend/public/OrthoPTBook.jpg";
function Banner() {
    return (
        <>
        <div className= "max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-32">
            <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
                <div className="space-y-12">
                    <h1 className="md:text-4xl font-bold text-3xl dark:text-slate-300  ">One Stop Book Shop For <br/> <span
                        className="text-rose-950 dark:text-white">Canadian Professional Certificates </span>
                    </h1>
                    <p className="text-xl font-normal dark:text-slate-300">Buy Exam Packages Online & Sell Textbooks at your Doorstep  </p>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                        </svg>
                        <input type="text" className="grow my-20" placeholder="Enter your email to get started"/>
                    </label>
                </div>
                <button className="bg-rose-950 text-white font-semibold hover:bg-rose-600 hover:text-white duration-300 cursor-pointer rounded px-2 py-1 mx-0.5 mt-2 md:mt-10">Submit</button>
            </div>
            <div className=" order-1 w-full md:w-1/2">
            <img src= {OrthoPTBook} className=" w-60 mx-20 my-5 md:w-80 md:h-max md:mx-56 md:my-20"></img>
            </div>
        </div>
        </>
    );
}

export default Banner;
