import "./heading.css"
const Heading = (data) => {
    return (
        <div className="Heading">
            <div className="info">
                    <h1>{data.header}</h1>
                    <h4>
                        {data.subHeader}
                        <span className="line"></span>
                    </h4>
            </div>
        </div>
    );
}
 
export default Heading;