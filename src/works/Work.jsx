import './Work.css';
import land from '../assets/works/team-flow.png';
import blog from '../assets/works/nasemul-blog.png';
import anim from '../assets/works/3d-animated-page.png';
import toDo from '../assets/works/to-do.png';
import { useState } from 'react';

const Work = () => {
    const [seeMore, setSeeMore] = useState(true);

    function handleClick(){
        setSeeMore(!seeMore);
    }
    return (
        <div id="work-sec">
            <div id="skill-head">Works</div>
            <p>Some of the noteworthy projects that I built: </p>
            <div id="works-container">
                <div className="work">
                    <div className="work-img">
                        <img src={land} alt="team flow landing page" loading='lazy'/>
                    </div>
                    <div className="work-descrip">
                        <h2>Team.flow page</h2>
                        <p>Took a template from figma and tried to implement the design using next js and css. It is a responsive design which support all types device width.</p>
                        <div className='work-tag'>
                            <span>Next JS</span><span>CSS</span><span>Javascript</span><span>Responsive site</span>
                        </div>
                        <div className="work-btn">
                            <div className="work-btn-box">
                                <a href="https://team-flow-six.vercel.app/" target='_blank'>Visit</a>
                            </div>
                        </div>
                        <div className="work-btn">
                            <div className="work-btn-box">
                                <a href="https://github.com/nasemul1/team.flow" target='_blank'>code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work even">
                    <div className="work-img">
                        <img src={blog} alt="blog page" loading='lazy'/>
                    </div>
                    <div className="work-descrip">
                        <h2>Blog page</h2>
                        <p>It is a blog website. Built using react js, Javascript, css and json server. Build a simple json server to store blog which is hosted on render. Reac JS is used to design the website and fetch data from server. React Router is used to navigate from on page to another.</p>
                        <div className='work-tag'>
                            <span>React JS</span><span>JSON Server</span><span>API</span><span>CSS</span><span>Javascript</span><span>Responsive site</span>
                        </div>
                        <div className="work-btn">
                            <div className="work-btn-box">
                                <a href="https://nasemul1.github.io/nasemul-blog/" target='_blank'>Visit</a>
                            </div>
                        </div>
                        <div className="work-btn">
                            <div className="work-btn-box">
                                <a href="https://github.com/nasemul1/nasemul-blog" target='_blank'>code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="work-img">
                        <img src={anim} alt="Animated page" loading='lazy'/>
                    </div>
                    <div className="work-descrip">
                        <h2>Animated page</h2>
                        <p>It is a 3d animated website built using html, css, Javascript and GSAP. Lots of images are combined together to created animation effects.</p>
                        <div className='work-tag'>
                            <span>HTML</span><span>CSS</span><span>Javascript</span><span>GSAP</span>
                        </div>
                        <div className="work-btn">
                            <div className="work-btn-box">
                                <a href="https://nasemul1.github.io/3d-animated-page/" target='_blank'>Visit</a>
                            </div>
                        </div>
                        <div className="work-btn">
                            <div className="work-btn-box">
                                <a href="https://github.com/nasemul1/3d-animated-page" target='_blank'>code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`work ${seeMore}`}>
                    <div className="work-img">
                        <img src={toDo} alt="To do app" loading='lazy'/>
                    </div>
                    <div className="work-descrip">
                        <h2>To-do App</h2>
                        <p>It is a to-do app built using html, css, Javascript. It stores data in browser local storage which give ability retain all the data if page refreshed or reopened.</p>
                        <div className='work-tag'>
                            <span>HTML</span><span>CSS</span><span>Javascript</span>
                        </div>
                        <div className="work-btn">
                            <div className="work-btn-box">
                                <a href="https://nasemul1.github.io/to-do-list/" target='_blank'>Visit</a>
                            </div>
                        </div>
                        <div className="work-btn">
                            <div className="work-btn-box">
                                <a href="https://github.com/nasemul1/to-do-list" target='_blank'>code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button id='seeMore' onClick={() => handleClick()}>See <span class={`${!seeMore}`}>More</span><span class={`${seeMore}`}>Less</span></button>
            </div>
        </div>
    );
}
 
export default Work;