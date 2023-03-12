import "./job.css"
import {services} from "../../data"
import Heading from "../../components/Heading/Heading"

const Job = () => {
    return (
        <section className="Job" id="job">
            <div className="container">
                <Heading header="services" subHeader="What i do?"/>
                <div className="service_info row">
                    {
                        services.map(({icon, header, text},index)=>{
                            return(
                                    <div className="service_list col-lg-6 col-md-12" key={index}>
                                        <div className="service_icon">
                                            <i className={icon}></i>
                                        </div>
                                        <div className="service_text">
                                            <h3>{header}</h3>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                            )
                        })
                    }
                 </div>
            </div>
        </section>
    );
}
 
export default Job;