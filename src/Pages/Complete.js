import React from 'react'
import Header from '../components/Header1';
import Sidebar from '../components/Sidebar1';
import { Link } from 'react-router-dom';
import '../css/SponsorHome.css';
const Sponsor = () => {
    return (
        <div className="Sponsor"><Header />
            <div className="sponsorpay1"><br /><br />
                <h1><center>Your payment is completed.<br />Thank you for donating!</center></h1><br />
                <Link to='/SponsorHomePage'>
                    <center><button type="button" class="btn btn-dark">Go back to your home page</button></center></Link >
            </div ></div>
    )
}
export default Sponsor;