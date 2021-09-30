import React, { useState } from 'react'
import Post from '../assets/data/Health_XGBoost.json';
import Header from '../components/Header1'
import Sidebar from '../components/Sidebar1';
import { Link } from 'react-router-dom';
import '../css/AdminHome.css';

const Hdetails = () => {
    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    var count = Object.keys(Post).length;
    console.log(count)
    return (


        <div><Header /><div className="bdetails">
            <div><Sidebar /></div><div><table id="tab2" class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Aadhar ID</th>
                        <th scope="col">Rationcard Category</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Monthly Income</th>
                        <th scope="col">Chronic disease?</th>
                        <th scope="col">Surgery needed?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Post.map((val, j) => {
                            for (var i = 0; i < count; i++) {
                                if (val.Rationcard_Category === 1) {
                                    val.Rationcard_Category = "APL";
                                }
                                else if (val.Rationcard_Category === 0) {
                                    val.Rationcard_Category = "BPL";
                                }
                                if (val.Gender === 0) {
                                    val.Gender = "Male";
                                }
                                else if (val.Gender === 1) {
                                    val.Gender = "Female";
                                }
                                if (val.Chronic_Disease === 1) {
                                    val.Chronic_Disease = "Yes";
                                }
                                else if (val.Chronic_Disease === 0) {
                                    val.Chronic_Disease = "No";
                                }
                                if (val.Surgery_needed === 1) {
                                    val.Surgery_needed = "Yes";
                                }
                                else if (val.Surgery_needed === 0) {
                                    val.Surgery_needed = "No";
                                }
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{val.Aadhar_id}</td>
                                        <td>{val.Rationcard_Category}</td>
                                        <td>{val.Gender}</td>
                                        <td>{val.Monthly_Income}</td>
                                        <td>{val.Chronic_Disease}</td>
                                        <td>{val.Surgery_needed}</td>
                                        <td><Link to='/bpay'><button className="btn btn-danger">Pay</button></Link></td>


                                    </tr>

                                )
                            }
                        })
                    }


                </tbody>
            </table>
            </div></div>
        </div>
    )
}

export default Hdetails;