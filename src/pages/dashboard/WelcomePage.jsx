import React, { useState } from 'react';
import { Building2, Code, Trophy, TrendingUp, Users, Briefcase, Star, ArrowRight, Bell, Settings, Sun, Moon, Menu, X } from 'lucide-react';

const WelcomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [userRole, setUserRole] = useState('student'); // 'student' or 'empresa'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Datos simulados del usuario
  const userData = {
    student: {
      name: "Ana García",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c5b8?w=150&h=150&fit=crop&crop=face",
      university: "Universidad Nacional Mayor de San Marcos",
      career: "Ingeniería Informática",
      semester: "8vo Semestre",
      completedProjects: 12,
      rating: 4.8,
      skills: ["React", "Python", "Node.js", "MySQL"]
    },
    empresa: {
      name: "TechPeru Solutions",
      avatar: "https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=150&fit=crop",
      sector: "Desarrollo de Software",
      employees: "25-50 empleados",
      location: "Lima, Perú",
      activeProjects: 8,
      rating: 4.6,
      services: ["Web Development", "Mobile Apps", "E-commerce", "Consulting"]
    }
  };

  const currentUser = userData[userRole];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleRole = () => {
    setUserRole(userRole === 'student' ? 'empresa' : 'student');
  };

  const quickActions = userRole === 'student' ? [
    { icon: Code, title: "Subir Proyecto", desc: "Muestra tu trabajo", color: "bg-blue-500" },
    { icon: Briefcase, title: "Buscar Oportunidades", desc: "Encuentra trabajos", color: "bg-green-500" },
    { icon: Users, title: "Conectar", desc: "Amplía tu red", color: "bg-purple-500" },
    { icon: Trophy, title: "Mis Logros", desc: "Ve tu progreso", color: "bg-yellow-500" }
  ] : [
    { icon: Users, title: "Buscar Talento", desc: "Encuentra estudiantes", color: "bg-blue-500" },
    { icon: Briefcase, title: "Publicar Proyecto", desc: "Crea oportunidades", color: "bg-green-500" },
    { icon: Star, title: "Calificar", desc: "Evalúa colaboradores", color: "bg-purple-500" },
    { icon: TrendingUp, title: "Analíticas", desc: "Ve tus métricas", color: "bg-yellow-500" }
  ];

  const recentActivity = userRole === 'student' ? [
    { type: "proyecto", content: "Completaste el proyecto 'E-commerce App'", time: "2 horas" },
    { type: "calificacion", content: "Recibiste una calificación de 5 estrellas", time: "1 día" },
    { type: "oportunidad", content: "Nueva oportunidad: Desarrollador Frontend", time: "2 días" }
  ] : [
    { type: "aplicacion", content: "5 nuevas aplicaciones para tu proyecto", time: "1 hora" },
    { type: "proyecto", content: "Proyecto 'Sistema de Inventario' completado", time: "3 días" },
    { type: "talento", content: "Nuevo talento recomendado para ti", time: "1 semana" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="theme-bg-primary min-h-screen">
        {/* Header */}
        <header className="theme-header border-b theme-border sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IL</span>
                  </div>
                  <span className="font-bold text-xl theme-text-primary">INTERNLINK</span>
                </div>
                
                {/* Role Toggle (Desktop) */}
                <div className="hidden md:flex items-center gap-2 ml-6">
                  <button
                    onClick={toggleRole}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      userRole === 'student' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                        : 'theme-text-secondary'
                    }`}
                  >
                    Estudiante
                  </button>
                  <button
                    onClick={toggleRole}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      userRole === 'empresa' 
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' 
                        : 'theme-text-secondary'
                    }`}
                  >
                    Empresa
                  </button>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Bell className="w-5 h-5 theme-text-primary" />
                </button>
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5 theme-text-primary" /> : <Moon className="w-5 h-5 theme-text-primary" />}
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Settings className="w-5 h-5 theme-text-primary" />
                </button>
                <div className="flex items-center gap-3">
                  <img 
                    src={currentUser.avatar} 
                    alt="Avatar" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="theme-text-primary font-medium">{currentUser.name}</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden theme-card border-b theme-border">
            <div className="px-4 py-2">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={toggleRole}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    userRole === 'student' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                      : 'theme-text-secondary'
                  }`}
                >
                  Estudiante
                </button>
                <button
                  onClick={toggleRole}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    userRole === 'empresa' 
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' 
                    : 'theme-text-secondary'
                  }`}
                >
                  Empresa
                </button>
              </div>
              <div className="flex items-center gap-4 border-t theme-border pt-4">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="theme-card-gradient rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-2">
                  ¡Bienvenido de vuelta, {currentUser.name}!
                </h1>
                <p className="text-lg theme-text-secondary mb-6">
                  {userRole === 'student' 
                    ? "Continúa construyendo tu futuro profesional en tecnología"
                    : "Encuentra el talento tecnológico que tu empresa necesita"
                  }
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    {userRole === 'student' ? <Code className="w-5 h-5 text-blue-500" /> : <Building2 className="w-5 h-5 text-purple-500" />}
                    <span className="theme-text-primary font-medium">
                      {userRole === 'student' ? currentUser.career : currentUser.sector}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="theme-text-primary font-medium">{currentUser.rating} estrellas</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src={currentUser.avatar} 
                  alt="User Avatar" 
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold theme-text-primary mb-6">Acciones Rápidas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <div key={index} className="theme-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold theme-text-primary mb-2">{action.title}</h3>
                  <p className="theme-text-secondary text-sm">{action.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold theme-text-primary mb-6">Tu Progreso</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="theme-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    {userRole === 'student' ? currentUser.completedProjects : currentUser.activeProjects}
                  </div>
                  <p className="theme-text-secondary text-sm">
                    {userRole === 'student' ? 'Proyectos Completados' : 'Proyectos Activos'}
                  </p>
                </div>
                <div className="theme-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">{currentUser.rating}</div>
                  <p className="theme-text-secondary text-sm">Calificación Promedio</p>
                </div>
                <div className="theme-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    {userRole === 'student' ? currentUser.skills.length : currentUser.services.length}
                  </div>
                  <p className="theme-text-secondary text-sm">
                    {userRole === 'student' ? 'Habilidades' : 'Servicios'}
                  </p>
                </div>
              </div>

              {/* Skills/Services */}
              <div className="theme-card rounded-xl p-6">
                <h3 className="font-semibold theme-text-primary mb-4">
                  {userRole === 'student' ? 'Tus Habilidades' : 'Tus Servicios'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(userRole === 'student' ? currentUser.skills : currentUser.services).map((item, index) => (
                    <span key={index} className="theme-chip px-3 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold theme-text-primary mb-6">Actividad Reciente</h2>
              <div className="theme-card rounded-xl p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="theme-text-primary text-sm font-medium">{activity.content}</p>
                        <p className="theme-text-secondary text-xs mt-1">hace {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center justify-center gap-2">
                  Ver todo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WelcomePage;