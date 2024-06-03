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
                    <p>I am a dedicated and ambitious computer science student with a strong foundation in web development and programming. Recently, I participated in the prestigious <strong>ICPC Dhaka Regional Contest 2023</strong> and <strong>CUET Code Storm 1.0</strong>, showcasing my competitive programming skills. <br /><br /> I have a robust skill set in web development, having learned <strong>HTML, CSS, JavaScript, responsive website design, Bootstrap, and a bit of jQuery. I am proficient in JavaScript DOM manipulation and React JS</strong>, which I mastered through courses on FreeCodeCamp and other platforms. I hold certifications in Responsive Web Design from <strong>FreeCodeCamp</strong> and Basic Fundamentals of the Internet from <strong>Codedamn</strong>.<br /><br /> Previously, I worked as an <strong>Assistant Senior Executive</strong> for <strong>Admission Assistant</strong>, where I gained valuable professional experience over the course of a year. This role honed my <strong>organizational and communication skills</strong>, which are crucial for any web development position. <br /><br /> As a passionate programmer, I am always eager to learn new skills and stay updated with the latest trends in the IT sector. I am actively seeking an internship or entry-level web developer position where I can contribute my skills and continue to grow professionally.</p>
                    <p id="sec-p">Finally, some quick bits about me.</p>
                    <ul>
                        <li>Doing B.Sc. in Computer Science</li>
                        <li>Avid learner</li>
                        <li>Like to learn new web technologies</li>
                        <li>Love programming</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default About;