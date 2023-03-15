import { useParams } from "react-router-dom";
import "./edit.css"
import { testimonials } from "../../../../../data";
import { useEffect, useState } from "react";
import { db } from "../../../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";



// useEffect(() => {
//     const getTableList = async () => {
//         try {
//             const data = await getDocs(tableCollectionRef);
//             const filteredData = data.docs.map((doc) => ({
//                 id: doc.id,
//                 image: doc.image,
//                 name: doc.name,
//                 email: doc.email,
//                 country: doc.country,
//                 feedback: doc.feedback,
//                 star: doc.star,
//                 ...doc.data()
//             }))
//             setTableList(filteredData)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     getTableList();
// }, [])

const EditChat = () => {
//     const [tableList, setTableList] = useState([]);

// const tableCollectionRef = collection(db, tableName)

    const { id } = useParams();
    return (
        <div className="EditChat">
            <div className="container">
                {testimonials.filter(item => item.id == id).map(filtered => (

                    <form>
                        {filtered.img}
                        <div class="form-group">
                            <label for="user">User Name</label>
                            <input type="text" id="user" className="form-control" placeholder="User" value={filtered.user} />
                        </div>
                        <div class="form-group">
                            <label for="country">Country</label>
                            <input type="text" id="country" className="form-control" placeholder="Country" value={filtered.country} />
                        </div>
                        <div class="form-group">
                            <label for="feedback">Feedback</label>
                            <textarea id="feedback" className="form-control" placeholder="Feedback" value={filtered.feedback}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                ))}
            </div>
        </div>
    );
}

export default EditChat;