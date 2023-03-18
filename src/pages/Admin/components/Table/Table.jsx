import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { about_me } from "../../../../data";
import "./table.css"
import { useEffect, useRef, useState } from "react";
import { capitalize } from "../../../Resume/Resume";
import { db } from "../../../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Loading from "../Loading/Loading";
const Table = ({ link, tableName, tableHeaders, table }) => {
    const navigate = useNavigate();
    const [isEdited, setIsEdited] = useState(false);

    const deleteItem = async (id) => {
        const collection = doc(db, tableName, id);

        setIsEdited(true);
        try {
            await deleteDoc(collection)
                .then(() => {
                    setIsEdited(false);
                });

        } catch (error) {
            console.log("Error happened: " + error)
        } finally {
            setIsEdited(false)
            window.location.reload(false);
        }
    }
    return (
        <div className="TableAdmin">
            <div class="container">
                <div className="tableHead">
                    <h4>{capitalize(tableName)}</h4>

                    <Link to={`/admin/${link}/create`}>
                        <button class="create">
                            Create
                        </button>
                    </Link>
                </div>
                <div className="scrollable">
                    {isEdited ? <Loading /> : (
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    {tableHeaders.map((value, index) => {
                                        return (
                                            <th key={index}>{value}</th>
                                        )
                                    })}
                                    <th>Order</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table.map((value, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>

                                            {Object.entries(value).map(([key, data], index) => {
                                                if (key === "image") {
                                                    return <td key={index}><img src={data} alt="" /></td>;
                                                }
                                                return <td key={index}>{data}</td>;
                                            })}
                                            <td>
                                                <div class="button">
                                                    <button class="btn btn-warning">
                                                        <Link to={`/admin/${link}/edit/${value.id}`}>Edit</Link>
                                                    </button>
                                                    <button class="btn btn-danger" data-toggle="modal" data-target={`#Modal_${value.id}`}
                                                        onClick={() => deleteItem(value.id)}>
                                                        Delete
                                                        {/* <Link to={`/admin/${link}/delete/${value.id}`}>Delete</Link> */}
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                    )

                                })}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>

        </div>
    );
}

export default Table;