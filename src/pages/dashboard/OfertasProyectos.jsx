import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Users, Star, Eye, Send, Heart } from 'lucide-react';

const OfertasProyectos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('todas');
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [ordenarPor, setOrdenarPor] = useState('recientes');
  const [favoritos, setFavoritos] = useState([]);

  const categorias = [
    { id: 'todas', nombre: 'Todas las categorías', icono: '🔥' },
    { id: 'desarrollo-web', nombre: 'Desarrollo Web', icono: '💻' },
    { id: 'soporte-ti', nombre: 'Soporte TI', icono: '🛠️' },
    { id: 'automatizacion', nombre: 'Automatización', icono: '⚡' },
    { id: 'mobile', nombre: 'Apps Móviles', icono: '📱' },
    { id: 'diseno', nombre: 'Diseño UX/UI', icono: '🎨' },
    { id: 'datos', nombre: 'Análisis de Datos', icono: '📊' },
    { id: 'seguridad', nombre: 'Ciberseguridad', icono: '🔒' },
    { id: 'marketing', nombre: 'Marketing Digital', icono: '📈' }
  ];

  const tiposProyecto = [
    { id: 'todos', nombre: 'Todos los tipos' },
    { id: 'proyecto', nombre: 'Proyecto único' },
    { id: 'practica', nombre: 'Prácticas' },
    { id: 'freelance', nombre: 'Freelance' },
    { id: 'consultoria', nombre: 'Consultoría' }
  ];

  const ofertas = [
    {
      id: 1,
      empresa: 'RestauranteDoña María',
      categoria: 'desarrollo-web',
      tipo: 'proyecto',
      titulo: 'Desarrollo de Sistema de Pedidos Online',
      descripcion: 'Necesitamos crear una plataforma web para recibir pedidos en línea con integración de pagos y delivery.',
      presupuesto: { min: 800, max: 1500 },
      plazo: '3 semanas',
      ubicacion: 'Lima, Perú',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      nivel: 'Intermedio',
      postulantes: 12,
      rating: 4.8,
      verificada: true,
      urgente: true,
      fechaPublicacion: '2024-07-02',
      requisitos: [
        'Experiencia con frameworks modernos',
        'Conocimiento en pasarelas de pago',
        'Portafolio con proyectos similares'
      ],
      beneficios: [
        'Carta de recomendación',
        'Posibilidad de contrato a largo plazo',
        'Flexibilidad horaria'
      ]
    },
    {
      id: 2,
      empresa: 'Ferretería El Tornillo',
      categoria: 'soporte-ti',
      tipo: 'practica',
      titulo: 'Soporte Técnico y Mantenimiento de Equipos',
      descripcion: 'Buscamos estudiante para prácticas en soporte técnico, mantenimiento de computadoras y redes.',
      presupuesto: { min: 500, max: 800 },
      plazo: '2 meses',
      ubicacion: 'Callao, Perú',
      tecnologias: ['Windows', 'Hardware', 'Redes'],
      nivel: 'Principiante',
      postulantes: 8,
      rating: 4.5,
      verificada: true,
      urgente: false,
      fechaPublicacion: '2024-07-01',
      requisitos: [
        'Conocimientos básicos de hardware',
        'Disponibilidad medio tiempo',
        'Actitud proactiva'
      ],
      beneficios: [
        'Experiencia práctica',
        'Certificado de prácticas',
        'Mentorías técnicas'
      ]
    },
    {
      id: 3,
      empresa: 'Boutique Trendy',
      categoria: 'mobile',
      tipo: 'freelance',
      titulo: 'App Móvil para Tienda de Ropa',
      descripcion: 'Desarrollar una aplicación móvil para catálogo de productos, carrito de compras y notificaciones.',
      presupuesto: { min: 1200, max: 2000 },
      plazo: '6 semanas',
      ubicacion: 'Remoto',
      tecnologias: ['React Native', 'Firebase', 'Android', 'iOS'],
      nivel: 'Avanzado',
      postulantes: 15,
      rating: 4.9,
      verificada: true,
      urgente: false,
      fechaPublicacion: '2024-06-30',
      requisitos: [
        'Experiencia en React Native',
        'Conocimiento de Firebase',
        'Publicación en App Store/Play Store'
      ],
      beneficios: [
        'Proyecto para portafolio',
        'Pago por hitos',
        'Posibilidad de mantenimiento'
      ]
    },
    {
      id: 4,
      empresa: 'AutoRepuestos Lima',
      categoria: 'automatizacion',
      tipo: 'consultoria',
      titulo: 'Automatización de Inventario',
      descripcion: 'Implementar sistema automatizado para control de inventario y alertas de stock mínimo.',
      presupuesto: { min: 600, max: 1000 },
      plazo: '4 semanas',
      ubicacion: 'Lima, Perú',
      tecnologias: ['Python', 'Excel', 'APIs', 'Bases de datos'],
      nivel: 'Intermedio',
      postulantes: 6,
      rating: 4.6,
      verificada: true,
      urgente: true,
      fechaPublicacion: '2024-07-03',
      requisitos: [
        'Conocimientos en Python',
        'Experiencia con APIs',
        'Manejo de bases de datos'
      ],
      beneficios: [
        'Capacitación en el rubro',
        'Networking empresarial',
        'Proyecto escalable'
      ]
    },
    {
      id: 5,
      empresa: 'Clínica Dental Sonrisas',
      categoria: 'datos',
      tipo: 'proyecto',
      titulo: 'Dashboard de Análisis de Pacientes',
      descripcion: 'Crear dashboard interactivo para análisis de datos de pacientes, citas y tratamientos.',
      presupuesto: { min: 700, max: 1200 },
      plazo: '5 semanas',
      ubicacion: 'San Isidro, Lima',
      tecnologias: ['Power BI', 'SQL', 'Python', 'Excel'],
      nivel: 'Intermedio',
      postulantes: 9,
      rating: 4.7,
      verificada: true,
      urgente: false,
      fechaPublicacion: '2024-06-28',
      requisitos: [
        'Experiencia con Power BI',
        'Conocimientos de SQL',
        'Manejo de datos médicos'
      ],
      beneficios: [
        'Experiencia en salud',
        'Certificado profesional',
        'Referencia laboral'
      ]
    },
    {
      id: 6,
      empresa: 'Panadería Artesanal',
      categoria: 'marketing',
      tipo: 'freelance',
      titulo: 'Estrategia Digital y Redes Sociales',
      descripcion: 'Desarrollar estrategia digital completa: redes sociales, contenido, publicidad y análisis.',
      presupuesto: { min: 400, max: 700 },
      plazo: '3 semanas',
      ubicacion: 'Remoto',
      tecnologias: ['Social Media', 'Google Analytics', 'Canva', 'Facebook Ads'],
      nivel: 'Principiante',
      postulantes: 18,
      rating: 4.4,
      verificada: false,
      urgente: false,
      fechaPublicacion: '2024-06-29',
      requisitos: [
        'Conocimientos en marketing digital',
        'Experiencia con redes sociales',
        'Creatividad y originalidad'
      ],
      beneficios: [
        'Portfolio diverso',
        'Aprendizaje práctico',
        'Contactos en el sector'
      ]
    }
  ];

  const toggleFavorito = (id) => {
    setFavoritos(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const ofertasFiltradas = ofertas.filter(oferta => {
    const coincideCategoria = filtroCategoria === 'todas' || oferta.categoria === filtroCategoria;
    const coincideTipo = filtroTipo === 'todos' || oferta.tipo === filtroTipo;
    const coincideBusqueda = busqueda === '' || 
      oferta.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      oferta.empresa.toLowerCase().includes(busqueda.toLowerCase()) ||
      oferta.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    
    return coincideCategoria && coincideTipo && coincideBusqueda;
  });

  const getNivelColor = (nivel) => {
    switch(nivel) {
      case 'Principiante': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Avanzado': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getTipoColor = (tipo) => {
    switch(tipo) {
      case 'proyecto': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'practica': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'freelance': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'consultoria': return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="theme-bg-primary min-h-screen">
      {/* Header */}
      <div className="theme-header sticky top-0 z-50 border-b theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold theme-text-primary">📋 Ofertas y Proyectos</h1>
              <span className="theme-chip px-3 py-1 rounded-full text-sm font-medium">
                {ofertasFiltradas.length} disponibles
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="theme-outline-button px-4 py-2 rounded-lg font-medium transition-colors">
                <Heart className="w-4 h-4 mr-2" />
                Favoritos ({favoritos.length})
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtros y Búsqueda */}
        <div className="theme-card rounded-xl p-6 mb-8 theme-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Búsqueda */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 theme-text-secondary" />
                <input
                  type="text"
                  placeholder="Buscar proyectos, empresas o tecnologías..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="theme-input w-full pl-10 pr-4 py-2 rounded-lg"
                />
              </div>
            </div>

            {/* Filtro Tipo */}
            <div>
              <select
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="theme-select w-full px-3 py-2 rounded-lg"
              >
                {tiposProyecto.map(tipo => (
                  <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
                ))}
              </select>
            </div>

            {/* Ordenar */}
            <div>
              <select
                value={ordenarPor}
                onChange={(e) => setOrdenarPor(e.target.value)}
                className="theme-select w-full px-3 py-2 rounded-lg"
              >
                <option value="recientes">Más recientes</option>
                <option value="presupuesto">Mayor presupuesto</option>
                <option value="popularidad">Más postulaciones</option>
                <option value="rating">Mejor rating</option>
              </select>
            </div>
          </div>

          {/* Categorías */}
          <div className="flex flex-wrap gap-2">
            {categorias.map(categoria => (
              <button
                key={categoria.id}
                onClick={() => setFiltroCategoria(categoria.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  filtroCategoria === categoria.id
                    ? 'bg-blue-500 text-white'
                    : 'theme-chip hover:bg-opacity-80'
                }`}
              >
                <span className="mr-2">{categoria.icono}</span>
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Ofertas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ofertasFiltradas.map(oferta => (
            <div key={oferta.id} className="theme-card rounded-xl p-6 theme-border hover:shadow-lg transition-shadow">
              {/* Header de la oferta */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-bold theme-text-primary">{oferta.titulo}</h3>
                    {oferta.urgente && (
                      <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded-full text-xs font-medium">
                        🔥 Urgente
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm theme-text-secondary">
                    <span className="font-medium">{oferta.empresa}</span>
                    {oferta.verificada && (
                      <span className="text-green-500">✓ Verificada</span>
                    )}
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{oferta.rating}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleFavorito(oferta.id)}
                  className={`p-2 rounded-full transition-colors ${
                    favoritos.includes(oferta.id)
                      ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'theme-text-secondary hover:text-red-500'
                  }`}
                >
                  <Heart className="w-5 h-5" fill={favoritos.includes(oferta.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Etiquetas */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTipoColor(oferta.tipo)}`}>
                  {oferta.tipo}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getNivelColor(oferta.nivel)}`}>
                  {oferta.nivel}
                </span>
                <span className="theme-chip px-2 py-1 rounded-full text-xs font-medium">
                  {categorias.find(c => c.id === oferta.categoria)?.nombre}
                </span>
              </div>

              {/* Descripción */}
              <p className="theme-text-secondary text-sm mb-4 line-clamp-3">
                {oferta.descripcion}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-1 mb-4">
                {oferta.tecnologias.slice(0, 4).map(tech => (
                  <span key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
                {oferta.tecnologias.length > 4 && (
                  <span className="text-xs theme-text-secondary">+{oferta.tecnologias.length - 4} más</span>
                )}
              </div>

              {/* Información del proyecto */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="theme-text-primary font-medium">
                    S/ {oferta.presupuesto.min} - S/ {oferta.presupuesto.max}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="theme-text-secondary">{oferta.plazo}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <span className="theme-text-secondary">{oferta.ubicacion}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="theme-text-secondary">{oferta.postulantes} postulantes</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" />
                  Postular Ahora
                </button>
                <button className="theme-outline-button px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <button className="theme-btn-outline px-4 py-2 rounded-lg">Anterior</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">1</button>
            <button className="theme-btn-outline px-4 py-2 rounded-lg">2</button>
            <button className="theme-btn-outline px-4 py-2 rounded-lg">3</button>
            <button className="theme-btn-outline px-4 py-2 rounded-lg">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertasProyectos;
