import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="font-bold text-white mb-4">OneMore!</h3>
            <p className="text-sm mb-4">
              Tu tienda especializada en suplementos deportivos de calidad para alcanzar tus objetivos.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-white mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categorias/proteina" className="hover:text-blue-400 transition-colors">
                  Proteínas
                </Link>
              </li>
              <li>
                <Link to="/categorias/creatina" className="hover:text-blue-400 transition-colors">
                  Creatina
                </Link>
              </li>
              <li>
                <Link to="/categorias/pre-workout" className="hover:text-blue-400 transition-colors">
                  Pre-Workout
                </Link>
              </li>
              <li>
                <Link to="/categorias/accesorios" className="hover:text-blue-400 transition-colors">
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="font-bold text-white mb-4">Ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Envíos y Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Métodos de Pago
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="text-yellow-400 font-medium">Aviso Importante:</p>
              <p className="text-xs mt-1">
                Este sitio solo proporciona información técnica. Consulta a un profesional antes de usar suplementos.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 OneMore! Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};