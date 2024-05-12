import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Contacts() {
    return (
        <>

            <Navbar/>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-32">
                {/*<div className=" py-20 ">*/}
                {/*<h1 className=" px-4 text-xl "> Facing issues accessing a book?</h1>*/}
                {/*    <p> <br/> <br/> </p>*/}
                {/*<a className="py-6 px-4 text-lg text-blue-500 underline" href="mailto:vatsal.patel74@gmail.com?subject=Issue with access to 'Book Name' ">Email*/}
                {/*    Us</a>*/}


                {/*</div>*/}
                <div>
                {/*<h2 className="mb-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact*/}
                {/*    Us</h2>*/}
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"><br/>Got a
                    technical issue? Want to send feedback about a beta feature? Want to become a partner?
                    Let us know.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            email</label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="john.wick@matrix.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                            message</label>
                        <textarea id="message" rows="6"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-rose-600 sm:w-fit hover:bg-rose-950 focus:ring-4 outline-2 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                        message
                    </button>
                </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contacts


