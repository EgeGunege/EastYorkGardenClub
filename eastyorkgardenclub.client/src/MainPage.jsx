import { Routes, Route } from 'react-router-dom';
import Logo from '/src/img/eastyorkgardenclublogo.gif';
import Sections from './mainPage/Sections'
import { Link } from 'react-router-dom';
import './css/general.css';
import './css/mainPage/index.css';

const links = [
    { text: "Home", id: "homeButton", path: "/" },
    { text: "About", id: "aboutButton", path: "/about" },
    { text: "Meetings", id: "meetingsButton", path: "/meetings" },
    { text: "News Letters", id: "newsButton", path: "/news" },
    { text: "Flower Shows", id: "showsButton", path: "/shows" }
];

function Header() {
    
    return (
        <header>
            <Link to="/home">
                <img src={Logo} alt="East York Garden Club Logo" className="login-logo" />
            </Link>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    {links.map((headerItem) => (
                        <li key={headerItem.id}>
                            <Link className="main-nav-link"
                                to={headerItem.path}>
                                {headerItem.text}
                            </Link>
                        </li>
                    ))}
                    <li> <Link className="main-nav-link nav-cta" to="/">Join us</Link> </li>
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
                    Copyright &copy; <span className="year">{currentYear}</span> by Yesong Joo & Ege
                    Gunege. All rights reserved.
                </p>
            </div>
            <div className="social-nav">
                <Link className="face-book"
                    to="https://www.facebook.com/groups/EastYorkGC"
                    target="_blank">
                    <ion-icon className="face-book-icon" name="logo-facebook"></ion-icon>
                </Link>

                <nav className="footer-nav">
                    <ul className="footer-nav-list">
                        {links.map((headerItem) => (
                            <li key={headerItem.id}>
                                <Link className="footer-nav-link"
                                    to={headerItem.path}>
                                    {headerItem.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

const MainPage = () => {
    return (
        <div>
            <Header />
            <main className="main-page">
                <Routes>
                    <Route index element={<Sections />} />
                    <Route path="/about" element={<Sections />} />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};

export default MainPage;
