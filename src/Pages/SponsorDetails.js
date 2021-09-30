import React, { useState } from 'react'
import Header from '../components/Header1'
import Sidebar from '../components/Sidebar';
import Axios from 'axios';
import emailjs from 'emailjs-com';
const Sponsor = () => {
    const [count, setcount] = useState();
    const [list, setlist] = useState([]);
    function details() {


        Axios.post("http://localhost:3001/sdetails", {

        }
        ).then((response) => {
            try {
                console.log(response)
                setcount(response.data.length)
                setlist(response.data)
                console.log(response.data)
            } catch (err) {
                console.log("Error")
            }

        })


    }
    const templateParams = {
        to_name: 'Shivanya',
        message: "'Few things are done to make our innerselves happy.'Your donation makes a huge difference in someone's lives. Please do Login in to our Web Application Helping Hands and donate to help the needful.",
        reply_to: 'shivanyapm22@gmail.com'
    };
    function sendEmail(e) {
        e.preventDefault();

        emailjs.send('service_af58f65', 'template_9ei265s', templateParams, 'user_vRMtbv90VJBnqpTmFWrJN');
    }

    return (
        <div><Header /><div className="sdetail"><div><Sidebar /></div>
            <div className="sdiv"><h1>SPONSOR'S DETAILS</h1></div></div><div className="show">
                <table id="tab" class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((val, i) => {
                            const id = 1;
                            return (

                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.emailid}</td>
                                </tr>


                            )
                        })}

                    </tbody>
                </table>

                <button className="btn btn-dark" onClick={details}>Show details</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={sendEmail}>Send Email to Sponsors</button>
            </div>
        </div>
    )
}

export default Sponsor;