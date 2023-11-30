import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './admin/AdminPage.jsx';
import LoginPage from './admin/LoginPage.jsx';
import MainPage from './MainPage.jsx';
import { jwtDecode } from 'jwt-decode';
var data;
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminName, setAdminName] = useState(null);

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
                localStorage.setItem('jwtToken', data.token);
                const decodedToken = jwtDecode(data.token);
                setAdminName(decodedToken.name);
                setIsAuthenticated(true);
                return true;
            } else {
                setIsAuthenticated(false);
                console.log('Login failed: Invalid credentials.');
                return false;
            }
        } catch (error) {
            console.error('Login request failed', error);
            setIsAuthenticated(false);
            return false;
        }
    };


    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MainPage />} />
                <Route path="/login" element={<LoginPage onLogin={authenticateUser} />} />
                <Route path="/admin" element={isAuthenticated ? <AdminPage adminName={adminName} /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};


export default App;
