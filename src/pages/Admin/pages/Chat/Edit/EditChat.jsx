import { useNavigate, useParams } from "react-router-dom";
import "./edit.css"
import { testimonials } from "../../../../../data";
import { useEffect, useRef, useState } from "react";
import { db } from "../../../../../config/firebase";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import Loading from "../../../components/Loading/Loading";
import { ref } from "firebase/storage";


const EditChat = () => {
    const navigate = useNavigate();
    const [isEdited, setIsEdited] = useState(false);
    const [updatedFields, setUpdatedFields] = useState({});

    const imageRef = useRef();
    const fullnameRef = useRef();
    const emailRef = useRef();
    const countryRef = useRef();
    const feedbackRef = useRef();
    const starRef = useRef();
    const updatedField = () => {
        const image = imageRef.current.value;
        const fullname = fullnameRef.current.value;
        const email = emailRef.current.value;
        const country = countryRef.current.value;
        const feedback = feedbackRef.current.value;
        const star = starRef.current.value;
        setUpdatedFields({
            image,
            fullname,
            email,
            country,
            feedback,
            star,
        });
    };

    const [tableList, setTableList] = useState([]);

    const tableCollectionRef = collection(db, "testimonials")

    const getTableList = async () => {
        try {
            const data = await getDocs(tableCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                id: doc.id,
                image: doc.data().image,
                fullname: doc.data().fullname,
                email: doc.data().email,
                country: doc.data().country,
                feedback: doc.data().feedback,
                star: Number(doc.data().star),
                ...doc.data()
            }))
            setTableList(filteredData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTableList();
    }, [])
    const handleEdit = async (id) => {
        const item = doc(db, "testimonials", id);
        setIsEdited(true);
        try {
            await updateDoc(item, updatedFields)
                .then(() => {
                    setIsEdited(false);
                });

        } catch (error) {
            console.log("Error happened: " + error)
        } finally {
            setIsEdited(false)
            navigate("/admin/chat")
        }
    }


    //     const [tableList, setTableList] = useState([]);

    // const tableCollectionRef = collection(db, tableName)

    const { id } = useParams();
    return (
        <div className="EditChat">

            <div className="container">
                {isEdited ? <Loading /> : (
                    tableList.filter(item => item.id == id).map(filtered => (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleEdit(id);
                        }}>
                            <img src={filtered.image} alt="Photo" />
                            <div class="form-group">
                                <label for="image">Change Avatar</label>
                                <input type="text" id="image" className="form-control" placeholder="Change Image"
                                ref={imageRef} onChange={updatedField} defaultValue={filtered.image}/>
                            </div>
                            <div class="form-group">
                                <label for="user">Full Name</label>
                                <input type="text" id="user" className="form-control" placeholder="Change Full Name"
                                    ref={fullnameRef} onChange={updatedField} defaultValue={filtered.fullname}/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="Change Email"
                                    ref={emailRef} onChange={updatedField} defaultValue={filtered.email}
                                />
                            </div>
                            <div class="form-group">
                                <label for="country">Country</label>
                                <input type="text" id="country" className="form-control" placeholder="Change Country"
                                    ref={countryRef} onChange={updatedField}  defaultValue={filtered.country}/>
                            </div>
                            <div class="form-group">
                                <label for="feedback">Feedback</label>
                                <textarea id="feedback" className="form-control" placeholder="Change Feedback"
                                    ref={feedbackRef} onChange={updatedField}  defaultValue={filtered.feedback}></textarea>
                            </div>
                            <div class="form-group">
                                <label for="star">Star</label>
                                <input type="number" id="star" className="form-control" placeholder="Change Star"
                                    ref={starRef} onChange={updatedField} defaultValue={filtered.star} ></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>
                    ))
                )}

            </div>
        </div>
    );
}

export default EditChat;