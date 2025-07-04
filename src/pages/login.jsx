import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/button';

const LoginScreen = ({ setUserData }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ correo: '', contrasena: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Lista de usuarios válidos simulados
  const usuariosValidos = [
    { correo: 'estudiante@upch.pe', contrasena: 'Demo1234!' },
    { correo: 'dfgfefw543645@gmail.com', contrasena: 'Aa1@!!!fghfgdf' },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = usuariosValidos.find(
      (u) => u.correo === form.correo && u.contrasena === form.contrasena
    );

    if (usuario) {
      setUserData(usuario);
      navigate('../dashboard');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen theme-bg-primary flex flex-col">
      {/* Header */}
      <header className="flex items-center theme-header p-4 shadow-md">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-sm theme-text-primary hover:underline"
        >
          <ArrowLeft className="mr-2" size={20} />
          Volver al inicio
        </button>
      </header>

      {/* Contenido */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-2xl theme-glass-card shadow-lg border theme-border">
          <h1 className="text-3xl font-bold theme-text-primary mb-6 text-center">
            Iniciar Sesión
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 theme-text-secondary text-sm">Correo institucional</label>
              <input
                type="email"
                name="correo"
                onChange={handleChange}
                placeholder="ejemplo@upch.pe"
                className="w-full p-3 rounded-lg theme-border bg-transparent theme-text-primary placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 theme-text-secondary text-sm">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="contrasena"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full p-3 pr-12 rounded-lg theme-border bg-transparent theme-text-primary placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button type="submit" className="w-full text-lg py-3">Ingresar</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;