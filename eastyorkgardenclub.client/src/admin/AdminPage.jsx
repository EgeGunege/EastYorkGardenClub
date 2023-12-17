import { useState } from 'react';
import PropTypes from 'prop-types';
import '/src/admin/css/AdminPage.css';
import Logo from '/src/img/eastyorkgardenclublogo.gif';
import AdminMeetings from '/src/admin/AdminMeetings.jsx';
import AdminNews from '/src/admin/AdminNews.jsx';
import AdminMessage from './AdminMessage';

const AdminPage = ({adminName}) => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return null;
            case 'meetings':
                return <AdminMeetings />;
            case 'news':
                return <AdminNews />;
            case 'messages':
                return <AdminMessage />;
            default:
                return null;
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    const navItems = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'meetings', label: 'Meetings' },
        { to: 'news', label: 'News Letters' },
        { to: 'shows', label: 'Flower Shows' },
        { to: 'messages', label: 'Messages' },
        { to: 'send-email', label: 'Send Email' },
    ];

    return (
        <div className="admin-page-container">
            <aside className="admin-sidebar">
                <img src={Logo} alt="Logo" className="login-logo" />
                <h1 className="admin-sidebar-title">East York Garden Club Admin Page</h1>
                <h4 className="admin-sidebar-user">Welcome, {adminName}</h4>
                <nav className="admin-sidebar-nav">
                    <ul className="admin-sidebar-menu">
                        {navItems.map(item => (
                            <li key={item.label}>
                                <a id={item.to+'Link'} onClick={() => setCurrentPage(item.to)}>{item.label}</a>
                            </li>
                        ))}
                        <li>
                            <a id="logout-button" onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="admin-main">
                {renderPage()}
            </main>
        </div>
    );
};

AdminPage.propTypes = {
    adminName: PropTypes.string.isRequired,
};

export default AdminPage;
