import React, { useState } from 'react';
import { ArrowLeft, User, Building, GraduationCap, Briefcase, X, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = ({ userData, setUserData}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    rol: 'estudiante',
    // Campos comunes
    nombre: '',
    correo: '',
    contrasena: '',
    telefono: '',
    // Campos específicos para estudiantes
    universidad: '',
    carrera: '',
    semestre: '',
    añoGraduacion: '',
    habilidades: [],
    experienciaPracticas: '',
    // Campos específicos para empresas
    razonSocial: '',
    ruc: '',
    sector: '',
    tamañoEmpresa: '',
    ubicacion: '',
    descripcionEmpresa: '',
    sitioWeb: '',
    personaContacto: '',
    cargoContacto: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const habilidadesDisponibles = [
    'Python', 'JavaScript', 'Java', 'C++', 'C#', 'React', 'Angular', 'Vue.js',
    'Node.js', 'Express', 'Django', 'Flask', 'Spring Boot', 'SQL', 'MySQL',
    'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'Azure', 'Google Cloud',
    'HTML', 'CSS', 'Sass', 'Bootstrap', 'Tailwind CSS', 'TypeScript', 'PHP',
    'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin', 'Flutter', 'React Native',
    'Unity', 'Unreal Engine', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator'
  ];

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'nombre':
        if (!value.trim()) {
          newErrors[name] = 'Este campo es obligatorio';
        } else {
          delete newErrors[name];
        }
        break;

      case 'correo':
        if (!value.trim()) {
          newErrors[name] = 'Este campo es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[name] = 'Ingresa un correo válido';
        } else {
          delete newErrors[name];
        }
        break;

      case 'contrasena':
        if (!value) {
          newErrors[name] = 'Este campo es obligatorio';
        } else if (value.length < 8) {
          newErrors[name] = 'Debe tener al menos 8 caracteres';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value)) {
          newErrors[name] = 'Debe tener al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo especial';
        } else {
          delete newErrors[name];
        }
        break;

      case 'telefono':
        if (!value.trim()) {
          newErrors[name] = 'Este campo es obligatorio';
        } else if (!/^9\d{8}$/.test(value)) {
          newErrors[name] = 'Debe comenzar con 9 y tener 9 dígitos';
        } else {
          delete newErrors[name];
        }
        break;

      case 'universidad':
      case 'carrera':
      case 'semestre':
      case 'añoGraduacion':
        if (form.rol === 'estudiante' && !value) {
          newErrors[name] = 'Este campo es obligatorio';
        } else {
          delete newErrors[name];
        }
        break;

      case 'ruc':
        if (form.rol === 'empresa' && !value.trim()) {
          newErrors[name] = 'Este campo es obligatorio';
        } else if (form.rol === 'empresa' && !/^\d{11}$/.test(value)) {
          newErrors[name] = 'El RUC debe tener 11 dígitos';
        } else {
          delete newErrors[name];
        }
        break;

      case 'sector':
      case 'tamañoEmpresa':
      case 'ubicacion':
      case 'descripcionEmpresa':
      case 'personaContacto':
      case 'cargoContacto':
        if (form.rol === 'empresa' && !value) {
          newErrors[name] = 'Este campo es obligatorio';
        } else {
          delete newErrors[name];
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  const handleHabilidadSelect = (e) => {
    const habilidad = e.target.value;
    if (habilidad && !form.habilidades.includes(habilidad)) {
      setForm({ ...form, habilidades: [...form.habilidades, habilidad] });
    }
    e.target.value = '';
  };

  const removeHabilidad = (habilidadToRemove) => {
    setForm({
      ...form,
      habilidades: form.habilidades.filter(h => h !== habilidadToRemove)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    const fieldsToValidate = ['nombre', 'correo', 'contrasena', 'telefono'];
    if (form.rol === 'estudiante') {
      fieldsToValidate.push('universidad', 'carrera', 'semestre', 'añoGraduacion');
    } else {
      fieldsToValidate.push('ruc', 'sector', 'tamañoEmpresa', 'ubicacion', 'descripcionEmpresa', 'personaContacto', 'cargoContacto');
    }

    // Validación sincronizada
    fieldsToValidate.forEach((field) => {
      const value = form[field];
      switch (field) {
        case 'nombre':
          if (!value.trim()) newErrors[field] = 'Este campo es obligatorio';
          break;
        case 'correo':
          if (!value.trim()) newErrors[field] = 'Este campo es obligatorio';
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors[field] = 'Correo inválido';
          break;
        case 'contrasena':
          if (!value) newErrors[field] = 'Este campo es obligatorio';
          else if (value.length < 8) newErrors[field] = 'Mínimo 8 caracteres';
          else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value))
            newErrors[field] = 'Debe incluir mayúscula, minúscula, número y símbolo';
          break;
        case 'telefono':
          if (!/^9\d{8}$/.test(value)) newErrors[field] = 'Debe comenzar con 9 y tener 9 dígitos';
          break;
        case 'ruc':
          if (!/^\\d{11}$/.test(value)) newErrors[field] = 'El RUC debe tener 11 dígitos';
          break;
        default:
          if (!value || value === '') newErrors[field] = 'Este campo es obligatorio';
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (setUserData) {
        setUserData(form);
        navigate('/dashboard');
      }
      console.log('Formulario válido:', form);
    } else {
      console.warn('Errores encontrados:', newErrors);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Header */}
      <header className="theme-header p-4 shadow-md">
        <button
          className="flex items-center text-sm theme-text-primary hover:theme-link-hover transition-colors"
          onClick={() => navigate('/inicio')}
        >
          <ArrowLeft className="mr-2" size={20} />
          Volver al inicio
        </button>
      </header>

      {/* Formulario */}
      <div className="flex items-center justify-center px-4 py-8">
        <div className="theme-glass-card w-full max-w-2xl p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold theme-text-primary mb-2">Crear Cuenta</h1>
            <p className="theme-text-secondary">Complete la información para unirse a nuestra plataforma</p>
          </div>

          <div className="space-y-6">
            {/* Selector de rol */}
            <div className="theme-rol-container p-4 rounded-xl">
              <label className="block text-sm font-medium theme-text-primary mb-3">¿Cómo te quieres registrar?</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`flex-1 p-4 rounded-xl transition-all theme-rol-button ${
                    form.rol === 'estudiante' 
                      ? 'theme-rol-button-active-student' 
                      : 'hover:border-blue-300'
                  }`}
                  onClick={() => setForm({ ...form, rol: 'estudiante' })}
                >
                  <div className="flex flex-col items-center gap-2">
                    <GraduationCap className={`w-8 h-8 ${form.rol === 'estudiante' ? 'theme-rol-icon-student' : 'theme-text-secondary'}`} />
                    <span className={`font-medium ${form.rol === 'estudiante' ? 'theme-rol-text-student' : 'theme-text-primary'}`}>
                      Estudiante
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className={`flex-1 p-4 rounded-xl transition-all theme-rol-button ${
                    form.rol === 'empresa' 
                      ? 'theme-rol-button-active-empresa' 
                      : 'hover:border-purple-300'
                  }`}
                  onClick={() => setForm({ ...form, rol: 'empresa' })}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Building className={`w-8 h-8 ${form.rol === 'empresa' ? 'theme-rol-icon-empresa' : 'theme-text-secondary'}`} />
                    <span className={`font-medium ${form.rol === 'empresa' ? 'theme-rol-text-empresa' : 'theme-text-primary'}`}>
                      Empresa
                    </span>
                  </div>
                </button>
              </div>
            </div>
            {/* Campos comunes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium theme-text-primary mb-2">
                  {form.rol === 'estudiante' ? 'Nombre completo' : 'Razón social'}
                </label>
                <input
                  name="nombre"
                  onChange={handleChange}
                  value={form.nombre}
                  placeholder={form.rol === 'estudiante' ? 'Ej: Juan Pérez García' : 'Ej: Innovación Tech S.A.C.'}
                  className="w-full border theme-border p-3 rounded-lg theme-text-primary bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                  required
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium theme-text-primary mb-2">Correo electrónico</label>
                <input
                  type="email"
                  name="correo"
                  onChange={handleChange}
                  value={form.correo}
                  placeholder={form.rol === 'estudiante' ? 'estudiante@universidad.edu' : 'contacto@empresa.com'}
                  className="w-full border theme-border p-3 rounded-lg theme-text-primary bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                  required
                />
                {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium theme-text-primary mb-2">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="contrasena"
                    onChange={handleChange}
                    value={form.contrasena}
                    placeholder="Mínimo 8 caracteres"
                    className="w-full theme-border theme-text-primary bg-transparent p-3 pr-12 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-300 hover:text-blue-800"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.contrasena && (
                  <p className="text-red-500 text-sm mt-1">{errors.contrasena}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium theme-text-primary mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  onChange={handleChange}
                  value={form.telefono}
                  maxLength={9}
                  pattern="9[0-9]{8}"
                  placeholder="999999999"
                  className="w-full border theme-border p-3 rounded-lg theme-text-primary bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                />
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
              </div>
            </div>

            {/* Campos específicos para estudiantes */}
            {/* Campos específicos para estudiantes */}
            {form.rol === 'estudiante' && (
              <div className="theme-card-gradient p-6 rounded-xl border theme-border">
                <h3 className="text-lg font-semibold theme-text-primary mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Información Académica
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Universidad</label>
                    <input
                      name="universidad"
                      onChange={handleChange}
                      value={form.universidad}
                      placeholder="Ej: Universidad Nacional Mayor de San Marcos"
                      className="w-full p-3 rounded-lg theme-input focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                    {errors.universidad && <p className="text-red-500 text-sm mt-1">{errors.universidad}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Carrera</label>
                    <input
                      name="carrera"
                      onChange={handleChange}
                      value={form.carrera}
                      placeholder="Ej: Ingeniería de Sistemas"
                      className="w-full p-3 rounded-lg theme-input focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                    {errors.carrera && <p className="text-red-500 text-sm mt-1">{errors.carrera}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Semestre actual</label>
                    <select
                      name="semestre"
                      onChange={handleChange}
                      value={form.semestre}
                      className="w-full p-3 rounded-lg theme-select focus:ring-2 focus:ring-blue-500/20"
                      required
                    >
                      <option value="">Seleccionar semestre</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i+1} value={i+1}>{i+1}° Semestre</option>
                      ))}
                    </select>
                    {errors.semestre && <p className="text-red-500 text-sm mt-1">{errors.semestre}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Año de graduación</label>
                    <select
                      name="añoGraduacion"
                      onChange={handleChange}
                      value={form.añoGraduacion}
                      className="w-full p-3 rounded-lg theme-select focus:ring-2 focus:ring-blue-500/20"
                      required
                    >
                      <option value="">Seleccionar año</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    {errors.añoGraduacion && <p className="text-red-500 text-sm mt-1">{errors.añoGraduacion}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium theme-text-primary mb-2">Habilidades técnicas</label>
                    
                    {/* Habilidades seleccionadas */}
                    {form.habilidades.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3 p-3 rounded-lg theme-chip-container">
                        {form.habilidades.map((habilidad, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm theme-chip"
                          >
                            {habilidad}
                            <button
                              type="button"
                              onClick={() => removeHabilidad(habilidad)}
                              className="ml-1 theme-chip-remove hover:opacity-80 transition-opacity"
                            >
                              <X size={14} />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Selector de habilidades */}
                    <select
                      onChange={handleHabilidadSelect}
                      className="w-full p-3 rounded-lg theme-select focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="">Seleccionar habilidad</option>
                      {habilidadesDisponibles
                        .filter(habilidad => !form.habilidades.includes(habilidad))
                        .map(habilidad => (
                          <option key={habilidad} value={habilidad}>{habilidad}</option>
                        ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium theme-text-primary mb-2">Experiencia en prácticas</label>
                    <textarea
                      name="experienciaPracticas"
                      onChange={handleChange}
                      value={form.experienciaPracticas}
                      placeholder="Describe brevemente tu experiencia en prácticas profesionales o proyectos relevantes"
                      rows={3}
                      className="w-full p-3 rounded-lg theme-textarea focus:ring-2 focus:ring-blue-500/20 resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Campos específicos para empresas */}
            {form.rol === 'empresa' && (
              <div className="theme-card-gradient p-6 rounded-xl border theme-border">
                <h3 className="text-lg font-semibold theme-text-primary mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Información Empresarial
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">RUC</label>
                    <input
                      name="ruc"
                      onChange={handleChange}
                      value={form.ruc}
                      placeholder="20123456789"
                      className="w-full p-3 rounded-lg theme-input focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                    {errors.ruc && <p className="text-red-500 text-sm mt-1">{errors.ruc}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Sector</label>
                    <select
                      name="sector"
                      onChange={handleChange}
                      value={form.sector}
                      className="w-full p-3 rounded-lg theme-select focus:ring-2 focus:ring-blue-500/20"
                      required
                    >
                      <option value="">Seleccionar sector</option>
                      <option value="tecnologia">Tecnología</option>
                      <option value="finanzas">Finanzas</option>
                      <option value="salud">Salud</option>
                      <option value="educacion">Educación</option>
                      <option value="retail">Retail</option>
                      <option value="manufactura">Manufactura</option>
                      <option value="servicios">Servicios</option>
                      <option value="construccion">Construcción</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.sector && <p className="text-red-500 text-sm mt-1">{errors.sector}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Tamaño de empresa</label>
                    <select
                      name="tamañoEmpresa"
                      onChange={handleChange}
                      value={form.tamañoEmpresa}
                      className="w-full p-3 rounded-lg theme-select focus:ring-2 focus:ring-blue-500/20"
                      required
                    >
                      <option value="">Seleccionar tamaño</option>
                      <option value="startup">Startup (1-10 empleados)</option>
                      <option value="pequeña">Pequeña (11-50 empleados)</option>
                      <option value="mediana">Mediana (51-250 empleados)</option>
                      <option value="grande">Grande (251+ empleados)</option>
                    </select>
                    {errors.tamañoEmpresa && <p className="text-red-500 text-sm mt-1">{errors.tamañoEmpresa}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Ubicación</label>
                    <input
                      name="ubicacion"
                      onChange={handleChange}
                      value={form.ubicacion}
                      placeholder="Ej: Lima, Perú"
                      className="w-full p-3 rounded-lg theme-input focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                    {errors.ubicacion && <p className="text-red-500 text-sm mt-1">{errors.ubicacion}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Sitio web</label>
                    <input
                      name="sitioWeb"
                      onChange={handleChange}
                      value={form.sitioWeb}
                      placeholder="https://www.empresa.com"
                      className="w-full p-3 rounded-lg theme-input focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Persona de contacto</label>
                    <input
                      name="personaContacto"
                      onChange={handleChange}
                      value={form.personaContacto}
                      placeholder="Ej: María García"
                      className="w-full p-3 rounded-lg theme-input focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                    {errors.personaContacto && <p className="text-red-500 text-sm mt-1">{errors.personaContacto}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-2">Cargo del contacto</label>
                    <input
                      name="cargoContacto"
                      onChange={handleChange}
                      value={form.cargoContacto}
                      placeholder="Ej: Gerente de Recursos Humanos"
                      className="w-full p-3 rounded-lg theme-input focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                    {errors.cargoContacto && <p className="text-red-500 text-sm mt-1">{errors.cargoContacto}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium theme-text-primary mb-2">Descripción de la empresa</label>
                    <textarea
                      name="descripcionEmpresa"
                      onChange={handleChange}
                      value={form.descripcionEmpresa}
                      placeholder="Describe brevemente a qué se dedica tu empresa y qué tipo de practicantes buscan"
                      rows={4}
                      className="w-full p-3 rounded-lg theme-textarea focus:ring-2 focus:ring-blue-500/20 resize-none"
                      required
                    />
                    {errors.descripcionEmpresa && <p className="text-red-500 text-sm mt-1">{errors.descripcionEmpresa}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Botón de envío */}
            <div className="flex justify-center pt-6">
              <button 
                onClick={handleSubmit}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {form.rol === 'estudiante' ? <GraduationCap className="w-5 h-5" /> : <Building className="w-5 h-5" />}
                Registrarse como {form.rol === 'estudiante' ? 'Estudiante' : 'Empresa'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;