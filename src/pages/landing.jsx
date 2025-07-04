import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from 'react-router-dom';
import ContactSection from './landing/ContactSection';
import FeaturesSection from './landing/FeaturesSection';
import HeroSection from './landing/HeroSection';
import TestimonialsSection from './landing/TestimonialsSection';

const LandingScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.endsWith('/') && location.pathname !== '/') {
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]);
  
  const handleTabChange = (tab) => navigate(`/inicio/${tab}`);

  const NavigationItem = ({ tabKey, label, className="hover:text-blue-600 transition-colors" }) => (
    <button onClick={() => 
        handleTabChange(tabKey)} 
        className={className}>{label}
        </button>
  );

  return (
    <div className="min-h-screen transition-all duration-300">
      <div className="theme-bg-primary theme-text-primary">
        
        {/* Header */}
        <header className="sticky top-0 z-50 theme-header shadow-lg theme-border">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <NavigationItem
                label="INTERNLINK"
                tabKey=""
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              />
            </div>

            <nav className="hidden md:flex space-x-8">
              <NavigationItem label="Características" tabKey="caracteristicas" />
              <NavigationItem label="Testimonios" tabKey="testimonios" />
              <NavigationItem label="Contacto" tabKey="contactos" />
            </nav>

            <div className="flex items-center space-x-4">
              <NavigationItem
                label="Iniciar Sesión"
                tabKey="../login"
                className="hidden md:block px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              />
              <NavigationItem
                label="Regístrate"
                tabKey="../register"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              />
            </div>
          </div>
        </header>

        {/* Rutas internas */}
        <Routes>
          <Route path="" element={<HeroSection />} />
          <Route path="caracteristicas" element={<FeaturesSection />} />
          <Route path="contactos" element={<ContactSection />} />
          <Route path="testimonios" element={<TestimonialsSection />} />
          <Route path="*" element={<Navigate to="" />} />
        </Routes>

        {/* Footer */}
        <footer className="py-12 theme-footer">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">I</span>
                  </div>
                  <h3 className="text-2xl font-bold">INTERNLINK</h3>
                </div>
                <p className="theme-text-secondary">
                  Conectando el futuro profesional de los estudiantes con las oportunidades del mercado laboral.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Estudiantes</h4>
                <ul className="space-y-2 theme-text-secondary">
                  <li><a href="/" className="theme-link-hover">Crear Perfil</a></li>
                  <li><a href="/" className="theme-link-hover">Buscar Prácticas</a></li>
                  <li><a href="/" className="theme-link-hover">Portafolio</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Empresas</h4>
                <ul className="space-y-2 theme-text-secondary">
                  <li><a href="/" className="theme-link-hover">Publicar Ofertas</a></li>
                  <li><a href="/" className="theme-link-hover">Buscar Talento</a></li>
                  <li><a href="/" className="theme-link-hover">Gestión</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Soporte</h4>
                <ul className="space-y-2 theme-text-secondary">
                  <li><a href="/" className="theme-link-hover">Centro de Ayuda</a></li>
                  <li><a href="/" className="theme-link-hover">Términos</a></li>
                  <li><a href="/" className="theme-link-hover">Privacidad</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t theme-border mt-8 pt-8 text-center theme-text-secondary">
              <p>&copy; {new Date().getFullYear()} INTERNLINK - Universidad Peruana Cayetano Heredia. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingScreen;