import { useEffect, useState } from "react";
import Create from "../../../components/Create/Create";
import "./create.css"
const CreateChat = () => {
    const dbName = "testimonials";
    const link = "chat";
    const inputs = [
        {
            id: "image",
            displayName: "Select Avatar",
            type: "text"
        },
        {
            id: "fullname",
            displayName: "Full Name",
            type: "text"
        },
        {
            id: "country",
            displayName: "Country",
            type: "text"
        },
        {
            id: "feedback",
            displayName: "Feedback",
            type: "text"
        },
        {
            id: "email",
            displayName: "Email",
            type: "email"
        },
        {
            id: "star",
            displayName: "Rate",
            type: "number"
        },
    ];
    return (
        <div className="CreateChat">
            <Create inputs={inputs} dbName={dbName} link={link} />
        </div>
    )
}

export default CreateChat;