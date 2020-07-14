import React, { Component} from 'react';
import '../styles/contact.scss';
import Fade from 'react-reveal/Fade';
import github from '../images/github-logo.png';
import gmail from '../images/gmail.png';
import linkedin from '../images/linkedin.png';
import medium from '../images/medium.png';
import twitter from '../images/twitter.png';
import quora from '../images/quora.png';


class Contact extends Component {
    render() {
    return(
        <Fade bottom>
            <div id="Contact-section">
                <h2 className="cent-line"> You can contact me here : </h2>
                <div className="logos">
                    <a href="https://github.com/mitushaa/" target="_blank" rel="noopener noreferrer"><img className="logoc" src={github} alt="github"></img></a>
                    <a href="mailto:aryamitusha@gmail.com" target="_blank" rel="noopener noreferrer"><img className="logoc" src={gmail} alt="gmail"></img></a>
                    <a href="https://linkedin.com/in/mitushaarya/" target="_blank" rel="noopener noreferrer"><img className="logoc" src={linkedin} alt="linkedin"></img></a>
                    <a href="https://medium.com/@mitushaarya/" target="_blank" rel="noopener noreferrer"><img className="logoc" src={medium} alt="medium"></img></a>
                    <a href="https://twitter.com/mitushaarya" target="_blank" rel="noopener noreferrer"><img className="logoc" src={twitter} alt="twitter"></img></a>
                    <a href="https://www.quora.com/profile/Mitusha-Arya-1" target="_blank" rel="noopener noreferrer"><img className="logoc" src={quora} alt="quora"></img></a>

               </div>
            </div>
        </Fade>
    );
    }
}

export default Contact;
