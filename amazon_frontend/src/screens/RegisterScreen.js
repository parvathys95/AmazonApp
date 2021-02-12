

import React, { useState } from "react";
// import swal from 'sweetalert';
import { Link } from 'react-router-dom';


function RegisterScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const history = useHistory();

    // function onSubmit() {
    //     // swal("Registeration success!", "success");
    //      history.push('/screens/Signin');

    // }

    return (

        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>

                <input type="text"
                    className="form-control" value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="First name" required />

            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" value={lastName} className="form-control"
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last name" required />
            </div>


            <div className="form-group">
                <label>Email address</label>
                <input type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter email"
                    required />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}

                    className="form-control"
                    placeholder="Enter password"
                    required />
            </div>


            <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
            <p className="forgot-password text-right">
                Already Registered??  <Link to="/screens/Signin">Sign in</Link>
            </p>
        </form>
    );
};

export default RegisterScreen;