import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import "./create.css"
import { db } from "../../../../config/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Create = ({ inputs, dbName, link }) => {
    const [formValues, setFormValues] = useState({});
    const collectionRef = collection(db, dbName)
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false);



    const [tableList, setTableList] = useState([]);

    const tableCollectionRef = collection(db, dbName)
    useEffect(() => {
        const getTableList = async () => {
            try {
                const data = await getDocs(tableCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data() }))
                setTableList(filteredData)
            } catch (error) {
                console.log(error)
            }
        }
        getTableList();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collectionRef, formValues)
                .then(() => {
                    setIsSubmitting(false);
                });

        } catch (error) {
            console.log("Error happened: " + error)
        } finally {
            setIsSubmitting(false)
            navigate(`/admin/${link}`)
        }

    }
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
            order: tableList.length + 1
        }));
    };
    return (

        <div className="Create">
            <div className="container">
                {isSubmitting ? <Loading /> : (
                    <form onSubmit={handleSubmit}>
                        {inputs.map((value, index) => {
                            return (
                                <div class="form-group" key={index}>
                                    <label htmlFor={value.id}>{value.displayName}</label>
                                    <input type={value.type} onChange={handleInputChange} id={value.id} required className="form-control" placeholder={value.displayName} />
                                </div>
                            )
                        })}
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Create;