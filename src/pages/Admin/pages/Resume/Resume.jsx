import { useState } from "react";
import { educations, jobs as experiences } from "../../../../data";
import Table from "../../components/Table/Table";
import "./resume.css"
const Resume = () => {
    const [headersEdu, setHeadersEdu] = useState(["Period", "Faculty", "University", "About"])
    const [headersExp, setHeadersExp] = useState(["Period", "Name", "Program", "About"])
    const tableNameEdu = "Educations";
    const linkEdu = "education"
    const linkExp = "job"

    const tableNameExp = "Educations";
    return (
        <div className="ResumeAdmin" id="resumeadmin">
            <Table
                link={linkEdu}
                tableName={tableNameEdu}
                tableHeaders={headersEdu}
                table={educations}
            />
            <Table
                link={linkExp}
                tableName={tableNameExp}
                tableHeaders={headersExp}
                table={experiences}
            />
        </div>
    );
}

export default Resume;