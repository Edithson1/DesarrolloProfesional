import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import PublicRoute from './ResetRoute';
import PrivateRoute from './PrivateRoute';
import LandingScreen from '../pages/landing';
import RegisterScreen from '../pages/register';
import LoginScreen from '../pages/login';
import DashboardScreen from '../pages/dashboard';
import ThemeSwitcherFloat from './ui/ThemeSwitcherFloat'


const AppRoutes = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(() => {
  
  const storedData = localStorage.getItem('userData');
  return storedData ? JSON.parse(storedData) : {};
  });
  console.log(userData);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);
  return (
    <>
      <Routes>
        <Route path="/inicio/*" element={
          <PublicRoute userData={userData}>
            <LandingScreen />
          </PublicRoute>
        } 
        />
        <Route
          path="/register"
          element={
            <PublicRoute userData={userData}>
              <RegisterScreen
                userData={userData}
                navigate={navigate}
                setUserData={setUserData}
              />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute userData={userData}>
              <LoginScreen 
                navigate={navigate} 
                setUserData={setUserData} 
              />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute userData={userData}>
              <DashboardScreen
                userData={userData}
                setUserData={setUserData}
                navigate={navigate}
              />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </>
  );
};

const Interlink = () => {
  return (
    <Router>
      <div className="min-h-screen theme-bg-primary theme-text-primary">
        <AppRoutes />
      </div>
      <ThemeSwitcherFloat />
    </Router>
    
  );
};

export default Interlink;