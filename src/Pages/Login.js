import React from 'react';
import Header from '../components/Header';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/4.png';
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
    }
    login = (props) => {
        console.log(this.state.email)
        console.log(this.state.password)
    }
    render = () => {
        console.log(this.state.email)
        console.log(this.state.password)
        return (
            <div> <Header />
                <div className="loginflex">
                    <div>
                        <img src={logo} alt="logo1" className="loginmain" /></div>
                    <div className="verticalLine1">

                    </div>
                    <div className="loginContainer">


                        <form id="loginform">


                            <div className="container">
                                <label for="uname"><b>Email id</b></label>
                                <input type="text" id="email" placeholder="Enter email id" name="uname" required onChange={(e) => this.setState({ email: e.target.value })} />

                                <label for="psw"><b>Password</b></label>
                                <input type="password" id="password" placeholder="Enter Password" name="psw" required onChange={(e) => this.setState({ password: e.target.value })} />

                                <button type="submit" className="LoginButton" onClick={this.login}>Login</button>

                            </div>

                            <div className="Lowercontainer" >
                                <Link to='/' >
                                    <button type="button" className="cancelbtn">Cancel</button></Link>
                                <span className="psw"><Link to='/ForgotPassword'>Forgot Password?</Link> </span><br />
                                <span className="psw1"><Link to='./Signup'>Not Signed in? Register</Link></span>
                            </div>
                        </form></div ></div ></div>
        )

    }
}
export default Login;