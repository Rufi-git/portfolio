import { Link } from "react-router-dom";
import { about_me } from "../../../../data";
import "./table.css"
const Table = ({ link, tableName, tableHeaders, table }) => {
    return (
        <div className="TableAdmin">
            <div class="container">
                <div className="tableHead">
                    <h4>{tableName}</h4>

                    <Link to={`/admin/${link}/create`}>
                        <button class="create">
                            Create
                        </button>
                    </Link>
                </div>
                <div className="scrollable">
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
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{key + 1}</td>

                                        {Object.values(value).map((data, index) => (
                                            <td key={index}>{data}</td>
                                        ))}
                                        <td>
                                            <div class="button">
                                                <button class="btn btn-warning">
                                                    <Link to={`/admin/${link}/edit/${table.id}`}>Edit</Link>
                                                </button>
                                                <button class="btn btn-danger">
                                                    <Link to={`/admin/${link}/delete/${table.id}`}>Delete</Link>
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}

export default Table;