import Heading from "../../components/Heading/Heading";
import {testimonials} from "../../data";
import { db } from "../../config/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Slide from "../../components/Slider/Slide"
import "./testimonial.css"


const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    // const [testimonialList, setTestimonialList] = useState([]);
    // const testimonialCollectionRef = collection(db, "testimonials")
    // useEffect(() => {
    //     const getTestimonialList = async () => {
    //         try {
    //             const data = await getDocs(testimonialCollectionRef);
    //             const filteredData = data.docs.map((doc)=>({
    //                 ...doc.data(),
    //             }))
    //             setTestimonialList(filteredData.filter((active)=>active.isActive==true));
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     getTestimonialList()
    // }, [])



    const [tableList, setTableList] = useState([]);

    const tableCollectionRef = collection(db, "testimonials")
    useEffect(() => {
        const getTableList = async () => {
            try {
                const data = await getDocs(tableCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTableList(filteredData)
            } catch (error) {
                console.log(error)
            }
        }
        getTableList();
    }, [])



    
    return (
        <section className="Testimonial" id="testimonial">
            <div className="container">
                <Heading header="Testimonial" subHeader="client speak"/>
                <div className="slider">
                <Carousel responsive={responsive}
                swipeable={true}
                focusOnSelect={true} 
                draggable={true}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5s ease"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list"
                arrows={true}
                centerMode={true}
                shouldResetAutoplay={false}
                itemClass="carousel-item-padding-40-px"
                renderDotsOutside={true}
                >
                    {
                        tableList.map((value,index)=>{
                            return(
                                <div key={index}>
                                    <Slide img={value.image} user={value.fullname} country ={value.country} feedback={value.feedback} star={Number(value.star)}/>
                                </div>
                            )
                        })
                    }
                </Carousel>
                </div>
            </div>
        </section>
    );
}
 
export default Testimonial;
