import { Link } from 'react-router-dom';
import '/src/css/general.css';
import '/src/css/mainPage/index.css';

function SectionMeetings() {
    const content =
        <section className="section-meetings">
            <div className="container">
                <h1 className="heading-primary">Meetings</h1>
                <p className="heading-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                    quisquam aliquam, dolorem voluptates obcaecati pariatur.
                </p>
            </div>
            <div className="container grid grid--4-cols">
                <div className="meeting-card">
                    <img className="meeting-img"
                        src="src/img/urban farming.jpg"
                        alt="A woman is watering a rooftop garden" />
                    <div className="meeting-content">
                        <p className="meeting-subtitle">topic</p>
                        <p className="meeting-title">Urban Farming</p>
                        <p className="meeting-date">October 16, 2023</p>
                        <Link className="meeting-link" to="#">continue reading &rarr;</Link>
                    </div>
                </div>
                <div className="meeting-card">
                    <img className="meeting-img"
                        src="src/img/sustainable Design.jpg"
                        alt="sustainable Design" />
                    <div className="meeting-content">
                        <p className="meeting-subtitle">topic</p>
                        <p className="meeting-title">Sustainable Design</p>
                        <p className="meeting-date">September 18, 2023</p>
                        <Link className="meeting-link" to="#">continue reading &rarr;</Link>
                    </div>
                </div>
                <div className="meeting-card">
                    <img className="meeting-img"
                        src="src/img/weeds.jpg"
                        alt="A woman is watering a rooftop garden" />
                    <div className="meeting-content">
                        <p className="meeting-subtitle">topic</p>
                        <p className="meeting-title">All About Weeds</p>
                        <p className="meeting-date">Jun 19, 2023</p>
                        <Link className="meeting-link" to="#">continue reading &rarr;</Link>
                    </div>
                </div>
                <div className="meeting-card">
                    <img className="meeting-img"
                        src="src/img/orchid.jpg"
                        alt="A woman is watering a rooftop garden" />
                    <div className="meeting-content">
                        <p className="meeting-subtitle">topic</p>
                        <p className="meeting-title">
                            Grocery Store Orchid Rescues: Repotting Demonstration
                        </p>
                        <p className="meeting-date">Mat 15, 2023</p>
                        <Link className="meeting-link" to="#">continue reading &rarr;</Link>
                    </div>
                </div>
            </div>
        </section>
    return content;
}

export default SectionMeetings;