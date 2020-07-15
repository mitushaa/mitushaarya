import React, { Component} from 'react';
import '../styles/achievements.scss';
import me from '../images/me-code-4.png';
import Fade from 'react-reveal/Fade';

class Achievements extends Component {
    render() {
    return(

        <div id="achievements-page">
            <div className="contain1">
            <Fade bottom>
                <h3 className="heading"> <a className="number-about" href=" ">02. </a>Achievements </h3>
                <h4 className="achievements-bold"> Hello! I am Mitusha Arya. </h4>
                <h4 className="achievements-bold"> I am a developer leaning towards front end web development and design..</h4>
                <h4 className="achievements"> I am currently a 3rd year Undergraduate (2018-22) at <a className="bold-blue" href=" ">Indian Institute of Information Technology, Vadodara </a>pursuing B. Tech. in Information Technology.
                I enjoy designing responsive websites using multiple frameworks and tools provided by <a className="bold-yellow" href=" "> JS. </a></h4>

                <h4 className="achievements"> My goal is to build <a className="bold-blue" href=" ">pixel-perfect components</a> and practical projects which provide a rich user experience with <a className="bold-white" href=" ">real world application.</a> </h4>

                <h4 className="achievements">  <a className="bold-white" href=" "> When not in front of a computer,</a> you will probably find me playing my
                     🎸, relishing
                    🎵🎧, watching ⚽, blogging👨‍💻 or enjoying
                    <a className="bold-green" href=" "> </a> 🎮 sessions  with my friends.</h4>
            </Fade>
            </div>

            <Fade bottom>
            <img className="me" src = {me} alt="Eshaan"/>
            </Fade>
        </div>

    );
    }
}

export default Achievements;
