import React from 'react';
import Header from '../components/Header';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/4.png';
import Axios from 'axios';
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            b: 0
        };
    }
    login = (props) => {
        if (this.state.email === "admin@gmail.com" && this.state.password === "admin") {
            this.state.b = 2
            this.props.history.push('/AdminHomePage');
        }
        else {
            Axios.post("http://localhost:3001/login", {
                email: this.state.email,
                password: this.state.password
            }
            ).then((response) => {
                if (response.data.message) {
                    console.log("Failure")
                    alert(response.data.message);
                }
                else {
                    console.log("Success")
                    this.state.b = 1;
                    this.props.history.push('/SponsorHomePage');
                    // this.props.history.push('/SponsorHome');

                }

            })
        }
    }

    render = () => {
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
                                <input type="password" className="pswfield" id="password" placeholder="Enter Password" name="psw" required onChange={(e) => this.setState({ password: e.target.value })} />
                                <Link to={this.state.b === 2 ? '/AdminHomePage' : this.state.b === 1 ? '/SponsorHomePage' : '/Login'}>
                                    <button type="submit" className="LoginButton" onClick={this.login} >Login</button>
                                </Link>

                            </div>

                            <div className="Lowercontainer" >
                                <Link to='/' >
                                    <button type="button" className="cancelbtn">Cancel</button></Link>
                                <span className="psw"><Link to='/ForgotPassword'>Forgot Password?</Link> </span><br />
                                <span className="psw1"><Link to='./Signup'>Not Signed in? Register</Link></span>
                            </div>
                        </form></div ></div ></div >
        )

    }
}
export default Login;