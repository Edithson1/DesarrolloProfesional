import React, { useState } from 'react';
import { 
  Search, Filter, Star, MapPin, GraduationCap, Heart, MessageCircle, Bookmark, Eye, Calendar, 
  ChevronDown, 
  Mail
} from 'lucide-react';

const DiscoverTalent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedStudents, setSavedStudents] = useState(new Set());
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [activeTab, setActiveTab] = useState('feed');
  const [filters, setFilters] = useState({
    university: '',
    career: '',
    skills: [],
    rating: '',
    serviceType: ''
  });

  // Datos simulados
  const students = [
    {
      id: 1,
      name: "Carlos Mendoza",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      university: "UNI",
      career: "Ing. Sistemas",
      semester: "9no",
      rating: 4.9,
      location: "Lima, Perú",
      skills: ["React", "Node.js", "Python", "AWS"],
      project: {
        title: "Sistema de Gestión Hospitalaria",
        description: "Plataforma web completa para la gestión de pacientes, citas médicas y historiales clínicos. Incluye módulos de farmacia, laboratorio y reportes avanzados.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
        likes: 45,
        comments: 12,
        views: 234,
        tags: ["Healthcare", "Full Stack", "React", "Node.js"],
        timeAgo: "2 días",
        featured: true
      },
      availability: "Disponible",
      hourlyRate: "$15/hora",
      completedProjects: 8,
      responseTime: "< 2 horas"
    },
    {
      id: 2,
      name: "Ana Gutierrez",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c5b8?w=150&h=150&fit=crop&crop=face",
      university: "UNMSM",
      career: "Ing. Software",
      semester: "8vo",
      rating: 4.8,
      location: "Arequipa, Perú",
      skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
      project: {
        title: "App de Delivery para Restaurantes",
        description: "Aplicación móvil nativa para pedidos de comida con geolocalización, pagos integrados y sistema de calificaciones. Incluye panel administrativo web.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
        likes: 67,
        comments: 23,
        views: 345,
        tags: ["Mobile", "Flutter", "Firebase", "E-commerce"],
        timeAgo: "1 día",
        featured: false
      },
      availability: "Ocupado",
      hourlyRate: "$12/hora",
      completedProjects: 12,
      responseTime: "< 4 horas"
    },
    {
      id: 3,
      name: "Miguel Torres",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      university: "PUCP",
      career: "Ing. Informática",
      semester: "10mo",
      rating: 4.7,
      location: "Lima, Perú",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      project: {
        title: "Plataforma de E-learning",
        description: "Sistema de gestión de aprendizaje con videoconferencias, evaluaciones automáticas y seguimiento de progreso. Optimizado para instituciones educativas.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
        likes: 89,
        comments: 34,
        views: 456,
        tags: ["Education", "Python", "Django", "LMS"],
        timeAgo: "3 días",
        featured: true
      },
      availability: "Disponible",
      hourlyRate: "$18/hora",
      completedProjects: 15,
      responseTime: "< 1 hora"
    }
  ];

  const featuredProjects = students.filter(s => s.project.featured);

  const filterOptions = {
    universities: ["UNI", "UNMSM", "PUCP", "UPC", "USIL", "UPN"],
    careers: ["Ing. Sistemas", "Ing. Software", "Ing. Informática", "Ing. Computación"],
    skills: ["React", "Python", "Node.js", "Flutter", "Django", "AWS", "Firebase", "Docker"],
    ratings: ["4.5+", "4.0+", "3.5+"],
    serviceTypes: ["Desarrollo Web", "Aplicaciones Móviles", "Consultoría", "UI/UX Design"]
  };

  const handleSave = (studentId) => {
    const newSaved = new Set(savedStudents);
    if (newSaved.has(studentId)) {
      newSaved.delete(studentId);
    } else {
      newSaved.add(studentId);
    }
    setSavedStudents(newSaved);
  };

  const handleLike = (studentId) => {
    const newLiked = new Set(likedProjects);
    if (newLiked.has(studentId)) {
      newLiked.delete(studentId);
    } else {
      newLiked.add(studentId);
    }
    setLikedProjects(newLiked);
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesUniversity = !filters.university || student.university === filters.university;
    const matchesCareer = !filters.career || student.career === filters.career;
    const matchesRating = !filters.rating || student.rating >= parseFloat(filters.rating);
    
    return matchesSearch && matchesUniversity && matchesCareer && matchesRating;
  });

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="theme-bg-primary min-h-screen">
        {/* Header */}
        <header className="theme-header border-b theme-border sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl theme-text-primary">Descubrir Talento</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? '🌞' : '🌙'}
                </button>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b theme-border">
            <button
              onClick={() => setActiveTab('feed')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'feed' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'theme-text-secondary hover:theme-text-primary'
              }`}
            >
              Feed de Talento
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'featured' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'theme-text-secondary hover:theme-text-primary'
              }`}
            >
              Proyectos Destacados
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre, proyecto o habilidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 theme-input rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 theme-card rounded-xl hover:shadow-lg transition-all"
            >
              <Filter className="w-5 h-5" />
              <span>Filtros</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="theme-card rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">Universidad</label>
                  <select 
                    value={filters.university}
                    onChange={(e) => setFilters({...filters, university: e.target.value})}
                    className="w-full theme-select rounded-lg p-2"
                  >
                    <option value="">Todas</option>
                    {filterOptions.universities.map(uni => (
                      <option key={uni} value={uni}>{uni}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">Carrera</label>
                  <select 
                    value={filters.career}
                    onChange={(e) => setFilters({...filters, career: e.target.value})}
                    className="w-full theme-select rounded-lg p-2"
                  >
                    <option value="">Todas</option>
                    {filterOptions.careers.map(career => (
                      <option key={career} value={career}>{career}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">Calificación</label>
                  <select 
                    value={filters.rating}
                    onChange={(e) => setFilters({...filters, rating: e.target.value})}
                    className="w-full theme-select rounded-lg p-2"
                  >
                    <option value="">Todas</option>
                    {filterOptions.ratings.map(rating => (
                      <option key={rating} value={rating.replace('+', '')}>{rating}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">Tipo de Servicio</label>
                  <select 
                    value={filters.serviceType}
                    onChange={(e) => setFilters({...filters, serviceType: e.target.value})}
                    className="w-full theme-select rounded-lg p-2"
                  >
                    <option value="">Todos</option>
                    {filterOptions.serviceTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={() => setFilters({university: '', career: '', skills: [], rating: '', serviceType: ''})}
                className="mt-4 text-blue-500 hover:text-blue-600 font-medium"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          {activeTab === 'feed' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredStudents.map(student => (
                <div key={student.id} className="theme-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Student Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={student.avatar} 
                        alt={student.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold theme-text-primary">{student.name}</h3>
                        <div className="flex items-center gap-2 text-sm theme-text-secondary">
                          <GraduationCap className="w-4 h-4" />
                          <span>{student.university} • {student.career}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSave(student.id)}
                        className={`p-2 rounded-full transition-colors ${
                          savedStudents.has(student.id) 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Rating and Location */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{student.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm theme-text-secondary">
                        <MapPin className="w-4 h-4" />
                        <span>{student.location}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.availability === 'Disponible' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {student.availability}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {student.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="theme-chip px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                      {student.skills.length > 3 && (
                        <span className="theme-chip px-2 py-1 rounded-full text-xs">
                          +{student.skills.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project */}
                  <div className="px-6 pb-4">
                    <div className="relative mb-4">
                      <img 
                        src={student.project.image} 
                        alt={student.project.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      {student.project.featured && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Destacado
                        </div>
                      )}
                    </div>
                    
                    <h4 className="font-bold theme-text-primary mb-2">{student.project.title}</h4>
                    <p className="theme-text-secondary text-sm mb-3 line-clamp-3">
                      {student.project.description}
                    </p>

                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {student.project.tags.map(tag => (
                        <span key={tag} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Stats */}
                    <div className="flex items-center gap-4 text-sm theme-text-secondary mb-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{student.project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{student.project.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{student.project.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-6 py-4 border-t theme-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleLike(student.id)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                            likedProjects.has(student.id)
                              ? 'bg-red-100 text-red-600'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedProjects.has(student.id) ? 'fill-current' : ''}`} />
                          <span className="text-sm">{student.project.likes + (likedProjects.has(student.id) ? 1 : 0)}</span>
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">Comentar</span>
                        </button>
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>Contactar</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'featured' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold theme-text-primary mb-2">🏆 Proyectos Destacados del Mes</h2>
                <p className="theme-text-secondary">Los mejores proyectos seleccionados por nuestra comunidad</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map(student => (
                  <div key={student.id} className="theme-card-gradient rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={student.project.image} 
                        alt={student.project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold">
                        🏆 Proyecto Destacado
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={student.avatar} 
                          alt={student.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div>
                          <h3 className="font-bold text-lg theme-text-primary">{student.name}</h3>
                          <p className="theme-text-secondary">{student.university} • {student.career}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{student.rating}</span>
                            <span className="text-sm theme-text-secondary">• {student.completedProjects} proyectos</span>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-xl theme-text-primary mb-3">{student.project.title}</h4>
                      <p className="theme-text-secondary mb-4">{student.project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {student.project.tags.map(tag => (
                          <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm theme-text-secondary">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{student.project.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{student.project.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{student.project.views}</span>
                          </div>
                        </div>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>Contactar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverTalent;