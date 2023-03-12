import { useContext, useState } from "react"
import { BrowserRouter as Router, Routes,Route, Navigate,Switch } from "react-router-dom"
import About from "./pages/About/About"
import Chat from "./pages/Chat/Chat"
import Portfolio from "./pages/Portfolio/Portfolio"
import Resume from "./pages/Resume/Resume"
import Service from "./pages/Service/Service"
import User from "./pages/User/User"
import Contact from "./pages/Contact/Contact"

import Sidebar from "./components/Sidebar/Sidebar"

function Admin() {

    // const RequireAuth = ({children}) => {
    //     return currentUser ? children : <Navigate to="/login"/>
    // }
    return (

        <div className="App">
            <div className="admin_wrapper">
                <Sidebar/>
                    <Routes>
                    <Route path="/admin" element={
                            <About/>
                    }/>

                    <Route path="admin/chat" element={
                            <Chat/>
                    }/>
                    <Route path="admin/contact" element={
                            <Contact/>
                    }/>
                    <Route path="/admin/portfolio" element={
                            <Portfolio/>
                    }/>
                    <Route path="/admin/resume" element={
                            <Resume/>
                    }/>
                    <Route path="/admin/service" element={
                            <Service/>
                    }/>
                    <Route path="/admin/user" element={
                            <User/>
                    }/>
                    </Routes>
                </div>
            
        </div>
    );
}




export default Admin;