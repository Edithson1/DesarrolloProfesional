import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Activity, 
  Edit3, 
  Save,  
  Eye, 
  EyeOff, 
  Moon, 
  Sun, 
  Mail, 
  Calendar,
  Shield,
  Trash2,
  Download
} from 'lucide-react';

const ConfiguracionCuenta = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Estados para datos personales
  const [personalData, setPersonalData] = useState({
    nombre: 'Juan Carlos',
    apellido: 'Mendoza Rivera',
    email: 'juan.mendoza@internlink.pe',
    telefono: '+51 987 654 321',
    ubicacion: 'Lima, Perú',
    fechaNacimiento: '1999-05-15',
    carrera: 'Ingeniería de Sistemas',
    universidad: 'Universidad Nacional Mayor de San Marcos',
    biografia: 'Estudiante de 5to ciclo especializado en desarrollo web y móvil. Apasionado por la tecnología y el emprendimiento.'
  });

  // Estados para notificaciones
  const [notifications, setNotifications] = useState({
    email: {
      nuevosProyectos: true,
      mensajes: true,
      calificaciones: true,
      recordatorios: false
    },
    push: {
      nuevosProyectos: false,
      mensajes: true,
      calificaciones: true,
      recordatorios: true
    }
  });

  // Historial de actividad simulado
  const [activityHistory] = useState([
    { id: 1, tipo: 'proyecto', descripcion: 'Completaste el proyecto "E-commerce para PetShop"', fecha: '2024-07-03', hora: '14:30' },
    { id: 2, tipo: 'calificacion', descripcion: 'Recibiste una calificación de 5 estrellas de TechSolutions SAC', fecha: '2024-07-02', hora: '10:15' },
    { id: 3, tipo: 'mensaje', descripcion: 'Nuevo mensaje de DataCorp EIRL', fecha: '2024-07-01', hora: '16:45' },
    { id: 4, tipo: 'proyecto', descripcion: 'Aplicaste al proyecto "Sistema de Inventario"', fecha: '2024-06-30', hora: '09:20' },
    { id: 5, tipo: 'perfil', descripcion: 'Actualizaste tu portafolio con 3 nuevos proyectos', fecha: '2024-06-29', hora: '13:10' },
    { id: 6, tipo: 'calificacion', descripcion: 'Calificaste a InnovaLima con 4 estrellas', fecha: '2024-06-28', hora: '11:30' }
  ]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handlePersonalDataChange = (field, value) => {
    setPersonalData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (category, type) => {
    setNotifications(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [type]: !prev[category][type]
      }
    }));
  };

  const getActivityIcon = (tipo) => {
    switch(tipo) {
      case 'proyecto': return <Activity className="w-4 h-4 text-blue-500" />;
      case 'calificacion': return <Shield className="w-4 h-4 text-green-500" />;
      case 'mensaje': return <Mail className="w-4 h-4 text-purple-500" />;
      case 'perfil': return <User className="w-4 h-4 text-orange-500" />;
      default: return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const exportData = () => {
    const dataToExport = {
      personalData,
      notifications,
      activityHistory: activityHistory.slice(0, 10) // Últimas 10 actividades
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `internlink-datos-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="w-64 theme-card theme-border border-r min-h-screen">
          <div className="sidebar-header">
            <h1 className="theme-text-primary">Configuración</h1>
          </div>
          
          <nav className="sidebar-nav">
            <button
              onClick={() => setActiveTab('personal')}
              className={`navigation-button ${activeTab === 'personal' ? 'active' : ''}`}
            >
              <User className="w-5 h-5" />
              Datos Personales
            </button>
            
            <button
              onClick={() => setActiveTab('notifications')}
              className={`navigation-button ${activeTab === 'notifications' ? 'active' : ''}`}
            >
              <Bell className="w-5 h-5" />
              Notificaciones
            </button>
            
            <button
              onClick={() => setActiveTab('activity')}
              className={`navigation-button ${activeTab === 'activity' ? 'active' : ''}`}
            >
              <Activity className="w-5 h-5" />
              Historial
            </button>
            
            <button
              onClick={() => setActiveTab('security')}
              className={`navigation-button ${activeTab === 'security' ? 'active' : ''}`}
            >
              <Shield className="w-5 h-5" />
              Seguridad
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 theme-bg-primary">
          {/* Header */}
          <div className="theme-header sticky top-0 z-10 px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold theme-text-primary">Configuración de Cuenta</h1>
              <p className="theme-text-secondary">Gestiona tu perfil y preferencias</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={exportData}
                className="flex items-center gap-2 px-4 py-2 theme-outline-button rounded-lg text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Exportar Datos
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg theme-card hover:opacity-80 transition-opacity"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Datos Personales */}
            {activeTab === 'personal' && (
              <div className="max-w-4xl mx-auto">
                <div className="theme-card rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold theme-text-primary">Información Personal</h2>
                    <button
                      onClick={() => setEditingPersonal(!editingPersonal)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      {editingPersonal ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                      {editingPersonal ? 'Guardar' : 'Editar'}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium theme-text-secondary mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={personalData.nombre}
                        onChange={(e) => handlePersonalDataChange('nombre', e.target.value)}
                        disabled={!editingPersonal}
                        className="w-full px-3 py-2 theme-input rounded-lg disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium theme-text-secondary mb-2">
                        Apellido
                      </label>
                      <input
                        type="text"
                        value={personalData.apellido}
                        onChange={(e) => handlePersonalDataChange('apellido', e.target.value)}
                        disabled={!editingPersonal}
                        className="w-full px-3 py-2 theme-input rounded-lg disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium theme-text-secondary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={personalData.email}
                        onChange={(e) => handlePersonalDataChange('email', e.target.value)}
                        disabled={!editingPersonal}
                        className="w-full px-3 py-2 theme-input rounded-lg disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium theme-text-secondary mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={personalData.telefono}
                        onChange={(e) => handlePersonalDataChange('telefono', e.target.value)}
                        disabled={!editingPersonal}
                        className="w-full px-3 py-2 theme-input rounded-lg disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium theme-text-secondary mb-2">
                        Ubicación
                      </label>
                      <input
                        type="text"
                        value={personalData.ubicacion}
                        onChange={(e) => handlePersonalDataChange('ubicacion', e.target.value)}
                        disabled={!editingPersonal}
                        className="w-full px-3 py-2 theme-input rounded-lg disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium theme-text-secondary mb-2">
                        Fecha de Nacimiento
                      </label>
                      <input
                        type="date"
                        value={personalData.fechaNacimiento}
                        onChange={(e) => handlePersonalDataChange('fechaNacimiento', e.target.value)}
                        disabled={!editingPersonal}
                        className="w-full px-3 py-2 theme-input rounded-lg disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium theme-text-secondary mb-2">
                        Carrera
                      </label>
                      <input
                        type="text"
                        value={personalData.carrera}
                        onChange={(e) => handlePersonalDataChange('carrera', e.target.value)}
                        disabled={!editingPersonal}
                        className="w-full px-3 py-2 theme-input rounded-lg disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium theme-text-secondary mb-2">
                        Universidad
                      </label>
                      <input
                        type="text"
                        value={personalData.universidad}
                        onChange={(e) => handlePersonalDataChange('universidad', e.target.value)}
                        disabled={!editingPersonal}
                        className="w-full px-3 py-2 theme-input rounded-lg disabled:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium theme-text-secondary mb-2">
                      Biografía
                    </label>
                    <textarea
                      value={personalData.biografia}
                      onChange={(e) => handlePersonalDataChange('biografia', e.target.value)}
                      disabled={!editingPersonal}
                      rows={4}
                      className="w-full px-3 py-2 theme-textarea rounded-lg disabled:opacity-50"
                      placeholder="Cuéntanos sobre ti, tus intereses y experiencia..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notificaciones */}
            {activeTab === 'notifications' && (
              <div className="max-w-4xl mx-auto">
                <div className="theme-card rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-semibold theme-text-primary mb-6">Preferencias de Notificaciones</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium theme-text-primary mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Notificaciones por Email
                      </h3>
                      <div className="space-y-4">
                        {Object.entries(notifications.email).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between p-3 theme-bg-secondary rounded-lg">
                            <div>
                              <span className="font-medium theme-text-primary">
                                {key === 'nuevosProyectos' && 'Nuevos proyectos disponibles'}
                                {key === 'mensajes' && 'Mensajes de empresas'}
                                {key === 'calificaciones' && 'Calificaciones recibidas'}
                                {key === 'recordatorios' && 'Recordatorios de deadlines'}
                              </span>
                              <p className="text-sm theme-text-secondary">
                                {key === 'nuevosProyectos' && 'Recibe notificaciones cuando haya nuevos proyectos que coincidan con tu perfil'}
                                {key === 'mensajes' && 'Notificaciones inmediatas de mensajes importantes'}
                                {key === 'calificaciones' && 'Te informamos cuando recibas una nueva calificación'}
                                {key === 'recordatorios' && 'Recordatorios de fechas límite de proyectos'}
                              </p>
                            </div>
                            <button
                              onClick={() => handleNotificationChange('email', key)}
                              className={`w-12 h-6 rounded-full transition-colors ${
                                value ? 'bg-blue-500' : 'bg-gray-300'
                              }`}
                            >
                              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                value ? 'translate-x-7' : 'translate-x-1'
                              }`} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium theme-text-primary mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5" />
                        Notificaciones Push
                      </h3>
                      <div className="space-y-4">
                        {Object.entries(notifications.push).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between p-3 theme-bg-secondary rounded-lg">
                            <div>
                              <span className="font-medium theme-text-primary">
                                {key === 'nuevosProyectos' && 'Nuevos proyectos disponibles'}
                                {key === 'mensajes' && 'Mensajes de empresas'}
                                {key === 'calificaciones' && 'Calificaciones recibidas'}
                                {key === 'recordatorios' && 'Recordatorios de deadlines'}
                              </span>
                              <p className="text-sm theme-text-secondary">
                                {key === 'nuevosProyectos' && 'Notificaciones push en tiempo real'}
                                {key === 'mensajes' && 'Alertas instantáneas en tu dispositivo'}
                                {key === 'calificaciones' && 'Notificaciones inmediatas de calificaciones'}
                                {key === 'recordatorios' && 'Recordatorios antes de fechas límite'}
                              </p>
                            </div>
                            <button
                              onClick={() => handleNotificationChange('push', key)}
                              className={`w-12 h-6 rounded-full transition-colors ${
                                value ? 'bg-blue-500' : 'bg-gray-300'
                              }`}
                            >
                              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                value ? 'translate-x-7' : 'translate-x-1'
                              }`} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Historial de Actividad */}
            {activeTab === 'activity' && (
              <div className="max-w-4xl mx-auto">
                <div className="theme-card rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-semibold theme-text-primary mb-6">Historial de Actividad</h2>
                  
                  <div className="space-y-4">
                    {activityHistory.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-4 p-4 theme-bg-secondary rounded-lg">
                        <div className="flex-shrink-0 mt-1">
                          {getActivityIcon(activity.tipo)}
                        </div>
                        <div className="flex-1">
                          <p className="theme-text-primary font-medium">{activity.descripcion}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm theme-text-secondary">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {activity.fecha}
                            </span>
                            <span>{activity.hora}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button className="theme-outline-button px-6 py-2 rounded-lg text-sm font-medium">
                      Cargar más actividades
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Seguridad */}
            {activeTab === 'security' && (
              <div className="max-w-4xl mx-auto">
                <div className="theme-card rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-semibold theme-text-primary mb-6">Seguridad y Privacidad</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium theme-text-primary mb-4">Cambiar Contraseña</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium theme-text-secondary mb-2">
                            Contraseña Actual
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              className="w-full px-3 py-2 theme-input rounded-lg pr-10"
                              placeholder="Ingresa tu contraseña actual"
                            />
                            <button
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-2.5 theme-text-secondary hover:theme-text-primary"
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium theme-text-secondary mb-2">
                            Nueva Contraseña
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 theme-input rounded-lg"
                            placeholder="Ingresa tu nueva contraseña"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium theme-text-secondary mb-2">
                            Confirmar Nueva Contraseña
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 theme-input rounded-lg"
                            placeholder="Confirma tu nueva contraseña"
                          />
                        </div>
                        
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                          Actualizar Contraseña
                        </button>
                      </div>
                    </div>
                    
                    <hr className="theme-border" />
                    
                    <div>
                      <h3 className="text-lg font-medium theme-text-primary mb-4">Sesiones Activas</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 theme-bg-secondary rounded-lg">
                          <div>
                            <p className="font-medium theme-text-primary">Navegador Actual</p>
                            <p className="text-sm theme-text-secondary">Chrome en Windows • Lima, Perú</p>
                          </div>
                          <span className="text-sm text-green-500 font-medium">Activa</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 theme-bg-secondary rounded-lg">
                          <div>
                            <p className="font-medium theme-text-primary">Dispositivo Móvil</p>
                            <p className="text-sm theme-text-secondary">Safari en iPhone • Hace 2 días</p>
                          </div>
                          <button className="text-sm text-red-500 hover:text-red-700">
                            Cerrar Sesión
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <hr className="theme-border" />
                    
                    <div>
                      <h3 className="text-lg font-medium theme-text-primary mb-4 text-red-600">Zona de Peligro</h3>
                      <div className="space-y-4">
                        <div className="p-4 border border-red-300 rounded-lg bg-red-50 dark:bg-red-900/20">
                          <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Eliminar Cuenta</h4>
                          <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                            Una vez que elimines tu cuenta, no podrás recuperarla. Todos tus datos, proyectos y calificaciones se perderán permanentemente.
                          </p>
                          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                            Eliminar mi cuenta
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracionCuenta;