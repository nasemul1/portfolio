import './Contact.css';
import React, { useState } from 'react';

const Contact = () => {
    const [text, setText] = useState('+8801688539299');

    const copyToClipboard = async () => {
        try {
        await navigator.clipboard.writeText(text);
        } catch (err) {}
    };

    return (
        <div id="contact">
            <div id="skill-head">Contacts</div>
            <p>What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            <form action="mailto:nasemul.me@gmail.com" method="post">
                <div>
                    <p id="form-email"><i class="fa-solid fa-envelope"></i> nasemul.me@gmail.com</p>
                    <button type="submit" id="send-btn">Send</button>
                </div>
                <div>
                    <p id='phn'><i class="fa-solid fa-phone"></i> +8801688539299</p>
                    <div id='copy-btn' onClick={copyToClipboard}><p>Copy</p></div>
                </div>
            </form>
            <div id="connect">
                <p>You may also find me on these platform:</p>
                <div>
                    <a href="https://www.linkedin.com/in/nasemul1/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/nasemul1"><i class="fa-brands fa-github"></i></a>
                    <a href="https://codepen.io/nasemul1"><i class="fa-brands fa-codepen"></i></a>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;