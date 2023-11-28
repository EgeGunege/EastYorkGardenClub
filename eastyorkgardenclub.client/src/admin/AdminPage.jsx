/*import { Routes, Route } from 'react-router-dom';*/
import { Link } from 'react-router-dom';
import '/src/admin/css/AdminPage.css';
import Logo from '/src/img/eastyorkgardenclublogo.gif';

const AdminPage = () => {

    const navItems = [
        { path: '/admin/home', label: 'Home' },
        { path: '/admin/about', label: 'About' },
        { path: '/admin/meetings', label: 'Meetings' },
        { path: '/admin/news', label: 'News Letters' },
        { path: '/admin/shows', label: 'Flower Shows' },
        { path: '/admin/messages', label: 'Messages' },
        { path: '/admin/send-email', label: 'Send Email' },
    ];

    return (
        <div className="admin-page-container">
            <aside className="sidebar">
                <img src={Logo} alt="Logo" className="login-logo" />
                <h1 className="sidebar-title">East York Garden Club Admin</h1>
                <nav className="sidebar-nav">
                    <ul className="sidebar-menu">
                        {navItems.map(item => (
                            <li key={item.label}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="admin-main">
                {/*<Routes>*/}
                {/*    <Route path="/admin/home" element={<AdminHome />} />*/}
                {/*    <Route path="/admin/about" element={<AdminAbout />} />*/}
                {/*    <Route path="/admin/meetings" element={<AdminMeetings />} />*/}
                {/*    <Route path="/admin/shows" element={<AdminShows />} />*/}
                {/*    <Route path="/admin/messages" element={<AdminMessages />} />*/}
                {/*    <Route path="/admin/send-email" element={<AdminSendEmail />} />*/}
                {/*</Routes>*/}
            </main>
        </div>
    );
};

export default AdminPage;
