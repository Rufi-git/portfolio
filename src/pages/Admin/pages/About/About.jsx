import { useState } from "react";
import { Link } from "react-router-dom";
import { about_me } from "../../../../data";
import Table from "../../components/Table/Table";
import "./about.css"
import Chat from "../Chat/Chat"
import Portfolio from "../Portfolio/Portfolio"
import Resume from "../Resume/Resume"
import Service from "../Service/Service"
import User from "../User/User"
import Contact from "../Contact/Contact"
import Sidebar from "../../components/Sidebar/Sidebar";

const About = () => {
    const [headers, setHeaders] = useState(["Image", "Name", "Email", "Age", "Bith Place", "Currently Live"])
    const tableName = "About me"
    const link = "about"
    return (
            <div className="AboutAdmin" id="aboutadmin">
                <Table
                    link={link}
                    tableName={tableName}
                    tableHeaders={headers}
                    table={about_me}
                />
            </div>
            
    );
}

export default About;