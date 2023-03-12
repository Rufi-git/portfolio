import "./navbar.css"
import defaultimg from "../../contents/image/defaultimg.png"
import {links} from "../../data"
import { Navigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import {Link} from "react-scroll"
import { auth,db,googleProvider } from "../../config/firebase"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { collection } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const handleSignOut = () => {
        auth.signOut()
        dispatch({type:"LOGOUT"})
    }
    return (
        <header>
            <nav className="Navbar" id="navbar">
                <div className="nav_profile">
                    <a href="#">
                        <img src={defaultimg} alt="Profile Picture" />
                        <h2 className="profile_info">
                            Rufi Aliyev
                        </h2>
                    </a>
                    {/* <form onSubmit={handleSignOut}>
                        <button type="submit">Sign Out</button>
                    </form> */}
                </div>
                <div className={`nav_menu ${(isNavShowing)?"open_nav":"hide_nav"}`}>
                    <ul className="nav_menu_item">
                        {
                             links.map(({name,path},index)=>{
                                return(
                                    <li className="navbar_item_list" key={index}>
                                        <Link spy={true} smooth={true} offset={10} duration={100} to={path} className={({isActive})=>
                                        isActive ? "active_menu" : ""}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="menu_toggle" onClick={()=>setIsNavShowing(!isNavShowing)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="nav_social">
                    <ul className="nav_social_item">
                        <li className="nav_social_item_list">
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="nav_social_item_list">
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav_social_item_list">
                            <a href="#">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </li>
                        <li className="nav_social_item_list">
                            <a href="#">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;