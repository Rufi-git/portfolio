import { Link, NavLink } from "react-router-dom";
import "./sidebar.css"
import { linksAdmin } from "../../../../data";
const Sidebar = () => {
    return (
        <div className="SidebarAdmin">
            <div className="side">
                <div className="header">
                    <div className="logo">Logo</div>
                </div>
                <div className="menu">
                    <ul className="menu_item">
                        {linksAdmin.map((value, index) => {
                            return (
                                <NavLink spy={true} smooth={true} offset={10} duration={100} to={value.path}
                                   key={index}>
                                            {value.icon}
                                    <li className="menu_item_list">
                                        {value.name}
                                    </li>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;