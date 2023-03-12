import "./slider.css"
const Slide = (props) => {
    return (
        <div className="Slider">
            <div className="carousel">
                <div className="profile d-flex align-center">
                    <img src={props.img} alt="Profile Picture"/>
                    <div className="info_profile">
                        <strong className="name">{props.user}</strong>
                        <span className="about">User From {props.country}</span>
                    </div>
                </div>
                <div className="text">
                    <p>
                        {props.feedback}
                    </p>
                </div>
                <div className="star">
                    <span><i className="fas fa-star text-warning"></i></span>
                    <span><i className="fas fa-star text-warning"></i></span>
                    <span><i className="fas fa-star text-warning"></i></span>
                    <span><i className="fas fa-star text-warning"></i></span>
                    <span><i className="fas fa-star text-warning"></i></span>
                </div>
            </div>
        </div>
    );
}
 
export default Slide;