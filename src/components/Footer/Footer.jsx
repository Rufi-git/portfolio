import "./footer.css"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="copyright">
                    <p>Copyright © 2023 <a href="#">Rufi</a>. All Rights Reserved.</p>
                </div>
                <div className="rules">
                    <span>
                        <a href="#">
                            Terms & Policy
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            Disclaimer
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;