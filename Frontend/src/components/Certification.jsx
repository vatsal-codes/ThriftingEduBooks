import React, {useEffect, useState} from 'react'
// import list from "../../public/list.json"
import Cards from "./Cards.jsx";
import axios from "axios";
function Certification() {
    const [book, setBook]=useState([])
    useEffect(() => {
        const getBook= async () =>{
            try {
                const res =await axios.get("http://localhost:4001/book");
                console.log(res.data)
                setBook(res.data)
            } catch (error){
                console.log(error)
            }
        }
        getBook();
    },[])
    return (
        <>
            <div className= "max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center text-center">
                {/*<h1 className="text-xl font-normal ">Click on a book to get started</h1>*/}

            </div>
                <div className=" mt-4 grid md:grid-cols-3  grid-cols-1">
                    {book.map((item) => (
                     <Cards key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Certification