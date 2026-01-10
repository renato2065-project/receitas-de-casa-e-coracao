import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RECIPES } from '../constants';
import RecipeCard from '../components/RecipeCard';
import Sidebar from '../components/Sidebar';

const RecipePost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    // In a real app, use slug to fetch. Here we find by slug or default to first if mock match fails
    const recipe = RECIPES.find(r => r.slug === slug) || RECIPES[0];
    const relatedRecipes = RECIPES.filter(r => r.id !== recipe.id).slice(0, 3);

    if (!recipe) return <div>Receita não encontrada</div>;

    return (
        <div className="bg-white">
            {/* HEADER */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-bold uppercase tracking-wide mb-4">
                        {recipe.category.join(' / ')}
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {recipe.title}
                    </h1>
                    <p className="text-xl text-gray-600 font-light italic">
                        {recipe.description}
                    </p>
                </div>

                {/* METADATA */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-600 border-t border-b border-gray-100 py-6 mb-8">
                    <div className="text-center">
                        <span className="block text-2xl mb-1">⏱️</span>
                        <span className="font-bold text-sm uppercase">Tempo</span>
                        <span className="block text-brand-600 font-semibold">{recipe.prepTime}</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-2xl mb-1">🍽️</span>
                        <span className="font-bold text-sm uppercase">Rendimento</span>
                        <span className="block text-brand-600 font-semibold">{recipe.servings || 'Indefinido'}</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-2xl mb-1">📊</span>
                        <span className="font-bold text-sm uppercase">Dificuldade</span>
                        <span className="block text-brand-600 font-semibold">{recipe.difficulty}</span>
                    </div>
                </div>

                {/* HERO IMAGE */}
                <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-[400px] md:h-[500px] object-cover" />
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        {/* STORYTELLING */}
                        <div className="prose prose-lg text-gray-700 mb-12">
                            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-brand-500 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                                {recipe.story || "Esta receita tem um lugar especial no meu coração. É perfeita para aqueles dias em que precisamos de um conforto extra."}
                            </p>
                        </div>

                        {/* INGREDIENTS */}
                        <div className="bg-warm-50 p-8 rounded-2xl border border-warm-100 mb-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-brand-500 text-white rounded-full p-2 mr-3 text-sm">📝</span>
                                Ingredientes Que Você Vai Precisar
                            </h2>
                            <ul className="space-y-3">
                                {recipe.ingredients?.map((ing, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="w-2 h-2 mt-2.5 bg-brand-400 rounded-full mr-3 shrink-0"></span>
                                        <span className="text-gray-700 font-medium">{ing}</span>
                                    </li>
                                )) || <li>Ingredientes indisponíveis para demonstração.</li>}
                            </ul>
                        </div>

                        {/* STEPS */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                <span className="bg-brand-500 text-white rounded-full p-2 mr-3 text-sm">🍳</span>
                                Passo a Passo (Mais Fácil Impossível!)
                            </h2>
                            <div className="space-y-8">
                                {recipe.steps?.map((step, i) => (
                                    <div key={i} className="flex">
                                        <div className="mr-6 flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold font-serif text-xl border-2 border-brand-200">
                                                {i + 1}
                                            </div>
                                            {i !== recipe.steps!.length - 1 && <div className="w-0.5 h-full bg-gray-200 my-2"></div>}
                                        </div>
                                        <div className="pb-8">
                                            <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
                                            {i === 1 && (
                                                <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 text-yellow-800 text-sm">
                                                    💡 <strong>Dica da Janara:</strong> Tenha paciência nesta etapa, faz toda a diferença no resultado final!
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )) || <p>Passos indisponíveis.</p>}
                            </div>
                        </div>

                        {/* TIPS */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Segredos Para Sua Receita Ficar Perfeita</h2>
                            <div className="grid gap-4">
                                {recipe.tips?.map((tip, i) => (
                                    <div key={i} className="flex items-start bg-white border border-gray-100 shadow-sm p-4 rounded-lg">
                                        <span className="text-xl mr-3">✨</span>
                                        <p className="text-gray-700">{tip}</p>
                                    </div>
                                )) || <p>Sem dicas extras para esta receita.</p>}
                            </div>
                        </div>

                        {/* CTA ENGAGEMENT */}
                        <div className="bg-brand-50 rounded-2xl p-8 text-center mb-12">
                            <h2 className="font-serif text-2xl font-bold text-brand-900 mb-2">Você Fez Esta Receita?</h2>
                            <p className="text-gray-600 mb-6">Conta pra mim nos comentários como ficou! Adoro saber que minhas receitas estão chegando na sua mesa ❤️</p>
                            <button className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-6 rounded-full hover:bg-gray-50 transition mr-2">
                                💬 Comentar
                            </button>
                            <button className="bg-[#25D366] text-white font-bold py-2 px-6 rounded-full hover:bg-[#128C7E] transition">
                                📲 Compartilhar no WhatsApp
                            </button>
                        </div>

                        {/* COMMENTS MOCK */}
                        <div className="mb-12">
                            <h3 className="font-bold text-lg mb-4 text-gray-800">Comentários (2)</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-gray-900">Patrícia Lima</span>
                                        <span className="text-xs text-gray-500">Há 2 dias</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">Ficou maravilhoso! Meus filhos amaram. Obrigada por compartilhar!</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-gray-900">Roberta Silva</span>
                                        <span className="text-xs text-gray-500">Há 5 dias</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">Posso substituir o óleo por manteiga?</p>
                                    <div className="ml-4 mt-3 pl-4 border-l-2 border-brand-300">
                                        <span className="font-bold text-brand-600 text-xs block mb-1">Resposta da Janara</span>
                                        <p className="text-gray-700 text-xs">Pode sim, Roberta! Use a mesma quantidade derretida. Beijos!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* SIDEBAR */}
                    <div className="lg:col-span-4">
                        <Sidebar relatedRecipes={relatedRecipes} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipePost;