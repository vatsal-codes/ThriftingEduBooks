import React, {useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";
import axios from "axios";

function Freebook() {
    const [book, setBook]=useState([])
    useEffect(() => {
        const getBook= async () =>{
            try {
                const res =await axios.get("http://localhost:4001/book");
                console.log(res.data);
                const data = (res.data.filter((data) => data.category === "CSE"));
                setBook(data);
            } catch (error){
                console.log(error);
            }
        };
        getBook();
    },[])
    // const filterData = sliderBook.filter((data) => data.category === "CSE");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // console.log(filterData);
    return (
        <>
                <div className="max-w-screen-2xl container mx-auto -mt-32 md:px-20 px-4">
                    <div><h1 className="font-normal text-2xl pb-2 "> Limited Time Free Access </h1>
                        <p>Once you have signed up an email will be sent to you with a readable link</p>
                    </div>

            <div>
                <Slider {...settings}>
                    {book.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))}
                </Slider>
            </div>
                </div>
        </>
    );
}

export default Freebook
