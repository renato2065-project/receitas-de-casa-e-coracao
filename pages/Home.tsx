import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import Newsletter from '../components/Newsletter';
import { RECIPES, CATEGORIES, TESTIMONIALS } from '../constants';
import heroImage from '../assets/receitas-de-casa-cor-favoritas.jpg';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-brand-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-brand-900 leading-tight">
                Receitas Que <span className="text-brand-600">Aquecem o Coração</span> e Enchem a Casa de Amor
              </h1>
              <h2 className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Descubra sabores caseiros autênticos, testados e aprovados por uma família de verdade. Aqui, cada receita conta uma história e traz o carinho da cozinha da vovó para o seu dia a dia.
              </h2>
              <div className="pt-4">
                <Link to="/receitas" className="inline-block bg-brand-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-brand-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Explorar Receitas Agora
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-brand-200 rounded-full blur-2xl opacity-50"></div>
              <img
                src={heroImage}
                alt="Janara cozinhando com amor"
                className="relative rounded-[2rem] shadow-2xl rotate-3 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY LOVE THIS BLOG */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-brand-900 mb-4">Mais Que Receitas: Uma Experiência de Cozinha Caseira</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Testadas em Família",
                icon: "🍰",
                text: "Nada sai daqui sem a aprovação dos meus três filhos (os críticos mais sinceros!)",
                link: "/sobre"
              },
              {
                title: "Histórias Que Temperam",
                icon: "📖",
                text: "Cada receita vem com memórias, dicas e o 'segredinho' que faz toda diferença",
                link: "/receitas"
              },
              {
                title: "Simplicidade e Sabor",
                icon: "👩‍🍳",
                text: "Ingredientes fáceis de encontrar, passos claros e resultados de dar água na boca",
                link: "/receitas"
              }
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="block bg-warm-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-100 group cursor-pointer"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categorias" className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-brand-900 mb-12">Encontre a Receita Perfeita Para Cada Momento</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((cat) => (
              <Link to={`/receitas?category=${encodeURIComponent(cat.name)}`} key={cat.id} className="group cursor-pointer block">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-md mb-4 group-hover:border-brand-300 transition-colors">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-center font-bold text-gray-800 group-hover:text-brand-600 transition-colors">{cat.name}</h3>
                <p className="text-center text-xs text-brand-500 font-medium uppercase tracking-wide mt-1 group-hover:underline">Ver Receitas</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST RECIPES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-900">Direto do Forno: Nossas Receitas Mais Recentes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...RECIPES].reverse().slice(0, 9).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/receitas" className="inline-block border-2 border-brand-600 text-brand-600 font-bold py-3 px-8 rounded-full hover:bg-brand-600 hover:text-white transition-colors">
              Ver Todas as Receitas
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-brand-900 mb-12">O Que Nossas Leitoras Estão Dizendo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="text-brand-300 text-6xl font-serif absolute top-4 left-4 opacity-30">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10">{t.text}</p>
                <div className="font-bold text-brand-800">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center text-white">
                <h2 className="font-serif text-3xl font-bold mb-6">A Cozinheira Por Trás das Receitas</h2>
                <div className="space-y-4 text-brand-100 leading-relaxed mb-8">
                  <p className="font-semibold text-lg">Oi, eu sou a Janara! 👋</p>
                  <p>Sou esposa, mãe de três filhos incríveis e apaixonada por tudo que envolve cozinha. Minha jornada começou há muitos anos, observando minha avó e minha mãe transformarem ingredientes simples em momentos inesquecíveis.</p>
                  <p>Aqui, compartilho não apenas receitas, mas pedaços da minha história e do amor que coloco em cada prato.</p>
                </div>
                <div>
                  <Link to="/sobre" className="bg-white text-brand-600 font-bold py-3 px-8 rounded-full hover:bg-brand-50 transition shadow-lg">
                    Leia Minha História Completa
                  </Link>
                </div>
              </div>
              <div className="relative h-96 md:h-auto">
                <img src="https://picsum.photos/800/800?random=50" alt="Janara" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter />
    </div>
  );
};

export default Home;