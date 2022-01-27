import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div id="login" className="login">
            <h2>Please Register</h2>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};
//added comment
export default Register;