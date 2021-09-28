import React from 'react'
import Header from '../components/Header';
import '../css/About.css';
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/5.png';
import img3 from '../assets/images/6.png';
import Footer from '../components/Footer';
const images = [img1, img2, img3]
const About = () => {
    return (
        <div>
            <Header />
            <div className="about">

                <br /><br />
                <div className="imgcontainer">
                    <div>
                        <img src={img3} alt="abtimg" className="imagesabout1" /></div>
                    <div>
                        <img src={img1} alt="abtimg" className="imagesabout" />
                        <img src={img2} alt="abtimg" className="imagesabout" /></div>
                </div>
                <h1>Our Vision</h1>
                Building a world where all communities have full access to good quality education and health, by providing them the financial help they need with the contribution of public-spirited civilians.
                <br /><br />  <h1>Our Mission</h1>
                To work with communities to increase income, improve education, care for their health, and ultimately increasing harmony in this world.
            </div>
            <Footer />
        </div>
    )
}
export default About;