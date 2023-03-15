import Create from "../../../components/Create/Create";
import "./create.css"
const CreateAbout = () => {
    const dbName = "about";
    const link = "";
    const inputs = [
        { 
            id: "image", 
            displayName: "Select Avatar", 
            type: "file" 
        },
        { 
            id: "name", 
            displayName: "Name", 
            type: "text" 
        },
        { 
            id: "email", 
            displayName: "Email", 
            type: "email" 
        },
        { 
            id: "age", 
            displayName: "Age", 
            type: "number" 
        },
        { 
            id: "from", 
            displayName: "Birth Place", 
            type: "text" 
        },
        { 
            id: "live", 
            displayName: "Currently Live", 
            type: "text" 
        },
      ];
    return (
        <div className="CreateAbout">
            <Create inputs={inputs} dbName={dbName} link={link}/>
        </div>
    )
}

export default CreateAbout;