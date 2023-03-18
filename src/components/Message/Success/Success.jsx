import "./success.css"
const Success = ({ message }) => {
    return (
        <div className="Success">
            <div className="success-message">
                <div className="success-message-content">
                    <i className="fa fa-check-circle success-icon"></i>
                    <p className="success-text">{message}</p>
                </div>
            </div>
        </div>

    );
}

export default Success;