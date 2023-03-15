import project1 from "./contents/image/projects/project-1.jpg"
import project2 from "./contents/image/projects/project-2.jpg"
import project3 from "./contents/image/projects/project-3.jpg"
import project4 from "./contents/image/projects/project-4.jpg"
import project5 from "./contents/image/projects/project-5.jpg"
import project6 from "./contents/image/projects/project-6.jpg"
import project7 from "./contents/image/projects/project-7.jpg"

import myphoto from "./contents/image/myphoto.jpg"
import profile1 from "./contents/image/profile1.jpg"
import profile2 from "./contents/image/profile2.jpg"
import profile3 from "./contents/image/profile3.jpg"
export const links = [
    {
        name:"Home",
        path:"home"
    },
    {
        name:"About Me",
        path:"about"
    },
    {
        name:"What I Do",
        path:"job"
    },
    {
        name:"Resume",
        path:"resume"
    },
    {
        name:"Portfolio",
        path:"portfolio"
    },
    {
        name:"Testimonial",
        path:"testimonial"
    },
    {
        name:"Contact",
        path:"contact"
    }
]

export const linksAdmin = [
    {
        icon:<i className="fa-solid fa-person"></i>,
        name:"About",
        path:"/admin/"
    },
    {
        icon:<i className="fa-brands fa-rocketchat"></i>,
        name:"Chat",
        path:"/admin/chat"
    },
    {
        icon:<i className="fa-solid fa-address-book"></i>,
        name:"contact",
        path:"/admin/contact"
    },
    {
        icon:<i className="fa-solid fa-briefcase"></i>,
        name:"Portfolio",
        path:"/admin/portfolio"
    },
    {
        icon:<i className="fa-solid fa-address-card"></i>,
        name:"Resume",
        path:"/admin/resume"
    },
    {
        icon:<i className="fa-sharp fa-solid fa-database"></i>,
        name:"Service",
        path:"/admin/service"
    },
    {
        icon:<i className="fa-solid fa-user"></i>,
        name:"User",
        path:"/admin/user"
    }
]

export const about_me = [
    {
        id:1,
        image:<img src={myphoto}></img>,
        name:"Rufi Aliyev",
        email:"Rufi.Aliyev@edu.rtu.lv",
        age:18,
        from: "Baku, Azerbaijan",
        current:"Riga, Latvia"
    }
] 

export const prizes = [
    {
        count:"10",
        value: "certificates",
    },
]

export const services = [
    {
        icon:"fas fa-palette",
        header:"Graphic Design",
        text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
        icon:"fas fa-pencil-ruler",
        header:"UI/UX Design",
        text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
        icon:"fas fa-chart-area",
        header:"Business Analysis",
        text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
        icon:"fas fa-desktop",
        header:"Web Design",
        text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
        icon:"fas fa-paint-brush",
        header:"App Design & Develop",
        text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
        icon:"fas fa-bullhorn",
        header:"SEO Marketing",
        text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    }
]

export const educations = [
    {
        id:1,
        period:"2011 - 2022",
        faculty:"Academic",
        university:"High School",
        about:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
        id:2,
        period:"2022 - ongoing",
        faculty:"Bachelor Degree",
        university:"Riga Techinical University",
        about:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    }
]

export const jobs = [
    {
        id:1,
        period:"2019 - 2020",
        name:"Web Developer",
        program:"Full Stack",
        about:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
]

export const skills = [
    {
        name:"C#",
        percent: 20,
    },
    {
        name:"Web Design",
        percent: 70,
    },
    {
        name:"JavaScript",
        percent: 80,
    },
    {
        name:"Laravel",
        percent: 60,
    },
    {
        name:"HTML/CSS",
        percent: 95,
    },
    {
        name:"React JS",
        percent: 80,
    },
    {
        name:"Bootstrap",
        percent: 60,
    }
]

export const templates = [
    {
        id:1,
        image:project1,
        text:"Project Title 1",
        category: "Category",
        size:"small",
    },
    {
        id:2,
        image:project2,
        text:"Project Title 2",
        category: "Category",
        size:"medium",
    },
    {
        id:3,
        image:project3,
        text:"Project Title 3",
        category: "Category",
        size:"large",
    },
    {
        id:4,
        image:project4,
        text:"Project Title 4",
        category: "Category",
        size:"medium",
    },
    {
        id:5,
        image:project5,
        text:"Project Title 5",
        category: "Category",
        size:"small",
    },
    {
        id:6,
        image:project6,
        text:"Project Title 6",
        category: "Category",
        size:"large",
    },
    {
        id:7,
        image:project7,
        text:"Project Title 7",
        category: "Category",
        size:"small",
    },
   
]


export const testimonials=[
    {
        id:1,
        img: <img src={profile1}></img>,
        user:"Dennis Jacques",
        country:"USA",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },
    {
        id:2,
        img: <img src={profile2}></img>,
        user:"Jack Milphon",
        country:"Russian",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },
    {
        id:3,
        img: <img src={profile3}></img>,
        user:"Lon Quen",
        country:"Britain",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },
    {
        id:4,
        img: <img src={profile1}></img>,
        user:"Ben Tyon",
        country:"England",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },
    {
        id:5,
        img: <img src={profile2}></img>,
        user:"Cek Pyto",
        country:"Azerbaijan",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },
    {
        id:6,
        img: <img src={profile2}></img>,
        user:"Dennis Jacques",
        country:"USA",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },
    {
        id:7,
        img: <img src={profile3}></img>,
        user:"Dennis Jacques",
        country:"USA",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },

    {
        id:8,
        img: <img src={profile3}></img>,
        user:"Dennis Jacques",
        country:"USA",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },
    {
        id:9,
        img: <img src={profile3}></img>,
        user:"Dennis Jacques",
        country:"USA",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    },
    {
        id:10,
        img: <img src={profile2}></img>,
        user:"Dennis Jacques",
        country:"USA",
        feedback:"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    }
]