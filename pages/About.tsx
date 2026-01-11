import React from 'react';
import { Link } from 'react-router-dom';
import janaraImage from '../assets/sobre_janara_1.jpg';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-brand-600 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Oi, Eu Sou a Janara! Prazer em Te Conhecer 💛</h1>
          <p className="text-xl text-brand-100">Um pouco sobre minha cozinha, minha família e minha paixão.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-900 prose-p:text-gray-600 mx-auto">

          <img src={janaraImage} alt="Janara na cozinha" className="w-full rounded-2xl shadow-lg mb-12" />

          <h2>De Onde Vem Meu Amor Pela Cozinha</h2>
          <p>
            Sou esposa, mãe de três filhos incríveis e apaixonada por tudo que envolve cozinha. Minha jornada começou há muitos anos, observando minha avó transformar ingredientes simples em momentos inesquecíveis à mesa.
          </p>
          <p>
            Lembro-me de estar ao lado da minha avó, vendo suas mãos sábias amassarem a massa do pão caseiro. Ela me ensinava sem pressa, sem pressa nenhuma.
          </p>
          <p>
            Com o tempo, percebi que cozinhar não era apenas uma tarefa doméstica, mas uma forma poderosa de expressar amor. Quando me tornei mãe, essa convicção só aumentou. Queria que meus filhos tivessem as mesmas memórias olfativas e afetivas que eu tive.
          </p>

          <div className="bg-warm-50 p-8 rounded-xl border-l-4 border-brand-500 my-12">
            <h3 className="mt-0 text-brand-800">Por Que Criei Este Blog</h3>
            <p className="mb-0 text-gray-700 italic">
              "Meu objetivo é democratizar receitas caseiras, resgatar tradições e criar conexões. Quero que você sinta o mesmo carinho e acolhimento que eu sinto quando cozinho para quem amo. Não é só sobre comida, é sobre amor e memórias."
            </p>
          </div>

          <h2>O Que Torna Este Blog Especial</h2>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex items-start">
              <span className="text-brand-500 mr-2 text-xl">✓</span>
              <span><strong>Receitas Reais:</strong> Testadas e aprovadas na correria do dia a dia.</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-2 text-xl">✓</span>
              <span><strong>Ingredientes Acessíveis:</strong> Nada de ingredientes que você só encontra do outro lado do mundo.</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-2 text-xl">✓</span>
              <span><strong>Honestidade:</strong> Se uma receita deu errado três vezes antes de dar certo, eu vou te contar o porquê!</span>
            </li>
          </ul>

          <div className="text-center mt-16 border-t border-gray-100 pt-12">
            <h2>Vamos Conectar?</h2>
            <p>Eu Adoraria Conhecer Você Também!</p>
            <div className="flex justify-center gap-4 not-prose mt-6">
              <Link to="/contato" className="bg-brand-600 text-white font-bold py-3 px-8 rounded-full hover:bg-brand-700 transition">
                Mandar uma Mensagem
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;