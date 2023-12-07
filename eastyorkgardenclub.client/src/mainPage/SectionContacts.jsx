import '/src/css/general.css';
import '/src/css/mainPage/index.css';
import { MailOutline, LocationOutline } from 'react-ionicons';

function SectionContacts() {
    const content =
        <section className="section-contacts">
            <div className="container">
                <h1 className="heading-primary">Contact Us</h1>
            </div>
            <div className="container grid grid--2-cols">
                <div className="contact-info-box">
                    <h2 className="contact-subtitle">Contact info</h2>
                    <div className="addres-wrap">
                        <LocationOutline
                            color={'#454545'}
                            title={'' }
                            height="2.4rem"
                            width="2.4rem"
                        />
                        <div>
                            <p>Stan Wadlow Clubhouse, 373 Cedarvale Ave,</p>
                            <p>East York, ON M4C 4K7</p>
                        </div>
                    </div>
                    <div className="email-wrap">
                        <MailOutline className="contact-icon"
                            color={'#454545'}
                            title={''}
                            height="2.4rem"
                            width="2.4rem"></MailOutline>
                        <p>gardenclub@eygc.ca</p>
                    </div>
                    <iframe className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5961340180147!2d-79.31768422343836!3d43.69815897110008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc47b10961d3%3A0x755f47f699d1f98e!2sStan%20Wadlow%20Clubhouse!5e0!3m2!1sen!2sca!4v1701052904461!5m2!1sen!2sca"
                        width="100%"
                        height="450"
                        style={{ border: '0'}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="send-message-box">
                    <h2 className="send-message-subtitle">Send a message</h2>
                    <form action="send-message-form">
                        <div>
                            <label className="name-label" htmlFor="full-name">Name</label>
                            <input className="name-input"
                                type="text"
                                id="full-name"
                                placeholder="John Smith"
                                name="name"
                                required />
                        </div>
                        <div>
                            <label className="email-label" htmlFor="email">Email</label>
                            <input className="email-input"
                                type="text"
                                id="email"
                                placeholder="me@example.com"
                                name="email"
                                required />
                        </div>

                        <div className="form-group">
                            <label className="message-label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="message-input"
                                placeholder="Your message here"
                            />
                            <div className="submit-btn-box">
                                <button className="submit-btn">Submit</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </section>
    return content;
}

export default SectionContacts;