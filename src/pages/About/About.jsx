import "./about.css"
import { about_me, prizes } from "../../data"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import React, { useEffect, useState } from "react"
import Heading from "../../components/Heading/Heading"
import pdf from "../../contents/pdf/CV - Rufi Aliyev.pdf"
import { collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../config/firebase"
const About = () => {
    const [counterOn, setCounterOn] = useState(false)


    const [tableList, setTableList] = useState([]);

    const tableCollectionRef = collection(db, "about")

    useEffect(() => {
        const getTableList = async () => {
            try {
                const data = await getDocs(tableCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTableList(filteredData)
            } catch (error) {
                console.log(error)
            }
        }
        getTableList();
    }, [])
    console.log(tableList)

    return (
        <section className="About" id="about" >
            <div className="container">
                <Heading header="About me" subHeader="Know me more" />
                <div className="row about_me">
                    <div className="col-8 about_me_text">
                        <h3>
                            I'm <span>Rufi Aliyev,</span> a Web Developer
                        </h3>
                        <p>
                            I help you build brand for your business at an affordable price.
                            Thousands of clients have procured exceptional results while working
                            with our dedicated team. when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <p>
                            Delivering work within time and budget which meets client’s
                            requirements is our moto. Lorem Ipsum has been the industry's
                            standard dummy text ever when an unknown printer took a galley.
                        </p>
                    </div>
                    <div className="col-4 about_me_details">
                        <ul className="details_item">
                            {
                                tableList.map((value, index) => {
                                    // if(key=="Email"){
                                    //     return(
                                    //         <li key={index} className="details_item_list">
                                    //             <span className="property">Name:{value.name}: </span>
                                    //             <a href="#"></a>
                                    //         </li>
                                    //     )
                                    // }
                                    // else{
                                    return (
                                        <React.Fragment key={index}>
                                            <li className="details_item_list">
                                                <span className="property">
                                                    Name:
                                                </span>
                                                <span href="#">{" " + value.name}</span>
                                            </li>
                                            <li className="details_item_list">
                                                <span className="property">
                                                    Age:
                                                </span>
                                                <span href="#">{" " + value.age}</span>
                                            </li>
                                            <li className="details_item_list">
                                                <span className="property">
                                                    Email:
                                                </span>
                                                <span href="#">{" " + value.email}</span>
                                            </li>
                                            <li className="details_item_list">
                                                <span className="property">
                                                    Birth:
                                                </span>
                                                <span href="#">{" " + value.from}</span>
                                            </li>
                                            <li className="details_item_list">
                                                <span className="property">
                                                    Live:
                                                </span>
                                                <span href="#">{" " + value.live}</span>
                                            </li>
                                        </React.Fragment>

                                    )
                                    // }

                                })
                            }
                        </ul>
                        <a href={pdf} download className="pdf">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="qualifications">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <ul className="qualification_item row">
                            {
                                prizes.map(({ count, value }, index) => {
                                    return (
                                        <li className="qualification_item_list col-xxl-2 col-lg-2 col-md-2 col-sm-3" key={index}>
                                            <h1>
                                                {
                                                    counterOn &&
                                                    <CountUp start={0} end={count} duration={1} delay={0} />
                                                }+
                                            </h1>
                                            <p>{value}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </ScrollTrigger>
                </div>
            </div>
        </section>
    );
}

export default About;