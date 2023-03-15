import { useContext, useState } from "react"
import { BrowserRouter as Router, Routes,Route, Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import Login from "./pages/Authentication/Login"
import Register from "./pages/Authentication/Register"
import Home from "./pages/Home/Home"

import About from "./pages/Admin/pages/About/About"
import Chat from "./pages/Admin/pages/Chat/Chat"
import Portfolio from "./pages/Admin/pages/Portfolio/Portfolio"
import Resume from "./pages/Admin/pages/Resume/Resume"
import Service from "./pages/Admin/pages/Service/Service"
import User from "./pages/Admin/pages/User/User"
import Contact from "./pages/Admin/pages/Contact/Contact"

import Sidebar from "./pages/Admin/components/Sidebar/Sidebar"
import Admin from "./pages/Admin/Admin"
const USER_TYPES = {
    PUBLIC:"public",
    NORMAL:"normal",
    ADMIN:"admin",
}
const CURRENT_USER_TYPE = USER_TYPES.ADMIN
function App() {

    return (
        <div className="App">
            <Router>
                <PublicUser>
                    <Routes>
                        <Route path="/" 
                        element={
                            // <RequireAuth>
                                <Home/>
                            // </RequireAuth>
                        }/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </PublicUser>
               <AdminUser>
                    <Admin/>
               </AdminUser>
            </Router>
        </div>
    );
}



const PublicUser = ({children})=>{
    return children
}
  
const AdminUser = ({children})=>{
    if(CURRENT_USER_TYPE==USER_TYPES.ADMIN){
        return children
    }else{
        return <Navigate to="/"/>
    }
}

export default App;
