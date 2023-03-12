import { useContext, useState } from "react";
import "./auth.css"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth,googleProvider } from "../../config/firebase"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleLogin = (e)=>{
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            setError(false);
            dispatch({type:"LOGIN", payload:user})
            navigate("/");
        }).catch((err)=>{
            setError(true)
        })
    }
    return (
        <div className="Login">
            <div className="container">
                <div className="form-container">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="loginEmail">Email address</label>
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="loginEmail" name="loginEmail" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="loginPassword" name="loginPassword" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        {error && <span className="error">Wrong Email or Password</span>}
                        <Link to="/register" className="navigate">Don't have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;