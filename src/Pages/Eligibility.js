import React from 'react'
import Header from '../components/Header1';
import '../css/Signup.css';
import Axios, { post } from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Checkbox } from '@mui/material';
// class About extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             file: null
//         }
//     }
class About extends React.Component {


    onChange = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            var x = document.getElementById("myFile").value;
            console.log("data " + x)

            const url = "http://localhost:3001/eligible"
            const formdata = { file: e.target.result }

            return post(url, { formdata, x })
                .then(response => console.log(response))
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="flexdiv">
                    <div>
                        <Sidebar /></div>
                    <div className="eligibileDiv">
                        <div >
                            <br /><br />
                            <h2 className="text-center">Check Eligibility</h2>
                            <br /><br />
                        </div>
                        <form >
                            <input type="file" id="myFile" name="filename" onChange={(e) => this.onChange(e)} />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;