import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 theme-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contacta con{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              nosotros
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl theme-card-gradient">
            <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-xl mb-2 theme-text-primary">Email</h3>
            <p className="theme-subtext">info@internlink.upch.pe</p>
          </div>
          <div className="text-center p-8 rounded-2xl theme-card-gradient">
            <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-xl mb-2 theme-text-primary">Teléfono</h3>
            <p className="theme-subtext">+51 1 234 5678</p>
          </div>
          <div className="text-center p-8 rounded-2xl theme-card-gradient">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-xl mb-2 theme-text-primary">Ubicación</h3>
            <p className="theme-subtext">UPCH - Lima, Perú</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
