import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-700 tracking-wide uppercase">
          {recipe.category.join(' / ')}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif font-bold text-xl text-gray-800 mb-2 leading-tight group-hover:text-brand-600 transition-colors">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3">
          <div className="flex items-center">
            <span className="mr-1">🕒</span> {recipe.prepTime}
          </div>
          <div className="flex items-center">
            <span className="mr-1">📊</span> {recipe.difficulty}
          </div>
        </div>
        <Link
          to={`/receita/${recipe.slug}`}
          className="block w-full text-center bg-brand-50 text-brand-700 font-semibold py-2 rounded-md hover:bg-brand-100 transition-colors"
        >
          Ver Receita Completa
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;