import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { RECIPES, CATEGORIES } from '../constants';

const AllRecipes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);

  useEffect(() => {
    setSelectedCategory(searchParams.get('category'));
  }, [searchParams]);

  const handleCategoryChange = (categoryName: string | null) => {
    setSelectedCategory(categoryName);
    if (categoryName) {
      setSearchParams({ category: categoryName });
    } else {
      setSearchParams({});
    }
  };

  const filteredRecipes = RECIPES.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? recipe.category.includes(selectedCategory) : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-warm-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-brand-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Todas as Receitas</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Explore nosso livro de receitas digital. Do café da manhã ao jantar especial, encontre o prato perfeito para hoje.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">

          {/* Categories Scroll */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="flex space-x-2">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${selectedCategory === null
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-brand-50 border border-gray-200'
                  }`}
              >
                Todas
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${selectedCategory === cat.name
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-brand-50 border border-gray-200'
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-1/3 relative">
            <input
              type="text"
              placeholder="Buscar receita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent shadow-sm bg-white text-gray-900"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Results Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-6xl mb-4">🍳</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ops! Nenhuma receita encontrada.</h3>
            <p className="text-gray-500">
              Tente buscar por outro termo ou selecione outra categoria.
            </p>
            <button
              onClick={() => { setSearchTerm(''); handleCategoryChange(null); }}
              className="mt-6 text-brand-600 font-bold hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRecipes;