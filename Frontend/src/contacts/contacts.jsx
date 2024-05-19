import React, { useState} from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import toast from "react-hot-toast";




function Contacts() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_nwjay65';
        const templateId = 'contact_form';
        const publicKey = 'zd-v3Iu8gEqRj9wYO';

        // Create an object with EmailJS service ID, template ID, Public Key, and Template params
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {

                email: email,
                subject: subject,
                message: message,
            }
        };

        // Send the email using EmailJS
        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);

            setEmail('');
            setSubject('');
            setMessage('');
            toast.success("Message Sent Successfully");
        } catch (error) {
            console.error(error);
        }
    }

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
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        <br/>Got a
                        technical issue? Want to send feedback about a beta feature? Want to become a partner?
                        Let us know.</p>
                    <form onSubmit={handleSubmit}  action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                email</label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="john.wick@matrix.com" required
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="subject"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="Let us know how we can help you" required value={subject}
                                   onChange={(e) => setSubject(e.target.value)}/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                message</label>
                            <textarea id="message" rows="6"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Leave a comment..." value={message}
                                      onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <button type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-rose-600 sm:w-fit hover:bg-rose-950 focus:ring-4 outline-2 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contacts


