import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../../config/firebase";


import "./chat.css";

const Chat = () => {
    const [headers, setHeaders] = useState(["Image", "User","Email", "Country", "Feedback","Stars"])
    const tableName = "testimonials"
    const link = "chat"

    const [tableList, setTableList] = useState([]);

    const tableCollectionRef = collection(db, tableName)

    useEffect(() => {
        const getTableList = async () => {
            try {
                const data = await getDocs(tableCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    id: doc.id,
                    image: doc.image,
                    fullname: doc.fullname,
                    email: doc.email,
                    country: doc.country,
                    feedback: doc.feedback,
                    star: Number(doc.star),
                    ...doc.data()
                }))
                setTableList(filteredData)
            } catch (error) {
                console.log(error)
            }
        }
        getTableList();
    }, [])


    // const table = testimonials.map((data) => {
    //     return {
    //         image: <img src={data.img}></img>,
    //         user: data.user,
    //         country: data.country,
    //         feedback: data.feedback,
    //     };
    // });
    console.log(tableList)
    return (
        <div className="ChatAdmin"id="chatadmin">
            <Table
                link={link}
                tableName={tableName}
                tableHeaders={headers}
                table={tableList}
            />
        </div>
    );
};

export default Chat;
