import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/Forgot.css';
import Axios from 'axios';
class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password1: "",
            c: 0
        };
    }
    forgot = (props) => {
        Axios.post("http://localhost:3001/forgot", {
            email: this.state.email,
            password: this.state.password1
        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message);
            }
            else {
                this.state.c = 1;
                this.props.history.push('/Login');
            }
        })

    }
    render = () => {
        return (
            <div> <Header />
                <div className="loginContainer1">


                    <form>


                        <div className="container">
                            <label for="uname"><b>Email id</b></label>
                            <input type="text" placeholder="Enter emailid" name="uname" required onChange={(e) => this.setState({ email: e.target.value })} />

                            <label for="psw"><b>New Password</b></label>
                            <input type="password" placeholder="Enter New Password" name="psw" required onChange={(e) => this.setState({ password1: e.target.value })} />
                            <label for="psw"><b>OTP</b></label>
                            <input type="password" placeholder="Enter OTP" name="otp" required />
                            <Link to={this.state.c === 1 ? '/Login' : '/ForgotPassword'}>
                                <button type="submit" className="LoginButton" onClick={this.forgot}>Set Password</button></Link>

                        </div>

                    </form></div ></div >
        )

    }
}


export default ForgotPassword;