import { useState } from "react";
import { Link } from "react-router-dom";
import { testimonials } from "../../../../data";
import Table from "../../components/Table/Table";
import "./chat.css";

const Chat = () => {
    const [headers, setHeaders] = useState(["Image", "User", "Country", "Feedback"])
    const tableName = "Testimonials"
    const link = "chat"

    // const table = testimonials.map((data) => {
    //     return {
    //         image: <img src={data.img}></img>,
    //         user: data.user,
    //         country: data.country,
    //         feedback: data.feedback,
    //     };
    // });
    return (
        <div className="ChatAdmin"id="chatadmin">
            <Table
                link={link}
                tableName={tableName}
                tableHeaders={headers}
                table={testimonials}
            />
        </div>
    );
};

export default Chat;
