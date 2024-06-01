import './First.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import image from '../assets/profile-pic(2).png';

const First = () => {
    const [text] = useTypewriter({
        words: ['Web developer'],
        loop: 0
    })
    return (
        <>
            <div className="main-area">
                <div className="main-text">
                    <p className="hi-text">Hi, I am</p>
                    <h2 id="name">Md Nasemul Islam</h2>
                    <h3>I am a <span>{ text }</span>
                        <Cursor cursorColor='#8CC152' />
                    </h3>
                    <p className="bio">Highly motivated aspiring front-end developer with a strong grasp of HTML, CSS, and JavaScript seeks an entry-level position to leverage skills and contribute to a dynamic team.</p>
                    <div className="hireMe-div">
                        <div className="hireMe-box">
                            <a href="#contact">Hire Me</a>
                        </div>
                    </div>
                </div>
                <div className="main-image floating">
                    <div className="img-back-box"></div>
                    <div className="img-box">
                        <img src={ image } alt="my image" id='front-img'/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default First;