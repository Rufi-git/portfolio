import { NavLink } from "react-router-dom";
import Heading from "../../components/Heading/Heading"
import "./portfolio.css"
import { templates } from "../../data";
import Modal from "../../components/Modal/Modal";

const Portfolio = () => {
    return (
        <section className="Portfolio" id="portfolio">
            <div className="container">
                <Heading header="Portfolio" subHeader="my work"/>
                <div className="portfolio_menu">
                    <ul className="portfolio_menu_item">
                        <li className="portfolio_menu_item_list">
                            <NavLink to="/all" className={({isActive})=>
                                    isActive ? "active" : ""}>All</NavLink>
                        </li>
                        <li className="portfolio_menu_item_list">
                        <NavLink to="/design" className={({isActive})=>
                                    isActive ? "active" : ""}>Design</NavLink>
                        </li>
                        <li className="portfolio_menu_item_list">
                        <NavLink to="/brand" className={({isActive})=>
                                    isActive ? "active" : ""}>Brand</NavLink>
                        </li>
                        <li className="portfolio_menu_item_list">
                        <NavLink to="/photos" className={({isActive})=>
                                    isActive ? "active" : ""}>Photos</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="portfolio_templates">
                    {
                        templates.map(({image, text, category, size,id},index)=>{
                            return(
                                <div className={`template content_${size}`} key={index}>
                                    <img src={image} alt="Template"/>
                                    <div className="portfolio_overlay"  data-bs-toggle="modal" data-bs-target={`#Modal_${id}`} >
                                        <h1>{text}</h1>
                                        <p>{category}</p>
                                    </div>
                                    <Modal image={image} text={text} category={category} size={size} id={id}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;