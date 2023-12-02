import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionMeetings() {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        async function fetchMeetings() {
            try {
                const response = await fetch('https://localhost:44345/api/Meetings');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMeetings(data);
            } catch (error) {
                console.error("Fetch error: " + error.message);
            }
        }

        fetchMeetings();
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="section-meetings">
            <div className="container">
                <h1 className="heading-primary">Meetings</h1>
                <p className="heading-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                    quisquam aliquam, dolorem voluptates obcaecati pariatur.
                </p>
                <Slider {...settings}>
                    {meetings.map((meeting) => (
                        <div key={meeting.id} className="meeting-slide">
                            <div className="meeting-card">
                                <img className="meeting-img"
                                    src={`data:${meeting.imageContentType};base64,${meeting.imageData}`} 
                                    alt={meeting.title} />
                                <div className="meeting-content">
                                    <p className="meeting-subtitle">Topic</p>
                                    <p className="meeting-title">{meeting.title}</p>
                                    <p className="meeting-speaker">{meeting.speaker}</p>
                                    <p className="meeting-date">
                                        {new Date(meeting.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                    <Link className="meeting-link" to={meeting.readMoreLink}>Continue reading &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default SectionMeetings;
