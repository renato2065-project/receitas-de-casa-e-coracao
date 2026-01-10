import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types';

interface SidebarProps {
  relatedRecipes: Recipe[];
}

const Sidebar: React.FC<SidebarProps> = ({ relatedRecipes }) => {
  return (
    <div className="sticky top-24 space-y-8">
      {/* AUTHOR WIDGET */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm text-center">
        <img
          src="/assets/receitas-de-casa-janara2.jpg"
          alt="Janara"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-200 object-cover"
        />
        <h3 className="font-serif font-bold text-lg text-gray-900">Oi, sou a Janara!</h3>
        <p className="text-sm text-gray-500 mt-2 mb-4">Compartilhando amor em forma de comida.</p>
        <Link to="/sobre" className="text-brand-600 font-bold text-sm hover:underline">Ler Mais</Link>
      </div>

      {/* RELATED RECIPES */}
      <div>
        <h3 className="font-serif font-bold text-gray-900 mb-4 border-b border-brand-200 pb-2">Você Também Vai Amar</h3>
        <div className="space-y-4">
          {relatedRecipes.map(rel => (
            <Link key={rel.id} to={`/receita/${rel.slug}`} className="flex gap-4 group">
              <img src={rel.image} alt={rel.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 text-sm leading-tight group-hover:text-brand-600 transition-colors mb-1">{rel.title}</h4>
                <span className="text-xs text-gray-500">{rel.category.join(' / ')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
