import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/img/eastyorkgardenclublogo.gif";
import Sections from "./mainPage/Sections";
import JoinUs from "./JoinUs";
import Meetings from "./Meetings";
import NewsLetters from "./NewsLetters";
import About from "./About";
import "./css/general.css";
import "./css/mainPage/index.css";
import { LogoFacebook } from 'react-ionicons'
import MeetingsDetail from "./MeetingsDetail"
import FlowerShows from "./FlowerShows";

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState('');
    const [meetingId, setMeetingId] = useState('');

  const handlePageChange = (newPage, meetingId=null) => {
      setCurrentPage(newPage);
      setMeetingId(meetingId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Sections onPageChange={handlePageChange} />;
      case "about":
        return <About onPageChange={handlePageChange} />;
      case "meetings":
        return <Meetings onPageChange={handlePageChange} />;
      case "news":
        return <NewsLetters onPageChange={handlePageChange} />;
      case "shows":
        return <FlowerShows onPageChange={handlePageChange} />
      case "joinus":
        return <JoinUs onPageChange={handlePageChange} />;
      case "meetingDetail":
        return <MeetingsDetail onPageChange={handlePageChange} meetingID={meetingId} />;
      default:
        return <Sections onPageChange={handlePageChange} />;
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

export default MainPage;
