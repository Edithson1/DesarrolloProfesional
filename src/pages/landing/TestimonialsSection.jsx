import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María García",
      role: "Estudiante de Ingeniería",
      company: "UPCH",
      text: "Gracias a INTERNLINK conseguí mi primera práctica profesional en una startup tecnológica. La experiencia fue increíble.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "CEO",
      company: "Tech Solutions",
      text: "Encontramos talento excepcional a través de INTERNLINK. Los estudiantes vienen muy bien preparados.",
      rating: 5
    },
    {
      name: "Ana López",
      role: "Estudiante de Marketing",
      company: "UPCH",
      text: "La plataforma me ayudó a crear un portafolio profesional y conectar con empresas de renombre.",
      rating: 5
    }
  ];

  return (
      <><section className="py-20 theme-bg-primary">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      Lo que dicen nuestros{' '}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          usuarios
                      </span>
                  </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                      <div
                          key={index}
                          className="theme-card backdrop-blur-sm p-8 rounded-2xl shadow-lg"
                      >
                          <div className="flex items-center mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                      key={i}
                                      className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                          </div>
                          <p className="theme-subtext mb-6">"{testimonial.text}"</p>
                          <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                  {testimonial.name[0]}
                              </div>
                              <div>
                                  <div className="font-bold theme-text-primary">{testimonial.name}</div>
                                  <div className="text-sm theme-subtext">
                                      {testimonial.role} - {testimonial.company}
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section><section className="py-20 theme-bg-secondary">
              <div className="container mx-auto px-6 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 theme-text-primary">
                      ¿Listo para impulsar tu carrera?
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto theme-subtext">
                      Únete a miles de estudiantes y empresas que ya están construyendo el futuro profesional.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
                          Comenzar Ahora
                      </button>
                      <button className="px-8 py-4 rounded-xl font-semibold theme-btn-outline">
                        Saber Más
                      </button>
                  </div>
              </div>
          </section></>
  );
};

export default TestimonialsSection;