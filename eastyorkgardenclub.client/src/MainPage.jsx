import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "/src/img/eastyorkgardenclublogo.gif";
import Sections from "./mainPage/Sections";
import JoinUs from "./JoinUs";
import Meetings from "./Meetings";
import NewsLetters from "./NewsLetters";
import About from "./About";
import "./css/general.css";
import "./css/mainPage/index.css";
import { LogoFacebook } from 'react-ionicons'
import { useEffect } from "react";
import MeetingsDetail from "./MeetingsDetail";

const MainPage = ({ sectionName = null }) => {
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => {
    sectionName ? setCurrentPage(sectionName) : null;
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Sections />;
      case "about":
        return <About />;
      case "meetings":
        return <Meetings />;
      case "news":
        return <NewsLetters />;
      case "shows":
        return <MeetingsDetail />;
      case "joinus":
        return <JoinUs />;
      default:
        return <Sections />;
    }
  };

  const links = [
    { label: "Home", id: "homeButton", to: "home" },
    { label: "About", id: "aboutButton", to: "about" },
    { label: "Meetings", id: "meetingsButton", to: "meetings" },
    { label: "News Letters", id: "newsButton", to: "news" },
    { label: "Flower Shows", id: "showsButton", to: "shows" },
  ];

  function Header() {
    return (
      <header>
        <Link onClick={() => setCurrentPage("home")}>
          <img src={Logo} alt="East York Garden Club Logo" className="logo" />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav-list">
            {links.map((headerItem) => (
              <li key={headerItem.id}>
                <Link
                  className="main-nav-link"
                  id={headerItem.to + "Link"}
                  onClick={() => setCurrentPage(headerItem.to)}
                >
                  {headerItem.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="main-nav-link nav-cta"
                onClick={() => setCurrentPage("joinus")}
              >
                Join us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <div>
          <p className="copyright">
            Copyright &copy; <span className="year">{currentYear}</span> by
            Yesong Joo & Ege Gunege. All rights reserved.
          </p>
        </div>
        <div className="social-nav">
          <Link
            className="face-book"
            to="https://www.facebook.com/groups/EastYorkGC"
            target="_blank"
          >
            <LogoFacebook
                color={'#505050'}
                title={''}
                height="2.4rem"
                width="2.4rem"
            />
          </Link>
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              {links.map((headerItem) => (
                <li key={headerItem.id}>
                  <Link
                    className="footer-nav-link"
                    id={headerItem.to + "Link"}
                    onClick={() => setCurrentPage(headerItem.to)}
                  >
                    {headerItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <div>
      <Header />
      <main className="main-page">{renderPage()}</main>
      <Footer />
    </div>
  );
};

MainPage.propTypes = {
  sectionName: PropTypes.string,
};

export default MainPage;
