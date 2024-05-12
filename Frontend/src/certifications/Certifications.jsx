import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Certification from "../components/Certification.jsx";

function Certifications() {

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
            <Certification />
            </div>
            <Footer />
        </>
    )
}

export default Certifications
