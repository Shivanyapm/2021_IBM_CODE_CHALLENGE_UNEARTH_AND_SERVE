import React from 'react'
import Header from '../components/Header1';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import '../css/AdminHome.css';
const Admin = () => {
    return (
        <div><Header /><div className="AdminContainer"><div><Sidebar /></div><div>
            <table id="table12" className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Rural Area</th>
                        <th scope="col">Education</th>
                        <th scope="col">Health</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rural area #1</td>
                        <td>
                            <Link to='/bdetails'>
                                <button type="button" class="btn btn-warning">Education Details</button></Link></td>
                        <td><Link to='/Health'>
                            <button type="button" class="btn btn-primary">Health Details</button></Link></td>
                    </tr>

                </tbody>
            </table>
        </div></div></div>
    )
}
export default Admin;