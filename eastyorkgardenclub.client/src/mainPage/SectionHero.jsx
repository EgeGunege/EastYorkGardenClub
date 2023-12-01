import { Link } from 'react-router-dom';
import '/src/css/general.css';
import '/src/css/mainPage/index.css';

function SectionHero() {
    const heading = "Hello! Welcome to the East York Gardening Club";
    const descriptionOne = "Let’s make it green together. Let’s be happy together."
    const descriptionTwo = "Let’s make it green together."
    const content =
        <section className="section-hero">
            <div className="hero">
                <div className="hero-img-box">
                    <img className="hero-img"
                        src="src/img/gardening-main.jpg"
                        alt="people are gardening together" />
                </div>
                <div className="hero-text-box">
                    <h1 className="heading-primary hero-heading">
                        {heading}
                    </h1>
                    <p className="hero-description">
                        {descriptionOne} <br />
                        {descriptionTwo}
                    </p>
                    <Link className="Learn-more-link" to="#">Learn more &gt;</Link>
                </div>
            </div>
        </section>
    return content;
}

export default SectionHero;