import React from 'react'
import Header from '../components/Header';
import '../css/Signup.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            idno: "",
            psw: "",
            psw1: "",
            add: "",
            flag: -1,
            a: 2
        }
    }

    check = () => {
        this.state.psw1 = document.getElementById('cpassword').value;
        console.log(this.state.psw1);
        if (document.getElementById('password').value ===
            document.getElementById('cpassword').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = 'Password is matching';
            this.state.a = 1;
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'Password is not matching';
            this.state.a = 0;
        }
    }
    signup = (props) => {
        if (this.state.a === 0) {
            alert("Password does not match!!!")
        }
        else {
            Axios.post("http://localhost:3001/signup",
                {
                    name: this.state.name,
                    email: this.state.email,
                    add: this.state.add,
                    phone: this.state.phone,
                    idno: this.state.idno,
                    psw: this.state.psw,
                }).then((response) => {

                    console.log(response);
                    if (response.data.message) {
                        alert(response.data.message);
                    }
                    else {
                        this.state.flag = 3;
                        this.props.history.push('/Login')
                    }
                })
        }

    }

    render = () => {

        console.log(this.state.flag);
        return (
            <div>
                <Header />
                <div>

                    <div >
                        <br /><br />
                        <h2 className="text-center">CREATE ACCOUNT</h2>
                        <br /><br />
                    </div>
                    <form className="form" action="#" onsubmit="passwordd()" id="form">

                        <div className="form-control">
                            <label><b>Fullname</b></label>
                            <input type="text" name="" id="fullname" placeholder="Enter your Fullname" onChange={(e) => this.setState({ name: e.target.value })} required />


                        </div>
                        <div className="form-control">
                            <label><b>Email</b></label>
                            <input type="email" name="" id="email" placeholder="Enter your Email" onChange={(e) => this.setState({ email: e.target.value })} required />


                        </div>
                        <div className="form-control">
                            <label><b>Phone</b></label>
                            <input type="text" name="" id="phone" placeholder="Enter your Contact no" onChange={(e) => this.setState({ phone: e.target.value })} required />


                        </div>
                        <div className="form-control">
                            <label><b>Address</b></label>
                            <input type="text" name="" id="address" placeholder="Enter your Address" onChange={(e) => this.setState({ add: e.target.value })} required />



                        </div>
                        <div className="form-control">
                            <label><b>Aadhar number</b></label>
                            <input type="text" name="" id="aadhar" title="must contain 12 numbers" placeholder="Enter your Aadharno" onChange={(e) => this.setState({ idno: e.target.value })} required />


                        </div>
                        <div className="form-control">
                            <label><b>Password</b></label>
                            <input type="password" id="password" placeholder="Enter your Password" title="must contain number an uppercase a lowercase a special character and minimum 8 character" onChange={(e) => this.setState({ psw: e.target.value })} required />


                        </div>
                        <div className="form-control">
                            <label><b>Confirm password</b></label>
                            <input type="password" id="cpassword" placeholder="Enter your Password again" onChange={this.check} required />
                            <span id='message'></span>

                        </div>
                        <div>
                            <Link to={this.state.flag === 3 ? '/AdminHome' : '/Signup'} onClick={this.signup} >
                                <input type="submit" className="btnsubmit" value="Submit" /></Link>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}
export default About;