import React, { useEffect, useState } from 'react';
import {
  Home,
  User,
  Briefcase,
  Search,
  ClipboardList,
  Star,
  MessageSquare,
  BarChart2,
  BookOpen,
  Settings
} from 'lucide-react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import EmpresaProfile from './dashboard/EmpresaProfile';
import WelcomePage from './dashboard/WelcomePage';
import DiscoverTalent from './dashboard/DiscoverTalent';
import OfertasProyectos from './dashboard/OfertasProyectos';
import SistemaCalificaciones from './dashboard/SistemaCalificaciones';
import CommunityCenter from './dashboard/CommunityCenter';

const DashboardScreen = ({ userData, onNavigate, setUserData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth > 768);

  const activeTab = location.pathname.split('/')[2] || 'inicio';

  useEffect(() => {
    const handleResize = () => setIsHorizontal(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (tab) => navigate(`/dashboard/${tab}`);

  const NavigationItem = ({ icon: Icon, label, tabKey, className = '' }) => (
    <button
      onClick={() => handleTabChange(tabKey)}
      className={`navigation-button ${activeTab === tabKey ? 'active' : ''} ${className}`}
    >
      <Icon size={24} />
      <span className="navigation-label">{label}</span>
    </button>
  );

  const routes = (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/inicio" replace />} />
      <Route path="inicio" element={<WelcomePage />} />
      <Route path="perfil" element={<EmpresaProfile />} />
      <Route path="empresa" element={<EmpresaProfile />} />
      <Route path="explorar" element={<DiscoverTalent  />} />
      <Route path="ofertas" element={<OfertasProyectos />} />
      <Route path="calificaciones" element={<SistemaCalificaciones/>} />
      <Route path="mensajes" element={<EmpresaProfile />} />
      <Route path="panel" element={<EmpresaProfile />} />
      <Route path="recursos" element={<CommunityCenter />} />
      <Route path="configuracion" element={<EmpresaProfile />} />
    </Routes>
  );

  if (isHorizontal) {
    return (
      <div className="dashboard-container theme-bg-primary">
        <aside className="fixed top-0 left-0 h-screen w-[250px] theme-card z-40">
          <div className="sidebar-header">
            <div className="sidebar-title">INTERNLINK</div>
          </div>
          <nav className="sidebar-nav">
            <NavigationItem icon={Home} label="INICIO" tabKey="inicio" />
            <NavigationItem icon={User} label="MI PERFIL" tabKey="perfil" />
            <NavigationItem icon={Briefcase} label="EMPRESA" tabKey="empresa" />
            <NavigationItem icon={Search} label="EXPLORAR" tabKey="explorar" />
            <NavigationItem icon={ClipboardList} label="OFERTAS" tabKey="ofertas" />
            <NavigationItem icon={Star} label="CALIFICACIONES" tabKey="calificaciones" />
            <NavigationItem icon={MessageSquare} label="MENSAJES" tabKey="mensajes" />
            <NavigationItem icon={BarChart2} label="PANEL" tabKey="panel" />
            <NavigationItem icon={BookOpen} label="RECURSOS" tabKey="recursos"/>
            <NavigationItem icon={Settings} label="CONFIGURACIÓN" tabKey="configuracion" />
          </nav>
        </aside>

        <main className="ml-[250px] flex-1">
          <header className="sticky top-0 z-[100] dashboard-header theme-card">
            <div className="header-title">Dashboard</div>
            <div className="header-user">{userData?.tipo_usuario}</div>
          </header>

          <section className="dashboard-content relative">
            {routes}
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard-mobile theme-bg-primary">
      <header className="mobile-header theme-card">
        <div className="sidebar-title">INTERNLINK</div>
      </header>

      <main className="dashboard-mobile-content pb-20">{routes}</main>

      <nav className="bottom-nav theme-card fixed bottom-0 left-0 right-0 z-[100]">
        <NavigationItem icon={Home} label="INICIO" tabKey="inicio" />
        <NavigationItem icon={User} label="PERFIL" tabKey="perfil" />
        <NavigationItem icon={ClipboardList} label="OFERTAS" tabKey="ofertas" />
        <NavigationItem icon={MessageSquare} label="MENSAJES" tabKey="mensajes" />
      </nav>
    </div>
  );
};

export default DashboardScreen;
