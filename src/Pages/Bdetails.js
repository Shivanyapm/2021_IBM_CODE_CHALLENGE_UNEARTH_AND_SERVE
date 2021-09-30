import React, { useState } from 'react'
import Header from '../components/Header1'
import Sidebar from '../components/Sidebar';
import Post from '../assets/data/Education_XGBoost (1).json';
import '../css/AdminHome.css';
import { Link } from 'react-router-dom';
const Bdetails = () => {

    var count = Object.keys(Post).length;
    console.log(count)
    return (


        <div><Header /><div className="bdetails">
            <div><Sidebar /></div><div><table id="tab2" class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Aadhar ID</th>
                        <th scope="col">Age</th>
                        <th scope="col">Rationcard Category</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Monthly Income</th>
                        <th scope="col">Highest education Qualification</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Post.map((val, j) => {
                            for (var i = 0; i < count; i++) {
                                if (val.RationcardCategory === 1) {
                                    val.RationcardCategory = "APL";
                                }
                                else if (val.RationcardCategory === 0) {
                                    val.RationcardCategory = "BPL";
                                }
                                if (val.Gender === 1) {
                                    val.Gender = "Male";
                                }
                                else if (val.Gender === 0) {
                                    val.Gender = "Female";
                                }
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{val.AadharID}</td>
                                        <td>{val.Age}</td>
                                        <td>{val.RationcardCategory}</td>
                                        <td>{val.Gender}</td>
                                        <td>{val.MonthlyIncomeofFamily}</td>
                                        <td>{val.Educationlevel}</td>
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
export default Bdetails;