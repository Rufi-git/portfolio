import "./resume.css"
import {jobs, skills } from "../../data"
import Heading from "../../components/Heading/Heading";
import pdf from "../../contents/pdf/CV - Rufi Aliyev.pdf"
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
const Resume = () => {
    const [educationList, setEducationList] = useState([]);
    const educationCollectionRef = collection(db, "educations")
    const capitalize = (str) => {
        return str.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join(" ");
    }
    useEffect(() => {
        const getEducationList = async () => {
            try {
                const data = await getDocs(educationCollectionRef);
                const filteredData = data.docs.map((doc)=>({
                    ...doc.data(),
                }))
                setEducationList(filteredData.filter((active)=>active.isActive==true));
            } catch (error) {
                console.log(error)
            }
        }

        getEducationList()
    }, [])

    return (
        <section className="Resume" id="resume">
            <div className="container">
                <Heading header="summary" subHeader="Resume" />
                <div className="resume_details">
                    <div className="ed_ex">
                        <h3>My Education</h3>
                        <ul className="ed_ex_item">
                            {
                                educationList.map((education , index) => {
                                    return (
                                        <li className="ed_ex_item_list" key={index}>
                                            <p className="year">{education.start_year} - {education.end_year}</p>
                                            <h4 className="name">
                                                {capitalize(education.degree)}
                                            </h4>
                                            <span className="choice text-danger">
                                                {capitalize(education.name)}
                                            </span>
                                            <p className="text mb-2">
                                                {education.about}
                                            </p>
                                        </li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                    <div className="ed_ex">
                        <h3>My Experience</h3>
                        <ul className="ed_ex_item">
                            {
                                jobs.map(({ period, name, program, about }, index) => {
                                    return (
                                        <li className="ed_ex_item_list" key={index}>
                                            <p className="year">{period}</p>
                                            <h4 className="name">{name}</h4>
                                            <span className="choice text-danger">
                                                {program}
                                            </span>
                                            <p className="text mb-2">
                                                {about}
                                            </p>
                                        </li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="skills">
                    <h3>My Skills</h3>
                    <div className="skill_item row justify-content-center">
                        {
                            skills.map(({ name, percent }, index) => {
                                const style = {
                                    width: percent + "%"
                                };
                                return (
                                    <div className="skill_list col-6" key={index}>
                                        <div className="skill_info">
                                            <span>{name}</span>
                                            <span>{percent}%</span>
                                        </div>
                                        <div className="progressbar">
                                            <div className="bar" style={style}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="cv">
                    <a href={pdf} download className="pdf">
                        Download CV
                        <i className="fa-solid fa-download"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;