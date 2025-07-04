import React from 'react';
import { ArrowRight, Briefcase, CheckCircle, Globe, Award } from 'lucide-react';

const HeroSection = () => {
  const CardItem = ({ icon, title, description, gradient }) => (
  <div className="flex items-center space-x-4">
    <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center`}>
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg theme-text-primary">{title}</h3>
      <p className="theme-subtext">{description}</p>
    </div>
  </div>
);
  return (
    <div className="container mx-auto px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 theme-chip text-sm font-medium">
              🚀 Plataforma Líder en Prácticas Profesionales
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight theme-text-primary">
              Conecta{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                talento joven
              </span>{' '}
              con empresas reales
            </h1>
            <p className="text-xl theme-subtext leading-relaxed">
              La plataforma que revoluciona la forma en que los estudiantes encuentran oportunidades profesionales y las empresas descubren nuevo talento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <span>Soy Estudiante</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 theme-outline-button rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Soy Empresa</span>
              <Briefcase className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <div>
              <div className="font-bold text-lg theme-text-primary">+500 estudiantes</div>
              <div className="theme-subtext">ya conectados</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative theme-glass-card rounded-3xl p-8 theme-border">
            <div className="space-y-6">
              <CardItem
                icon={<CheckCircle className="w-8 h-8 text-white" />}
                title="Perfil Verificado"
                description="Sistema de verificación robusto"
                gradient="from-green-400 to-blue-500"
              />
              <CardItem
                icon={<Globe className="w-8 h-8 text-white" />}
                title="Alcance Global"
                description="Oportunidades internacionales"
                gradient="from-purple-400 to-pink-500"
              />
              <CardItem
                icon={<Award className="w-8 h-8 text-white" />}
                title="Certificaciones"
                description="Reconocimiento oficial"
                gradient="from-orange-400 to-red-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
