import React from 'react'
import Header from '../components/Header1';
import Sidebar from '../components/Sidebar1';
import { Link } from 'react-router-dom';
import '../css/SponsorHome.css';
const Sponsor = () => {
    return (
        <div className="Sponsor"><Header /><div className="Sponsorcontainer"><div></div>
            <div>
                <table id="table1" className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Rural Area</th>
                            <th scope="col">Educational expenses</th>
                            <th scope="col">Health expenses</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Rural area #1</td>
                            <td>
                                455000</td>
                            <td>
                                654000</td>
                        </tr>

                    </tbody>
                </table>
                <Link to='/Payment'>
                    <button type="button" id="donate" class="btn btn-primary">Donate now!</button></Link >
            </div></div></div>
    )
}
export default Sponsor;