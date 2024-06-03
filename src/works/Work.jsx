import './Work.css';
import land from '../assets/works/team-flow.png';
import blog from '../assets/works/nasemul-blog.png';
import anim from '../assets/works/3d-animated-page.png';

const Work = () => {
    return (
        <div id="work-sec">
            <div id="skill-head">Works</div>
            <p>Some of the noteworthy projects that I built: </p>
            <div id="works-container">
                <div className="work">
                    <div className="work-img">
                        <img src={land} alt="team flow landing page" />
                    </div>
                    <div className="work-descrip">
                        <h2>Team.flow page</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt distinctio cumque esse. Impedit maxime facere excepturi laudantium mollitia nemo.</p>
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
                        <img src={blog} alt="blog page" />
                    </div>
                    <div className="work-descrip">
                        <h2>Blog page</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt distinctio cumque esse. Impedit maxime facere excepturi laudantium mollitia nemo.</p>
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
                        <img src={anim} alt="Animated page" />
                    </div>
                    <div className="work-descrip">
                        <h2>Animated page</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt distinctio cumque esse. Impedit maxime facere excepturi laudantium mollitia nemo.</p>
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
            </div>
        </div>
    );
}
 
export default Work;