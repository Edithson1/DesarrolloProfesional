import React from 'react';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const stats = [
    { number: "500+", label: "Estudiantes Activos" },
    { number: "150+", label: "Empresas Aliadas" },
    { number: "85%", label: "Tasa de Éxito" },
    { number: "24/7", label: "Soporte Disponible" }
  ];
  const features = [
    {
      icon: Users,
      title: "Networking Profesional",
      description: "Conecta con profesionales de tu área y construye relaciones valiosas para tu carrera."
    },
    {
      icon: Briefcase,
      title: "Experiencia Real",
      description: "Trabaja en proyectos reales con empresas establecidas y gana experiencia práctica."
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Obtén certificaciones reconocidas que validen tus habilidades y conocimientos."
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Profesional",
      description: "Acelera tu desarrollo profesional con mentoría y oportunidades de crecimiento."
    }
  ];

  return (
    <>
      <section className="py-20 theme-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="theme-subtext font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 theme-bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué elegir{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                INTERNLINK?
              </span>
            </h2>
            <p className="text-xl theme-subtext max-w-3xl mx-auto">
              Ofrecemos una plataforma integral que conecta estudiantes talentosos con empresas innovadoras,
              creando oportunidades de crecimiento mutuo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 theme-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 theme-border"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 theme-text-primary">{feature.title}</h3>
                <p className="theme-subtext">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default FeaturesSection;
