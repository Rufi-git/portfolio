import Create from "../../../../components/Create/Create";
import "./create.css"
const CreateExp = () => {
    const dbName = "experiences"
    const link = "job"
    const inputs = [
        { 
            id: "start_year", 
            displayName: "Start Year", 
            type: "text" 
        },
        { 
            id: "end_year", 
            displayName: "End Year", 
            type: "text" 
        },
        { 
            id: "name", 
            displayName: "Name", 
            type: "text" 
        },
        { 
            id: "program", 
            displayName: "Program", 
            type: "text" 
        },
        { 
            id: "about", 
            displayName: "About", 
            type: "text" 
        },
      ];
    return (
        <div className="CreateExp">
            <Create inputs={inputs} dbName={dbName} link={link} />
        </div>
    )
}

export default CreateExp;