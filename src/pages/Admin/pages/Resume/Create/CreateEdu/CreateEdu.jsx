import Create from "../../../../components/Create/Create";
import "./create.css"
const CreateEdu = () => {
    const dbName = "educations"
    const link = "education"
    const inputs = [
        { 
            id: "start_year", 
            displayName: "Start Year", 
            type: "number" 
        },
        { 
            id: "end_year", 
            displayName: "End Year", 
            type: "number" 
        },
        { 
            id: "faculty", 
            displayName: "Faculty", 
            type: "text" 
        },
        { 
            id: "university", 
            displayName: "University", 
            type: "text" 
        },
        { 
            id: "about", 
            displayName: "About", 
            type: "text" 
        },
        
      ];
    return (
        <div className="CreateEdu">
            <Create inputs={inputs} dbName={dbName} link={link} />
        </div>
    )
}

export default CreateEdu;