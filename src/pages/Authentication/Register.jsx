import "./auth.css"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, googleProvider, storage } from "../../config/firebase"
import { useContext, useEffect, useState } from "react"
import google from "../../contents/icons/google.svg"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
const Register = () => {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, "users", res.user.uid), {
                name: name,
                surname: surname,
                username: username,
                timeStamp: serverTimestamp()
            })
            dispatch({type:"LOGIN", payload:res.user})
            navigate("/");
        } catch (err) {
            console.error(err)
        }
    }

    const signUpWithGoogle = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="Register">
            <div className="container">
                <div className="form-container">
                    <h1>Registration</h1>
                    <form onSubmit={signUp}>
                        <div className="form-group">
                            <label htmlFor="registrationName">Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="registrationName" placeholder="Enter name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registrationName">Family Name</label>
                            <input type="text" onChange={(e) => setSurname(e.target.value)} className="form-control" id="registrationSurname" placeholder="Enter name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registrationName">Username</label>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" id="registrationUser" placeholder="Enter name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registrationEmail">Email address</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="registrationEmail" name="registrationEmail" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registrationPassword">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="registrationPassword" name="registrationPassword" placeholder="Password" required />
                        </div>
                        <button className="btn" type="submit">Register</button>
                        <Link to="/login" className="navigate">Already have an account?</Link>
                    </form>
                    <div className="google-signin">
                        <button className="google-signin-button" onClick={(e) => signUpWithGoogle(e)}>
                            <img src={google} alt="Google" />
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;