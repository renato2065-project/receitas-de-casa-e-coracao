import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-100 pt-16 pb-8 border-t border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-brand-800">Receitas de</span>
                <span className="font-serif font-bold text-lg leading-none text-brand-600">Casa e Coração</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Compartilhando receitas que aquecem o coração e histórias que alimentam a alma. Da minha cozinha para a sua, com muito amor.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <a href="#" className="text-brand-400 hover:text-brand-600"><span className="sr-only">Instagram</span>📷</a>
              <a href="#" className="text-brand-400 hover:text-brand-600"><span className="sr-only">Facebook</span>📘</a>
              <a href="#" className="text-brand-400 hover:text-brand-600"><span className="sr-only">Pinterest</span>📌</a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-serif font-bold text-brand-900 text-lg mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-brand-600">Início</Link></li>
              <li><Link to="/receitas" className="hover:text-brand-600">Todas as Receitas</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-600">Sobre a Autora</Link></li>
              <li><Link to="/contato" className="hover:text-brand-600">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-serif font-bold text-brand-900 text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/privacidade" className="hover:text-brand-600">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-brand-600">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-serif font-bold text-brand-900 text-lg mb-4">Fique por dentro</h3>
            <p className="text-sm text-gray-600 mb-4">Receba as novidades quentinhas direto no seu e-mail.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-200 focus:border-brand-500 outline-none bg-white text-gray-900"
              />
              <button className="w-full bg-brand-600 text-white font-medium py-2 rounded-md hover:bg-brand-700 transition">
                Inscrever
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-200 pt-8 text-center">
          <p className="text-sm text-gray-500 font-medium">
            © 2025 Receitas de Casa e Coração | Feito com ❤️ e muito carinho por Janara Figueiredo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;