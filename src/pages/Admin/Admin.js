import { useContext, useState } from "react"
import { BrowserRouter as Router, Routes,Route, Navigate,Switch } from "react-router-dom"
import About from "./pages/About/About"
import Chat from "./pages/Chat/Chat"
import CreateChat from "./pages/Chat/Create/CreateChat"
import Portfolio from "./pages/Portfolio/Portfolio"
import Resume from "./pages/Resume/Resume"
import Service from "./pages/Service/Service"
import User from "./pages/User/User"
import Contact from "./pages/Contact/Contact"

import Sidebar from "./components/Sidebar/Sidebar"
import CreateEdu from "./pages/Resume/Create/CreateEdu/CreateEdu"
import CreateExp from "./pages/Resume/Create/CreateExp/CreateExp"
import CreateAbout from "./pages/About/Create/CreateAbout"
import EditChat from "./pages/Chat/Edit/EditChat"

function Admin() {

    // const RequireAuth = ({children}) => {
    //     return currentUser ? children : <Navigate to="/login"/>
    // }
    return (

        <div className="App">
            <div className="admin_wrapper">
                <Sidebar/>
                    <Routes>
                        <Route path="/admin" element={<About/>}/>
                        <Route path="/admin/about/create" element={<CreateAbout/>}/>

                        <Route path="admin/chat" element={<Chat/>}/>
                        <Route path="/admin/chat/create" element={<CreateChat/>}/>
                        <Route path="/admin/chat/edit/:id" element={<EditChat/>}/>

                        <Route path="admin/contact" element={<Contact/>}/>
                        <Route path="/admin/portfolio" element={<Portfolio/>}/>

                        <Route path="/admin/resume" element={<Resume/>}/>
                        <Route path="/admin/education/create" element={<CreateEdu/>}/>
                        <Route path="/admin/job/create" element={<CreateExp/>}/>

                        <Route path="/admin/service" element={<Service/>}/>
                        <Route path="/admin/user" element={<User/>}/>
                    </Routes>
                </div>
            
        </div>
    );
}




export default Admin;