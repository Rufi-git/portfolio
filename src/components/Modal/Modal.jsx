import "./modal.css"

const Modal = (props) => {
    return (
        <div className="modal fade w-5" id={`Modal_${props.id}`} tabIndex="-1" aria-labelledby={`Modal_${props.id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h1 className="modal-title fs-5 d-flex justify-content-center" id={`Modal_${props.id}Label`}>{props.text}</h1>
                        <button type="button" className="btn-close ml-0" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="modal_image" >
                                        <img src={props.image} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="project">
                                        <div className="details">
                                            <h4>Project Info:</h4>
                                            <p>Quidam lisque persius interesset his et, in quot quidam 
                                                persequeris vim, ad mea essent possim iriure.
                                                Lisque persius interesset his et, in quot quidam
                                                persequeris vim, ad mea essent possim iriure.</p>
                                        </div>
                                        <div className="details">
                                            <h4>Project Details:</h4>
                                                <ul className="details_item">
                                                    <li className="details_item_list">
                                                        <span className="key">Client: </span>
                                                        <span className="value">Ruby Clinton</span>
                                                    </li>
                                                    <li className="details_item_list">
                                                        <span className="key">Technologies: </span>
                                                        <span className="value">iOS, HTML5, CSS3, PHP, Java</span>
                                                    </li>
                                                    <li className="details_item_list">
                                                        <span className="key">Industry: </span>
                                                        <span className="value">Art & Design</span>
                                                    </li>
                                                    <li className="details_item_list">
                                                        <span className="key">Date: </span>
                                                        <span className="value">July 16, 2019</span>
                                                    </li>
                                                    <li className="details_item_list">
                                                        <span className="key">URL: </span>
                                                        <span className="value">www.example.com</span>
                                                    </li>
                                                    <li className="details_item_list">
                                                        <span className="key">Share: </span>
                                                        <span className="value">
                                                        <ul className="social_item">
                                                            <li className="social_item_list">
                                                                <a href="#">
                                                                    <i className="fa-brands fa-facebook-f"></i>
                                                                </a>
                                                            </li>
                                                            <li className="social_item_list">
                                                                <a href="#">
                                                                    <i className="fa-brands fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="social_item_list">
                                                                <a href="#">
                                                                    <i className="fab fa-google"></i>
                                                                </a>
                                                            </li>
                                                            <li className="social_item_list">
                                                                <a href="#">
                                                                    <i className="fab fa-instagram"></i>
                                                                </a>
                                                            </li>
                                                            <li className="social_item_list">
                                                                <a href="#">
                                                                    <i className="fas fa-envelope"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </span>
                                                    </li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;