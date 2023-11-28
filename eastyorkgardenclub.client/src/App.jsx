import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './admin/AdminPage.jsx';
import LoginPage from './admin/LoginPage.jsx';
import MainPage from './MainPage.jsx';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticateUser = (credentials) => {
        if (credentials.email === 'admin@example.com' && credentials.password === 'admin') {
            setIsAuthenticated(true);
            return true;
        } else {
            return false;
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MainPage />} />
                <Route path="/login" element={<LoginPage onLogin={authenticateUser} />} />
                <Route path="/admin" element={isAuthenticated ? <AdminPage /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};


export default App;
