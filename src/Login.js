import Button from '@material-ui/core/Button';
import React from 'react';
import './Login.css';
import { auth , provider} from './firebase';

function Login() {
    const signIn = () => {
        // Sign in...
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        }
        )
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />

            <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
