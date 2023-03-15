import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { about_me } from "../../../../data";
import Table from "../../components/Table/Table";
import { db } from "../../../../config/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import "./about.css"
import Chat from "../Chat/Chat"
import Portfolio from "../Portfolio/Portfolio"
import Resume from "../Resume/Resume"
import Service from "../Service/Service"
import User from "../User/User"
import Contact from "../Contact/Contact"
import Sidebar from "../../components/Sidebar/Sidebar";

const About = () => {
    const [headers, setHeaders] = useState(["Image", "Name", "Age", "Email",  "Birth Place", "Currently Live","Order"])
    const tableName = "about"
    const link = "about"


    const [tableList, setTableList] = useState([]);

    const tableCollectionRef = collection(db, tableName)
    const tableRef = query(tableCollectionRef, orderBy('order', 'asc'));
    useEffect(() => {
        const getTableList = async () => {
            try {
                const data = await getDocs(tableRef);
                const filteredData = data.docs.map((doc) => ({
                    id: doc.id,
                    image: doc.image,
                    name: doc.name,
                    age: doc.age,
                    email: doc.email,
                    from: doc.from,
                    live: doc.live,
                    order: doc.order,
                    ...doc.data()
                }))
                setTableList(filteredData)
            } catch (error) {
                console.log(error)
            }
        }
        getTableList();
    }, [])



    return (
            <div className="AboutAdmin" id="aboutadmin">
                <Table
                    link={link}
                    tableName={tableName}
                    tableHeaders={headers}
                    table={tableList}
                />
            </div>
            
    );
}

export default About;