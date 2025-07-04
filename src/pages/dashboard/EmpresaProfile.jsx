import React, { useState } from 'react';
import { Building2, MapPin, Users, Star, Calendar, Phone, Mail, Globe, Award, CheckCircle } from 'lucide-react';

const EmpresaProfile = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Datos de ejemplo de la empresa
  const empresa = {
    nombre: "TechSolutions PYME",
    sector: "Tecnología y Desarrollo de Software",
    ruc: "20123456789",
    verificado: true,
    logo: "https://via.placeholder.com/120x120/2563eb/ffffff?text=TS",
    descripcion: "Empresa especializada en desarrollo de software y soluciones tecnológicas para pequeñas y medianas empresas. Nos enfocamos en crear aplicaciones web y móviles innovadoras que impulsen el crecimiento de nuestros clientes.",
    ubicacion: "San Isidro, Lima",
    telefono: "+51 1 234-5678",
    email: "contacto@techsolutions.pe",
    website: "www.techsolutions.pe",
    fechaRegistro: "Enero 2020",
    empleados: "15-30",
    rating: 4.8,
    totalReviews: 24
  };

  const serviciosContratados = [
    {
      id: 1,
      titulo: "Desarrollo de App Móvil",
      estudiante: "María García",
      fecha: "Diciembre 2024",
      estado: "Completado",
      rating: 5,
      comentario: "Excelente trabajo en el desarrollo de nuestra aplicación móvil. María demostró gran profesionalismo y conocimiento técnico."
    },
    {
      id: 2,
      titulo: "Diseño Web Corporativo",
      estudiante: "Carlos Mendoza",
      fecha: "Noviembre 2024",
      estado: "Completado",
      rating: 5,
      comentario: "Diseño moderno y funcional. Superó nuestras expectativas en tiempo de entrega y calidad."
    },
    {
      id: 3,
      titulo: "Consultoría en Marketing Digital",
      estudiante: "Ana Rodríguez",
      fecha: "Octubre 2024",
      estado: "Completado",
      rating: 4,
      comentario: "Muy buen análisis de nuestro mercado objetivo. Las estrategias propuestas fueron efectivas."
    }
  ];

  const proyectoActual = {
    titulo: "Sistema de Gestión de Inventarios",
    descripcion: "Necesitamos desarrollar un sistema web para gestionar nuestro inventario de productos. Debe incluir control de stock, reportes y alertas automáticas.",
    presupuesto: "S/. 3,000 - S/. 5,000",
    fechaLimite: "Marzo 2025",
    habilidades: ["React", "Node.js", "MySQL", "API Development"],
    estado: "Abierto"
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="theme-bg-primary min-h-screen">
        {/* Header con toggle de tema */}
        <div className="theme-header border-b theme-border p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold theme-text-primary">Perfil de Empresa</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg theme-btn-outline hover:theme-bg-secondary transition-colors"
            >
              {darkMode ? '☀️' : '🌙'} {darkMode ? 'Claro' : 'Oscuro'}
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-6">
          {/* Información Principal */}
          <div className="theme-card rounded-xl p-8 mb-8 theme-border">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Logo y verificación */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src={empresa.logo} 
                    alt={`Logo de ${empresa.nombre}`}
                    className="w-32 h-32 rounded-xl border-4 border-blue-500"
                  />
                  {empresa.verificado && (
                    <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Información de la empresa */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold theme-text-primary">{empresa.nombre}</h2>
                  {empresa.verificado && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Verificado
                    </span>
                  )}
                </div>

                <p className="theme-text-secondary text-lg mb-4">{empresa.sector}</p>
                <p className="theme-text-primary mb-6">{empresa.descripcion}</p>

                {/* Información de contacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 theme-text-secondary" />
                    <span className="theme-text-primary">RUC: {empresa.ruc}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 theme-text-secondary" />
                    <span className="theme-text-primary">{empresa.ubicacion}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 theme-text-secondary" />
                    <span className="theme-text-primary">{empresa.telefono}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 theme-text-secondary" />
                    <span className="theme-text-primary">{empresa.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 theme-text-secondary" />
                    <span className="theme-text-primary">{empresa.website}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 theme-text-secondary" />
                    <span className="theme-text-primary">{empresa.empleados} empleados</span>
                  </div>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="flex-shrink-0">
                <div className="theme-card-gradient rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex">{renderStars(Math.floor(empresa.rating))}</div>
                    <span className="text-2xl font-bold theme-text-primary">{empresa.rating}</span>
                  </div>
                  <p className="theme-text-secondary">{empresa.totalReviews} reseñas</p>
                  <div className="mt-4 pt-4 border-t theme-border">
                    <p className="theme-text-secondary text-sm">Miembro desde</p>
                    <p className="theme-text-primary font-semibold">{empresa.fechaRegistro}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto Actual */}
          <div className="theme-card rounded-xl p-8 mb-8 theme-border">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold theme-text-primary">Proyecto Actual</h3>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {proyectoActual.estado}
              </span>
            </div>

            <div className="theme-bg-secondary rounded-lg p-6">
              <h4 className="text-xl font-semibold theme-text-primary mb-3">{proyectoActual.titulo}</h4>
              <p className="theme-text-primary mb-4">{proyectoActual.descripcion}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="theme-text-secondary text-sm">Presupuesto</p>
                  <p className="theme-text-primary font-semibold">{proyectoActual.presupuesto}</p>
                </div>
                <div>
                  <p className="theme-text-secondary text-sm">Fecha límite</p>
                  <p className="theme-text-primary font-semibold">{proyectoActual.fechaLimite}</p>
                </div>
                <div>
                  <p className="theme-text-secondary text-sm">Estado</p>
                  <p className="theme-text-primary font-semibold">{proyectoActual.estado}</p>
                </div>
              </div>

              <div>
                <p className="theme-text-secondary text-sm mb-2">Habilidades requeridas:</p>
                <div className="flex flex-wrap gap-2">
                  {proyectoActual.habilidades.map((skill, index) => (
                    <span key={index} className="theme-chip px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Servicios Contratados */}
          <div className="theme-card rounded-xl p-8 theme-border">
            <h3 className="text-2xl font-bold theme-text-primary mb-6">Servicios Contratados Anteriormente</h3>
            
            <div className="space-y-6">
              {serviciosContratados.map((servicio) => (
                <div key={servicio.id} className="theme-bg-secondary rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-semibold theme-text-primary">{servicio.titulo}</h4>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {servicio.estado}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 theme-text-secondary" />
                          <span className="theme-text-primary font-medium">{servicio.estudiante}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 theme-text-secondary" />
                          <span className="theme-text-secondary">{servicio.fecha}</span>
                        </div>
                      </div>
                      
                      <p className="theme-text-primary">{servicio.comentario}</p>
                    </div>
                    
                    <div className="flex-shrink-0 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        {renderStars(servicio.rating)}
                      </div>
                      <p className="theme-text-secondary text-sm">{servicio.rating}/5</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpresaProfile;