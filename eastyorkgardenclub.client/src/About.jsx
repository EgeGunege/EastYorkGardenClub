import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import aboutImg from "./img/gardening-about.png";
import "./css/About.css";
import "./css/AboutQueries.css";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onPageChange } = this.props;

    return (
      <section className="section-about">
        <div className="container">
          <nav className="breadcrumb">
            <ul>
              <li>
                <Link
                  className="breadcrumb-link"
                  onClick={() => onPageChange("home")}
                >
                  Home
                </Link>
              </li>
              <li className="breadcrumb-link active">About</li>
            </ul>
          </nav>
          <h1 className="heading-about">About</h1>
          <div className="grid grid--2-cols">
            <div className="about-text-box">
              <div className="about-description">
                <p>
                  We are a non-profit organization and proud member of the
                  National Garden Clubs, Inc., New England Region and Garden
                  Club Federation of Massachusetts, Inc., South Shore District.
                  CLUB WAS organized in 1993 and federated in 1994.
                </p>
                <p>
                  OUR MISSION IS to stimulate the knowledge and love of
                  gardening among amateurs, to contribute to civic improvement
                  and to enhance the beauty of Mansfield, MA.
                </p>
                <p>
                  WE MEET on the second Thursday of each month at 7:00 pm at The
                  Congregational Church of Mansfield, 17 West Street, Mansfield,
                  MA.
                </p>
                <p>
                  MEMBERSHIP is open to anyone, of at least 21 years of age, who
                  loves to garden. For more information use our Membership page.
                </p>
              </div>

              <Link
                className="joinus-btn-about"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange("joinus");
                }}
              >
                Join us
              </Link>
            </div>
            <div className="about-img-box">
              <picture>
                <img src={aboutImg} alt="Gardening" className="about-img" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

About.propTypes = {
  onPageChange: PropTypes.func,
};
