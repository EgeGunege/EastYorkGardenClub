import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "/src/css/general.css";
import "/src/css/mainPage/index.css";
import "/src/css/mainPage/MainQueries.css";

class SectionHero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props;
    return (
      <section className="section-hero">
        <div className="hero">
          <div className="hero-img"></div>
          <div className="hero-container">
            <div className="hero-content-box">
              <div className="hero-content">
                <h1 className="heading-primary hero-heading">
                  <span>
                    Hello! Welcome to <br /> the
                  </span>{" "}
                  East York <br />
                  Garden Club
                </h1>
                <p className="hero-description">
                  {"Let's make it green together. Let's be happy together."}{" "}
                  <br />
                  {"Let's make it green together."}
                </p>
                <Link
                  className="learn-more-link"
                  onClick={() => navigate("about")}
                >
                  Learn more &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

SectionHero.propTypes = {
  navigate: PropTypes.func,
};

export default SectionHero;
