import { useEffect, useState } from "react";
import { educations, jobs as experiences } from "../../../../data";
import Table from "../../components/Table/Table";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import "./resume.css"
const Resume = () => {
    const [headersEdu, setHeadersEdu] = useState(["University", "Degree", "Start Year", "End Year", "About"])
    const [headersExp, setHeadersExp] = useState(["Name", "Program", "Start Year","End Year","About"])
    const tableNameEdu = "educations";
    const tableNameExp = "experiences";

    const linkEdu = "education"
    const linkExp = "job"

    

    const [tableListEdu, setTableListEdu] = useState([]);

    const tableCollectionEduRef = collection(db, tableNameEdu)

    useEffect(() => {
        const getTableList = async () => {
            try {
                const data = await getDocs(tableCollectionEduRef);
                const filteredData = data.docs.map((doc) => ({
                    id: doc.id,
                    university: doc.university,
                    faculty: doc.faculty,
                    start_year: doc.start_year,
                    end_year: doc.end_year,
                    about: doc.about,
                    ...doc.data()
                }))
                setTableListEdu(filteredData)
            } catch (error) {
                console.log(error)
            }
        }
        getTableList();
    }, [])



    const [tableListExp, setTableListExp] = useState([]);

    const tableCollectionExpRef = collection(db, tableNameExp)

    useEffect(() => {
        const getTableList = async () => {
            try {
                const data = await getDocs(tableCollectionExpRef);
                const filteredData = data.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.name,
                    program: doc.program,
                    start_year: doc.start_year,
                    end_year: doc.end_year,
                    about: doc.about,
                    ...doc.data()
                }))
                setTableListExp(filteredData)
            } catch (error) {
                console.log(error)
            }
        }
        getTableList();
    }, [])



    return (
        <div className="ResumeAdmin" id="resumeadmin">
            <Table
                link={linkEdu}
                tableName={tableNameEdu}
                tableHeaders={headersEdu}
                table={tableListEdu}
            />
            <Table
                link={linkExp}
                tableName={tableNameExp}
                tableHeaders={headersExp}
                table={tableListExp}
            />
        </div>
    );
}

export default Resume;