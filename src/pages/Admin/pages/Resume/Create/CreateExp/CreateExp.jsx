import Create from "../../../../components/Create/Create";
import "./create.css"
const CreateExp = () => {
    const inputs = [
        { 
            id: "period", 
            displayName: "Period", 
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
            <Create inputs={inputs} />
        </div>
    )
}

export default CreateExp;