import "./css/about.css";
import { Link } from "react-router-dom";
import aboutImg from "./img/gardening-about.png";
import setCurrentPage from "./MainPage.jsx";
import MainPage from "./MainPage.jsx";

const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <nav className="breadcrumb">
          <ul>
            <li>
              <a className="breadcrumb-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="breadcrumb-link" href="#">
                About
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="heading-about">About</h1>
        <div className="grid grid--2-cols">
          <div className="about-text-box">
            <div className="about-description">
              <div>
                We are a non-profit organization and proud member of the Nationa
                lGarden Clubs,Inc., New England Region and Garden Club
                Federationof Massachusetts, Inc., South Shore District. CLUB WAS
                organizedin 1993 and federated in 1994.
              </div>

              <div>
                OUR MISSION IS to stimulate the knowledge and love of gardening
                among amateurs, to contribute to civic improvement and to
                enhance the beauty of Mansfield, MA.
              </div>
              <div>
                WE MEET on the second Thursday of each month at 7:00 pm at The
                Congregational Church of Mansfield, 17 West Street, Mansfield,
                MA.
              </div>
              <div>
                MEMBERSHIP is open to anyone, of at least 21 years of age, who
                loves to garden. For more information use our Membership page.
              </div>
            </div>

            <Link
              className="joinus-btn-about"
              onClick={<MainPage sectionName={"joinus"} />}
            >
              Join us
            </Link>
          </div>
          <div className="about-img-box">
            <picture>
              {/* <source /> */}
              <img src={aboutImg} alt="gardening image" className="about-img" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
