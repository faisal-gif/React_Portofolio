import '../css/contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const ref = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1o2lu9r', 'template_d8co08h', ref.current, 'Xt--RG7K63rN1oiF8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc"></span>
            <form className="contactForm" ref={ref} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="name" placeholder='Your Name'  />
                <input type="email" name="from_email" className="email" placeholder='Your Email' />
                <textarea name="message" rows="5" className="message" placeholder='Your Message'></textarea>
                <button type="submit" className="submitBtn">Submit</button>
                <div className="links">
                    <img src="/icon/facebook-icon.png" className="link" />
                    <img src="/icon/instagram.png" className="link" />
                    <img src="/icon/github.png" className="link" />
                    <img src="/icon/twitter.png" className="link" />
                    <img src="/icon/whatsapp.png" className="link" />
                </div>
            </form>
        </section>
    )
}

export default Contact