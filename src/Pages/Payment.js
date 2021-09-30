import React from 'react'
import Header from '../components/Header1';
import Sidebar from '../components/Sidebar1';
import { Link } from 'react-router-dom';
import '../css/SponsorHome.css';
const Sponsor = () => {
    return (
        <div ><Header /><div><div></div>
            <div className="sponsorpay">
                <h1>Enter card details</h1>
                Enter card number
                <input type="password" placeholder="Enter card number" />
                Enter name in number
                <input type="text" placeholder="Enter name in number" />
                Enter expiry date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /><br />
                <input type="date" placeholder="Enter expiry date" /><br /><br />
                Enter cvv
                <input type="password" placeholder="Enter cvv" />
                Enter amount you wish to donate
                <input type="text" placeholder="amount you wish to donate" />
            </div><Link to='/complete'>
                <button type="button" id="donatepay" class="btn btn-warning">Pay now!</button></Link ></div></div >
    )
}
export default Sponsor;