import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './admin/AdminPage.jsx';
import LoginPage from './admin/LoginPage.jsx';
import MainPage from './MainPage.jsx';
import { jwtDecode } from 'jwt-decode';
var data;
const App = () => {
    const [adminName, setAdminName] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('key');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = new Date().getTime() / 1000;

                if (decodedToken.exp < currentTime) {
                    localStorage.removeItem('key');
                    setIsAuthenticated(false);
                } else {
                    setAdminName(decodedToken.name);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Error decoding token:', error);
                localStorage.removeItem('key');
                setIsAuthenticated(false);
            }
        }
    }, []);

    const authenticateUser = async (credentials) => {
        try {
            const response = await fetch('https://localhost:44345/api/Auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                data = await response.json();
                localStorage.setItem('key', data.token);
                const decodedToken = jwtDecode(localStorage.getItem('key'));
                setAdminName(decodedToken.name);
                setIsAuthenticated(true);
                return true;
            } else {
                setIsAuthenticated(false);
                return false;
            }
        } catch (error) {
            console.error('Login request failed', error);
            return false;
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MainPage />} />
                <Route path="/login" element={!isAuthenticated ? <LoginPage onLogin={authenticateUser} /> : <Navigate to="/admin" />} />
                <Route path="/admin" element={isAuthenticated ? <AdminPage adminName={adminName} /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};


export default App;
