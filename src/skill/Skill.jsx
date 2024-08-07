import './Skill.css';
import html from '../assets/logos/html-5.webp';
import css from '../assets/logos/css-3.webp';
import javascript from '../assets/logos/js.webp';
import c from '../assets/logos/c.webp';
import cpp from '../assets/logos/c++.webp';
import bootstrap from '../assets/logos/bootstrap.webp';
import figma from '../assets/logos/Figma.webp';
import react from '../assets/logos/react.webp';
import next from '../assets/logos/next.webp';
import git from '../assets/logos/git.webp';
import github from '../assets/logos/github.webp';
import tailwind from '../assets/logos/TailwindCSS.webp';

const Skill = () => {
    return (
        <div id="skill">
            <div id="skill-head">Skills</div>
            <p>The skill, tools and technologies I am good at:</p>
            <div id="logos">
                <img src={html} alt="html logo" />
                <img src={css} alt="css logo" />
                <img src={bootstrap} alt="bootstrap logo"/>
                <img src={javascript} alt="javascript logo" />
                <img src={react} alt="react js logo" />
                <img src={next} alt="next js logo" />
                <img src={tailwind} alt="tailwind css logo" />
                <img src={figma} alt="figma logo" />
                <img src={git} alt="git logo" />
                <img src={github} alt="github logo" />
                <img src={c} alt="c logo" />
                <img src={cpp} alt="cpp logo" />
            </div>
        </div>
    );
}
 
export default Skill;