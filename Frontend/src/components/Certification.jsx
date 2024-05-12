import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards.jsx";
function Certification() {
    return (
        <>
            <div className= "max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center text-center">
                {/*<h1 className="text-xl font-normal ">Click on a book to get started</h1>*/}

            </div>
                <div className=" mt-4 grid md:grid-cols-3  grid-cols-1">
                    {list.map((item) => (
                     <Cards key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Certification