import React, { useState } from 'react';
import { Star, Award, Calendar, Building, Search, ChevronDown, ChevronUp, Edit3, Shield } from 'lucide-react';

const SistemaCalificaciones = () => {
  const [vistaActual, setVistaActual] = useState('recibidas'); // 'recibidas' | 'enviadas' | 'estadisticas'
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [filtroRating, setFiltroRating] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [calificacionExpandida, setCalificacionExpandida] = useState(null);

  // Datos del usuario actual
  const datosUsuario = {
    nombre: 'Carlos Mendoza',
    tipo: 'estudiante',
    reputacionGeneral: 4.7,
    totalCalificaciones: 24,
    totalProyectos: 18,
    insignias: ['Confiable', 'Comunicativo', 'Entrega a tiempo']
  };

  // Historial de calificaciones recibidas
  const calificacionesRecibidas = [
    {
      id: 1,
      proyecto: 'Sistema de Pedidos Online',
      empresa: 'RestauranteDoña María',
      fechaProyecto: '2024-06-15',
      fechaCalificacion: '2024-06-20',
      rating: 5,
      comentario: 'Excelente trabajo! Carlos superó nuestras expectativas. El sistema quedó perfecto, muy fácil de usar y con todas las funcionalidades que necesitábamos. Comunicación constante durante todo el proyecto.',
      aspectos: {
        calidad: 5,
        comunicacion: 5,
        puntualidad: 5,
        profesionalismo: 5
      },
      tipo: 'desarrollo-web',
      monto: 1200,
      duracion: '3 semanas',
      respondida: true,
      verificada: true
    },
    {
      id: 2,
      proyecto: 'Soporte Técnico Mensual',
      empresa: 'Ferretería El Tornillo',
      fechaProyecto: '2024-05-01',
      fechaCalificacion: '2024-05-30',
      rating: 4,
      comentario: 'Buen servicio técnico. Carlos es muy conocedor y resolvió todos nuestros problemas de red. Solo tuvo un pequeño retraso en una visita, pero se disculpó y lo compensó.',
      aspectos: {
        calidad: 4,
        comunicacion: 4,
        puntualidad: 3,
        profesionalismo: 5
      },
      tipo: 'soporte-ti',
      monto: 600,
      duracion: '1 mes',
      respondida: true,
      verificada: true
    },
    {
      id: 3,
      proyecto: 'App Móvil de Inventario',
      empresa: 'AutoRepuestos Lima',
      fechaProyecto: '2024-04-10',
      fechaCalificacion: '2024-04-25',
      rating: 5,
      comentario: 'Increíble desarrollador! La app funciona perfectamente y ha mejorado mucho nuestro control de inventario. Muy recomendado.',
      aspectos: {
        calidad: 5,
        comunicacion: 5,
        puntualidad: 5,
        profesionalismo: 5
      },
      tipo: 'mobile',
      monto: 1500,
      duracion: '4 semanas',
      respondida: false,
      verificada: true
    },
    {
      id: 4,
      proyecto: 'Consultoría en Seguridad',
      empresa: 'Clínica Dental Sonrisas',
      fechaProyecto: '2024-03-15',
      fechaCalificacion: '2024-03-20',
      rating: 3,
      comentario: 'El trabajo técnico estuvo bien, pero esperábamos más documentación y explicaciones detalladas. Carlos tiene conocimiento pero podría mejorar la comunicación.',
      aspectos: {
        calidad: 4,
        comunicacion: 2,
        puntualidad: 4,
        profesionalismo: 3
      },
      tipo: 'seguridad',
      monto: 800,
      duracion: '2 semanas',
      respondida: true,
      verificada: true
    }
  ];

  // Calificaciones enviadas por el usuario
  const calificacionesEnviadas = [
    {
      id: 5,
      proyecto: 'Desarrollo de Landing Page',
      cliente: 'Boutique Trendy',
      fechaProyecto: '2024-06-01',
      fechaCalificacion: '2024-06-10',
      rating: 4,
      comentario: 'Buena experiencia trabajando con Boutique Trendy. Claros en sus requerimientos y pagos puntuales. Solo hubo algunos cambios de último minuto.',
      aspectos: {
        claridad: 4,
        pago: 5,
        comunicacion: 4,
        profesionalismo: 4
      },
      tipo: 'desarrollo-web',
      monto: 900,
      duracion: '2 semanas'
    },
    {
      id: 6,
      proyecto: 'Sistema de Reservas',
      cliente: 'Hotel Plaza',
      fechaProyecto: '2024-05-15',
      fechaCalificacion: '2024-05-25',
      rating: 5,
      comentario: 'Excelente cliente! Muy profesionales, pagos a tiempo y requerimientos bien definidos. Definitivamente trabajaría con ellos nuevamente.',
      aspectos: {
        claridad: 5,
        pago: 5,
        comunicacion: 5,
        profesionalismo: 5
      },
      tipo: 'desarrollo-web',
      monto: 1800,
      duracion: '5 semanas'
    }
  ];

  const estadisticasDetalladas = {
    porEstrella: {
      5: 12,
      4: 8,
      3: 3,
      2: 1,
      1: 0
    },
    porCategoria: {
      'desarrollo-web': { count: 15, rating: 4.8 },
      'soporte-ti': { count: 5, rating: 4.4 },
      'mobile': { count: 3, rating: 4.9 },
      'seguridad': { count: 1, rating: 3.0 }
    },
    tendencia: [
      { mes: 'Ene', rating: 4.5 },
      { mes: 'Feb', rating: 4.6 },
      { mes: 'Mar', rating: 4.4 },
      { mes: 'Abr', rating: 4.8 },
      { mes: 'May', rating: 4.7 },
      { mes: 'Jun', rating: 4.9 }
    ]
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-500';
    if (rating >= 3.5) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getRatingBg = (rating) => {
    if (rating >= 4.5) return 'bg-green-50 dark:bg-green-900/20';
    if (rating >= 3.5) return 'bg-yellow-50 dark:bg-yellow-900/20';
    return 'bg-red-50 dark:bg-red-900/20';
  };

  const renderStars = (rating, size = 'w-4 h-4') => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const CalificacionCard = ({ calificacion, tipo }) => (
    <div className={`theme-card rounded-xl p-6 theme-border ${getRatingBg(calificacion.rating)}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="font-bold theme-text-primary">{calificacion.proyecto}</h3>
            {calificacion.verificada && (
              <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                <Shield className="w-3 h-3 inline mr-1" />
                Verificada
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4 text-sm theme-text-secondary mb-3">
            <span className="flex items-center">
              <Building className="w-4 h-4 mr-1" />
              {tipo === 'recibidas' ? calificacion.empresa : calificacion.cliente}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {calificacion.fechaCalificacion}
            </span>
            <span className="font-medium text-green-600">
              S/ {calificacion.monto}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-2 mb-2">
            {renderStars(calificacion.rating)}
            <span className={`text-lg font-bold ${getRatingColor(calificacion.rating)}`}>
              {calificacion.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-xs theme-text-secondary">{calificacion.duracion}</span>
        </div>
      </div>

      <p className="theme-text-secondary mb-4 text-sm leading-relaxed">
        "{calificacion.comentario}"
      </p>

      {/* Aspectos detallados */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {Object.entries(calificacion.aspectos).map(([aspecto, rating]) => (
          <div key={aspecto} className="text-center">
            <div className="text-xs theme-text-secondary mb-1 capitalize">
              {aspecto}
            </div>
            <div className="flex items-center justify-center space-x-1">
              {renderStars(rating, 'w-3 h-3')}
              <span className="text-xs font-medium theme-text-primary">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="theme-chip px-2 py-1 rounded-full text-xs">
            {calificacion.tipo}
          </span>
          {tipo === 'recibidas' && !calificacion.respondida && (
            <button className="text-blue-500 hover:text-blue-600 text-xs font-medium">
              Responder
            </button>
          )}
        </div>
        <button 
          onClick={() => setCalificacionExpandida(
            calificacionExpandida === calificacion.id ? null : calificacion.id
          )}
          className="theme-text-secondary hover:theme-text-primary text-xs font-medium flex items-center"
        >
          {calificacionExpandida === calificacion.id ? (
            <>Menos detalles <ChevronUp className="w-3 h-3 ml-1" /></>
          ) : (
            <>Más detalles <ChevronDown className="w-3 h-3 ml-1" /></>
          )}
        </button>
      </div>

      {calificacionExpandida === calificacion.id && (
        <div className="mt-4 pt-4 border-t theme-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium theme-text-primary">Fecha del proyecto:</span>
              <span className="theme-text-secondary ml-2">{calificacion.fechaProyecto}</span>
            </div>
            <div>
              <span className="font-medium theme-text-primary">Duración:</span>
              <span className="theme-text-secondary ml-2">{calificacion.duracion}</span>
            </div>
            <div>
              <span className="font-medium theme-text-primary">Tipo:</span>
              <span className="theme-text-secondary ml-2">{calificacion.tipo}</span>
            </div>
            <div>
              <span className="font-medium theme-text-primary">Monto:</span>
              <span className="theme-text-secondary ml-2">S/ {calificacion.monto}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="theme-bg-primary min-h-screen">
      {/* Header */}
      <div className="theme-header sticky top-0 z-50 border-b theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold theme-text-primary">⭐ Sistema de Calificaciones</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Dejar Reseña
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Resumen de Reputación */}
        <div className="theme-card rounded-xl p-8 mb-8 theme-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold theme-text-primary mb-2">
                {datosUsuario.reputacionGeneral}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(datosUsuario.reputacionGeneral, 'w-6 h-6')}
              </div>
              <div className="text-sm theme-text-secondary">
                Reputación General
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold theme-text-primary mb-2">
                {datosUsuario.totalCalificaciones}
              </div>
              <div className="text-sm theme-text-secondary">
                Total Calificaciones
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold theme-text-primary mb-2">
                {datosUsuario.totalProyectos}
              </div>
              <div className="text-sm theme-text-secondary">
                Proyectos Completados
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-2">
                {datosUsuario.insignias.map(insignia => (
                  <span key={insignia} className="theme-chip px-3 py-1 rounded-full text-xs font-medium">
                    <Award className="w-3 h-3 mr-1" />
                    {insignia}
                  </span>
                ))}
              </div>
              <div className="text-sm theme-text-secondary mt-2">
                Insignias Ganadas
              </div>
            </div>
          </div>
        </div>

        {/* Navegación de Pestañas */}
        <div className="flex space-x-1 mb-6">
          {[
            { id: 'recibidas', label: 'Calificaciones Recibidas', count: calificacionesRecibidas.length },
            { id: 'enviadas', label: 'Calificaciones Enviadas', count: calificacionesEnviadas.length },
            { id: 'estadisticas', label: 'Estadísticas', count: null }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setVistaActual(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                vistaActual === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'theme-btn-outline'
              }`}
            >
              {tab.label}
              {tab.count && (
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Contenido según pestaña seleccionada */}
        {vistaActual === 'estadisticas' ? (
          <div className="space-y-8">
            {/* Distribución por estrellas */}
            <div className="theme-card rounded-xl p-6 theme-border">
              <h3 className="text-lg font-bold theme-text-primary mb-4">
                Distribución de Calificaciones
              </h3>
              <div className="space-y-3">
                {Object.entries(estadisticasDetalladas.porEstrella).reverse().map(([estrella, count]) => (
                  <div key={estrella} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 w-16">
                      <span className="text-sm font-medium theme-text-primary">{estrella}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(count / datosUsuario.totalCalificaciones) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm theme-text-secondary w-8 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rendimiento por categoría */}
            <div className="theme-card rounded-xl p-6 theme-border">
              <h3 className="text-lg font-bold theme-text-primary mb-4">
                Rendimiento por Categoría
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(estadisticasDetalladas.porCategoria).map(([categoria, datos]) => (
                  <div key={categoria} className="theme-bg-secondary rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium theme-text-primary capitalize">
                        {categoria.replace('-', ' ')}
                      </span>
                      <span className={`font-bold ${getRatingColor(datos.rating)}`}>
                        {datos.rating.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      {renderStars(datos.rating)}
                      <span className="text-sm theme-text-secondary">
                        {datos.count} proyectos
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Filtros */}
            <div className="theme-card rounded-xl p-4 mb-6 theme-border">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-64">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 theme-text-secondary" />
                    <input
                      type="text"
                      placeholder="Buscar por proyecto o empresa..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="theme-input w-full pl-10 pr-4 py-2 rounded-lg"
                    />
                  </div>
                </div>
                <select
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value)}
                  className="theme-select px-3 py-2 rounded-lg"
                >
                  <option value="todos">Todos los tipos</option>
                  <option value="desarrollo-web">Desarrollo Web</option>
                  <option value="soporte-ti">Soporte TI</option>
                  <option value="mobile">Apps Móviles</option>
                  <option value="seguridad">Seguridad</option>
                </select>
                <select
                  value={filtroRating}
                  onChange={(e) => setFiltroRating(e.target.value)}
                  className="theme-select px-3 py-2 rounded-lg"
                >
                  <option value="todos">Todas las calificaciones</option>
                  <option value="5">5 estrellas</option>
                  <option value="4">4+ estrellas</option>
                  <option value="3">3+ estrellas</option>
                  <option value="2">2+ estrellas</option>
                </select>
              </div>
            </div>

            {/* Lista de Calificaciones */}
            <div className="space-y-6">
              {(vistaActual === 'recibidas' ? calificacionesRecibidas : calificacionesEnviadas).map(calificacion => (
                <CalificacionCard 
                  key={calificacion.id} 
                  calificacion={calificacion} 
                  tipo={vistaActual}
                />
              ))}
            </div>
          </>
        )}

        {/* Formulario de Nueva Calificación */}
        {mostrarFormulario && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="theme-card rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold theme-text-primary">Dejar Calificación</h3>
                <button 
                  onClick={() => setMostrarFormulario(false)}
                  className="theme-text-secondary hover:theme-text-primary"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">
                    Proyecto/Empresa
                  </label>
                  <select className="theme-select w-full px-3 py-2 rounded-lg">
                    <option>Seleccionar proyecto...</option>
                    <option>Sistema de Ventas - TiendaXYZ</option>
                    <option>App Móvil - RestauranteABC</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">
                    Calificación General
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        className="text-2xl text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        <Star className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">
                    Comentario
                  </label>
                  <textarea
                    className="theme-textarea w-full px-3 py-2 rounded-lg"
                    rows={4}
                    placeholder="Describe tu experiencia trabajando en este proyecto..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">
                      Comunicación
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          className="text-lg text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                          <Star className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">
                      Puntualidad
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          className="text-lg text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                          <Star className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">
                      Calidad
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          className="text-lg text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                          <Star className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">
                      Profesionalismo
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          className="text-lg text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                          <Star className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t theme-border">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setMostrarFormulario(false)}
                      className="flex-1 theme-btn-outline px-4 py-2 rounded-lg font-medium"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Enviar Calificación
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SistemaCalificaciones;