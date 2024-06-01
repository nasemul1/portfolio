import './About.css';
import image from '../assets/cuet-pic.jpeg';

const About = () => {
    return (
        <div id="about">
            <div id="ab-head">About Me</div>
            <div id="about-inner">
                <img src={image} className="floating" alt="Nasimul's photo"/>
                <div id="ab-inner-text">
                    <h2>Curious about me? Here you have it:</h2>
                </div>
            </div>
        </div>
    );
}
 
export default About;