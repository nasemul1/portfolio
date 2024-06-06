import './Certificate.css';
import responsive from '../assets/certificate/freecodecamp.png';
import internet from '../assets/certificate/internet.jpg';
import icpc from '../assets/certificate/icpc.png';

const Certificate = () => {
    return (
        <div id="certificate">
            <div id="skill-head">Certificates</div>
            <p>Here are some certificates I gained through many courses:</p>
            <div id="certificate-container">
                <div className="certi">
                    <div className="certi-img">
                        <img src={responsive} alt="freecodecamp certificate" />
                    </div>
                    <div className="certi-descrip">
                        <h2>Freecodecamp responsive webdesign certificate</h2>
                        <p>In this Responsive Web Design Certification, I learned the languages that developers use to build webpages: HTML for content, and CSS for design. Builds lots of basic projects which helped me to learn a lot about responsive design</p>
                        <div className='certi-tag'>
                            <span>HTML</span><span>CSS</span><span>Responsiveness</span>
                        </div>
                        <div className="certi-btn">
                            <div className="certi-btn-box">
                                <a href="https://www.freecodecamp.org/certification/nasemul1/responsive-web-design" target='_blank'>Verify</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="certi even">
                    <div className="certi-img">
                        <img src={internet} alt="internet fundamentals certificate" />
                    </div>
                    <div className="certi-descrip">
                        <h2>Basics of web certificate</h2>
                        <p>This course is designed to equip aspiring backend developers with essential web knowledge, focusing on practical and foundational aspects of web functionality. It avoids complex hardware details and the OSI model to directly address what's crucial for your development career.</p>
                        <div className='certi-tag'>
                            <span>Domain</span><span>DNS</span><span>HTTP</span>
                        </div>
                        <div className="certi-btn">
                            <div className="certi-btn-box">
                                <a href="https://codedamn.com/certificate/verify/55e316636eebc9260be3bc1083c188b72b720a48" target='_blank'>Verify</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="certi">
                    <div className="certi-img">
                        <img src={icpc} alt="freecodecamp certificate" />
                    </div>
                    <div className="certi-descrip">
                        <h2>ICPC Regional - 2023 participation certificate</h2>
                        <p>Certificate for perticipating on ICPC (International Collegiate Programming Contest) 2023. Gained lots of experience on programming, teamwork, time management and lot more.</p>
                        <div className='certi-tag'>
                            <span>C++</span><span>DSA</span>
                        </div>
                        <div className="certi-btn">
                            <div className="certi-btn-box">
                                <a href="https://drive.google.com/file/d/1_S6VawreEmPh6gRxO6N5T4iCCm9w186K/view" target='_blank'>View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Certificate;