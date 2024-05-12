import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Navbar from "../components/Navbar.jsx";
import Certification from "../certifications/Certification.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/Certification">
                <Certification/>
            </ComponentPreview>
            <ComponentPreview path="/Signup">
                <Signup/>
            </ComponentPreview>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews