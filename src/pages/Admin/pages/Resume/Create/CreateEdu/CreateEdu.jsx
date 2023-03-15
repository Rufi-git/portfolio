import Create from "../../../../components/Create/Create";
import "./create.css"
const CreateEdu = () => {
    const inputs = [
        { 
            id: "period", 
            displayName: "Period", 
            type: "text" 
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
            <Create inputs={inputs} />
        </div>
    )
}

export default CreateEdu;