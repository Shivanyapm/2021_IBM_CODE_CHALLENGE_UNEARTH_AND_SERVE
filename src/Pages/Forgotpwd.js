import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/Forgot.css';
class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password1: "",
            password2: ""
        };
    }
    forgot = (props) => {
        console.log(this.state.email)
        console.log(this.state.password1)
        console.log(this.state.password2)
    }
    render = () => {
        return (
            <div> <Header />
                <div className="loginContainer1">


                    <form>


                        <div className="container">
                            <label for="uname"><b>Emailid</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required onChange={(e) => this.setState({ email: e.target.value })} />

                            <label for="psw"><b>New Password</b></label>
                            <input type="password" placeholder="Enter New Password" name="psw" required onChange={(e) => this.setState({ password1: e.target.value })} />
                            <label for="psw"><b>Confirm New Password</b></label>
                            <input type="password" placeholder="Confirm Password" name="psw" required onChange={(e) => this.setState({ password2: e.target.value })} />
                            <button type="submit" className="LoginButton" onClick={this.forgot}>Set Password</button>

                        </div>

                    </form></div ></div >
        )

    }
}


export default ForgotPassword;