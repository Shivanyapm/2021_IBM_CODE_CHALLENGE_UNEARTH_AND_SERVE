import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Help1 from "../assets/images/3.png";
import Help from "../assets/images/1.jpg";
import Help3 from "../assets/images/1.jpeg";
import Help2 from "../assets/images/2.jpg";
import Help4 from "../assets/images/5.jpg";
import '../css/Dashboard.css';
import Footer from '../components/Footer';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                Help, Help1, Help2, Help3, Help4
            ]
        };
    }

    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
                currentImage: 0
            });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 5000);
    }

    render() {
        return (
            <div className="DashContainer">
                <div>
                    <Header />
                    <div className="slideshowcontainer">

                        < div className="textcontainer">
                            <div className="texthelp">"No act of kindness, no matter how small,<br /> is ever wasted"<br />
                            </div>
                            <Link to='/Signup' className="loginLink1"><button type="button" className="btn btn-secondary">Get Started!</button></Link>
                        </div>
                        <div className="verticalLine">

                        </div>
                        <div >

                            <img
                                src={this.state.images[this.state.currentImage]}
                                alt="cleaning images" className="helpimg"
                            />
                        </div>
                    </div ></div >
                <Footer /></div>
        );
    }
}

export default Dashboard;