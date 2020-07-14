import React, { Component} from 'react';
import '../styles/navbar.scss';
import Resume from '../images/Eshaan_Khurana_Resume.pdf';
import Fade from 'react-reveal/Fade';
import Logowhite from '../images/logo-white-min.png';
import Logolightblue from '../images/logo-lightblue-min.png';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
           imgSrc: Logolightblue
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
      }

      handleMouseOver() {
        this.setState({
          imgSrc: Logowhite
        });
      }

      handleMouseOut() {
        this.setState({
          imgSrc: Logolightblue
        });
      }

    render() {
    return(
        <div>
            <header className="header">
                <Fade left>

                <a href="#top" className="logo">
                <div>
                  <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} alt="logo"/>
                </div> </a>

                </Fade>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                <Fade right>
                    <li> <a className="ind" href="#about-page">About Me</a> </li>
                    <li> <a className="ind" href="#skill-top">Achievements</a> </li>
                    <li> <a className="ind" href="#cert-page">Blogs</a> </li>
                    <li> <a className="ind" href="#Contact-section">Skill Sets</a> </li>
                    <li> <a className="ind" href="#Contact-section">Certificate</a> </li>
                    <li> <a className="ind" href="#Contact-section"> Contact Me</a> </li>

                </Fade>
                </ul>
            </header>
        </div>
    );
    }
}

export default Navbar
