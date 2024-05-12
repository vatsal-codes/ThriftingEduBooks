import React from 'react'

function Cards({item}) {
    console.log(item)
    return (
        <>
            <div className="mt-4 my-5">
                <div className="card w-96    bg-rose-100 hover:scale-105 duration-200">
                    <figure><img className="md:object-contain md:h-80 md:w-full h-44 " src= {item.image}
                                 alt="Shoes"/></figure>
                    <div className="card-body">
                        <h2 className="card-title object-contain">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline duration-200 ">${item.price} CAD</div>
                            <div className="badge badge-outline hover:bg-rose-600 hover:text-white hover:p-3 duration-200 cursor-pointer">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
