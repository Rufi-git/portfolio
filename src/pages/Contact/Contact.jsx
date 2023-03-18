import { useState, useEffect } from "react";
import Success from "../../components/Message/Success/Success.jsx";
import Heading from "../../components/Heading/Heading";
import { db } from "../../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./contact.css"
import Loading from "../Admin/components/Loading/Loading.jsx";
export const Contact = () => {
    const [isSended, setIsSended] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    const testimonialCollectionRef = collection(db, "testimonials")
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsSended(false);
        emailjs.sendForm('service_5ycyidm', 'template_wrgf5c9', form.current, 'PgF_d2FIzqGx6BjB2')
            .then((result) => {
                console.log(result.text);
                setIsLoading(false)
                setIsSended(true)
                setTimeout(() => {
                    setIsSended(false)
                }, 2000)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section className="Contact" id="contact">
            <div className="container">
                <Heading header="Contact" subHeader="get in touch" />
                {isLoading ? <Loading />

                    : isSended ? <Success message="Your email has been sent successfully!" /> :
                        <div className="contact-us row justify-content-center align-content-center">
                            <div className="find col-3 col-md-4">
                                <div className="address">
                                    <h3>Address</h3>
                                    <p>
                                        4th Floor, Plot No.22,
                                        145 Murphy Canyon Rd.
                                        San Diego CA 2028
                                    </p>
                                    <div className="media mobile">
                                        <span className="icon">
                                            <i className="fas fa-phone"></i>
                                        </span>
                                        <span className="number">+371 24 60 96 60</span>
                                    </div>
                                    <div className="media phone">
                                        <span className="icon">
                                            <i className="fas fa-fax"></i>
                                        </span>
                                        <span className="home">(---) --- -- --</span>
                                    </div>
                                    <div className="media email">
                                        <span className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span className="mail">Rufi.Aliyev@edu.rtu.lv</span>
                                    </div>
                                </div>
                                <div className="social">
                                    <h3>Follow me</h3>
                                    <ul className="social-icons">
                                        <li className="social-icon-list"><i className="fab fa-dribbble"></i></li>
                                        <li className="social-icon-list"><i className="fab fa-twitter"></i></li>
                                        <li className="social-icon-list"><i className="fab fa-facebook-f"></i></li>
                                        <li className="social-icon-list"><i className="fab fa-google"></i></li>
                                        <li className="social-icon-list"><i className="fab fa-github"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="note col-12 col-md-8 col-sm-12">
                                <h3>Send us a note</h3>
                                <form action="" onSubmit={sendEmail} ref={form} className="row g-4 form justify-content-center">
                                    <div className="form-group col-md-6 col-sm-12">
                                        <input type="text" name="user_name" className="form-control" placeholder="Name" required />
                                    </div>
                                    <div className="form-group col-md-6 col-sm-12">
                                        <input type="email" name="user_email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea type="text" name="message" className="form-control textarea" placeholder="Tell us more about your needs........" required />
                                    </div>
                                    <button type="submit" className="btn btn-success col-3">Send Message</button>
                                </form>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
}

export default Contact;




export const contactForm = () => {

}