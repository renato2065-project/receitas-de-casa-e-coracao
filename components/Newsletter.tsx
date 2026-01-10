import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <section id="newsletter" className="py-20 bg-brand-50">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <span className="text-4xl mb-4 block">💌</span>
                <h2 className="font-serif text-3xl font-bold text-brand-900 mb-4">Receba Receitas Exclusivas Direto no Seu Email</h2>
                <p className="text-gray-600 mb-8">Toda semana, uma receita especial + dicas de cozinha que não publico em nenhum outro lugar.</p>

                <form className="bg-white p-2 rounded-lg shadow-md flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-200 bg-gray-50 text-gray-900 border border-gray-200"
                    />
                    <input
                        type="email"
                        placeholder="Seu melhor email"
                        className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-200 bg-gray-50 text-gray-900 border border-gray-200"
                    />
                    <button className="bg-brand-600 text-white font-bold px-6 py-3 rounded-md hover:bg-brand-700 transition">
                        Quero Receber!
                    </button>
                </form>
                <p className="text-xs text-gray-500 mt-4">🔒 Seus dados estão seguros. Sem spam, promessa de cozinheira!</p>
            </div>
        </section>
    );
};

export default Newsletter;
