import "./home.css"
import Typewriter from 'typewriter-effect';

import Navbar from "../../components/Navbar/Navbar"
import About from "../../pages/About/About"
import Job from "../../pages/Job/Job"
import Resume from "../../pages/Resume/Resume"
import Portfolio from "../../pages/Portfolio/Portfolio"
import Testimonial from "../../pages/Testimonial/Testimonial"
import Contact from "../../pages/Contact/Contact"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <section className="Home" id="home">
            <div className="home_bg">
                <div className="theme"></div>
                <div className="home_text">
                    <h3>Welcome</h3>
                    <h1 className="home_title">
                    <Typewriter
                    options={{
                        strings: [
                            "I'm Rufi Aliyev",
                            "I'm a Freelancer.",
                            "I'm a Web Developper.",
                            "I'm a Designer.",
                          ],
                        speed: 50,
                        delay: 50,
                        deleteSpeed:50,
                        autoStart: true,
                        loop: true,
                    }}/>
                    </h1>
                    <p>based in Riga, Latvia.</p>
                    <a href="#">Hire Me</a>
                </div>
            </div>
        </section>
        <About/>
        <Job/>
        <Resume/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        </div>
        
    );
}
 
export default Home;