import React, { useState } from 'react'
import Header from '../components/Header1';
import { Link } from 'react-router-dom';
import '../css/SponsorHome.css';

const Sponsor = () => {
    const [amount, setamount] = useState();
    return (
        <div ><Header /><div><div></div>
            <div className="sponsorpay">
                <h1>Enter beneficiary account details</h1>
                Enter account number
                <input type="password" placeholder="Enter account number" />
                Enter beneficiary name
                <input type="text" placeholder="Enter beneficiary name" />
                Enter mode of transaction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /><br />
                <select name="choice">
                    <option value="neft" selected>NEFT</option>
                    <option value="imps" >IMPS</option>
                </select><br /><br />
                Enter IFSC
                <input type="text" placeholder="Enter IFSC" />
                Enter amount
                <input type="text" placeholder="Enter amount" />
            </div><Link to='/complete1'>
                <button type="button" id="donatepay" class="btn btn-warning">Pay now!</button></Link ></div></div >
    )
}
export default Sponsor;