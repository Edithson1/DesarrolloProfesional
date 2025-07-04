import React, { useState } from 'react';
import { 
  MessageCircle, 
  BookOpen, 
  Video, 
  Users,
  Search,
  Plus,
  Heart,
  MessageSquare,
  User,
  Calendar,
  Clock,
  Star,
  Play,
  Eye,
  Moon,
  Sun,
  Bookmark
} from 'lucide-react';

const CommunityCenter = () => {
  const [activeTab, setActiveTab] = useState('foro');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Datos de ejemplo
  const forumPosts = [
    {
      id: 1,
      title: "¿Cómo optimizar mi perfil para atraer más empresas?",
      author: "María González",
      avatar: "MG",
      category: "Perfil",
      replies: 12,
      likes: 8,
      time: "hace 2 horas",
      preview: "He actualizado mi portafolio pero no recibo muchas propuestas..."
    },
    {
      id: 2,
      title: "Compartiendo mi experiencia: primer proyecto freelance",
      author: "Carlos Mendoza",
      avatar: "CM",
      category: "Experiencias",
      replies: 5,
      likes: 15,
      time: "hace 4 horas",
      preview: "Quiero compartir lo que aprendí en mi primera colaboración con una PYME..."
    },
    {
      id: 3,
      title: "Mejores prácticas para presentar propuestas técnicas",
      author: "Ana Vega",
      avatar: "AV",
      category: "Tips",
      replies: 8,
      likes: 22,
      time: "hace 1 día",
      preview: "Después de varios proyectos, estos son mis consejos para propuestas efectivas..."
    }
  ];

  const guides = [
    {
      id: 1,
      title: "Cómo crear un perfil profesional atractivo",
      description: "Guía completa para destacar tus habilidades y proyectos",
      category: "Perfil",
      readTime: "5 min",
      difficulty: "Principiante",
      views: 234,
      rating: 4.8,
      tags: ["perfil", "portfolio", "habilidades"]
    },
    {
      id: 2,
      title: "Presentación de propuestas ganadoras",
      description: "Estrategias para crear propuestas que conviertan",
      category: "Propuestas",
      readTime: "8 min",
      difficulty: "Intermedio",
      views: 189,
      rating: 4.9,
      tags: ["propuestas", "ventas", "comunicación"]
    },
    {
      id: 3,
      title: "Gestión de proyectos para estudiantes",
      description: "Herramientas y metodologías para entregar proyectos exitosos",
      category: "Gestión",
      readTime: "12 min",
      difficulty: "Avanzado",
      views: 156,
      rating: 4.7,
      tags: ["gestión", "proyectos", "metodologías"]
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Transformación Digital en PYMEs Peruanas",
      instructor: "Dr. Roberto Silva",
      date: "2025-07-15",
      time: "19:00",
      duration: "90 min",
      participants: 45,
      maxParticipants: 100,
      type: "Próximo",
      description: "Oportunidades y desafíos de la digitalización para pequeñas empresas"
    },
    {
      id: 2,
      title: "Desarrollo de Soft Skills para Freelancers",
      instructor: "Lucía Ramírez",
      date: "2025-07-10",
      time: "18:00",
      duration: "60 min",
      participants: 89,
      maxParticipants: 80,
      type: "Grabado",
      description: "Comunicación efectiva y negociación en proyectos tecnológicos"
    },
    {
      id: 3,
      title: "Tendencias en Desarrollo Web 2025",
      instructor: "Miguel Torres",
      date: "2025-07-20",
      time: "20:00",
      duration: "75 min",
      participants: 23,
      maxParticipants: 150,
      type: "Próximo",
      description: "Las tecnologías que dominarán el mercado este año"
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos', count: 23 },
    { id: 'perfil', label: 'Perfil', count: 8 },
    { id: 'propuestas', label: 'Propuestas', count: 6 },
    { id: 'experiencias', label: 'Experiencias', count: 5 },
    { id: 'tips', label: 'Tips', count: 4 }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Principiante': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Avanzado': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const renderForum = () => (
    <div className="space-y-6">
      {/* Header del Foro */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold theme-text-primary">Foro de la Comunidad</h2>
          <p className="theme-text-secondary">Comparte dudas, experiencias y conecta con otros estudiantes</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          Nueva Publicación
        </button>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'theme-chip hover:bg-blue-100 dark:hover:bg-blue-900'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Posts del Foro */}
      <div className="space-y-4">
        {forumPosts.map(post => (
          <div key={post.id} className="theme-card rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {post.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold theme-text-primary hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <span className="theme-chip px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <p className="theme-text-secondary text-sm mb-3 line-clamp-2">
                  {post.preview}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm theme-text-secondary">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm theme-text-secondary">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {post.replies}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGuides = () => (
    <div className="space-y-6">
      {/* Header de Guías */}
      <div>
        <h2 className="text-2xl font-bold theme-text-primary">Guías y Recursos</h2>
        <p className="theme-text-secondary">Aprende las mejores prácticas para destacar en la plataforma</p>
      </div>

      {/* Grid de Guías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map(guide => (
          <div key={guide.id} className="theme-card rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                {guide.difficulty}
              </span>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
            
            <h3 className="font-semibold theme-text-primary mb-2 line-clamp-2">
              {guide.title}
            </h3>
            
            <p className="theme-text-secondary text-sm mb-4 line-clamp-3">
              {guide.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm theme-text-secondary mb-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {guide.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {guide.views}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                {guide.rating}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {guide.tags.map(tag => (
                <span key={tag} className="theme-chip px-2 py-1 rounded-full text-xs">
                  #{tag}
                </span>
              ))}
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <BookOpen className="w-4 h-4" />
              Leer Guía
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWebinars = () => (
    <div className="space-y-6">
      {/* Header de Webinars */}
      <div>
        <h2 className="text-2xl font-bold theme-text-primary">Webinars y Mentorías</h2>
        <p className="theme-text-secondary">Sesiones en vivo con expertos de la industria</p>
      </div>

      {/* Lista de Webinars */}
      <div className="space-y-4">
        {webinars.map(webinar => (
          <div key={webinar.id} className="theme-card rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold theme-text-primary">{webinar.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    webinar.type === 'Próximo' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                  }`}>
                    {webinar.type}
                  </span>
                </div>
                
                <p className="theme-text-secondary text-sm mb-3">{webinar.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm theme-text-secondary">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {webinar.instructor}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {webinar.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {webinar.time} ({webinar.duration})
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {webinar.participants}/{webinar.maxParticipants}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-2">
                {webinar.type === 'Próximo' ? (
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Calendar className="w-4 h-4" />
                    Registrarse
                  </button>
                ) : (
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Play className="w-4 h-4" />
                    Ver Grabación
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'dark' : ''}`}>
      <div className="theme-bg-primary min-h-screen">
        {/* Header */}
        <header className="theme-header border-b theme-border sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IL</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold theme-text-primary">INTERNLINK</h1>
                  <p className="text-sm theme-text-secondary">Centro de Recursos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Barra de búsqueda */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar recursos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="theme-input pl-10 pr-4 py-2 rounded-lg w-64"
                  />
                </div>
                
                {/* Toggle tema */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg theme-card hover:shadow-md transition-shadow"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Navegación de tabs */}
        <nav className="theme-bg-secondary border-b theme-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'foro', label: 'Foro', icon: MessageCircle },
                { id: 'guias', label: 'Guías', icon: BookOpen },
                { id: 'webinars', label: 'Webinars', icon: Video }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent theme-text-secondary hover:theme-text-primary'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Contenido principal */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'foro' && renderForum()}
          {activeTab === 'guias' && renderGuides()}
          {activeTab === 'webinars' && renderWebinars()}
        </main>

        {/* Footer */}
        <footer className="theme-footer mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-sm">
                © 2025 INTERNLINK - Conectando estudiantes con oportunidades
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CommunityCenter;