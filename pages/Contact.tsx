import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-warm-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-brand-600 p-10 md:w-2/5 text-white flex flex-col justify-between">
            <div>
                <h1 className="font-serif text-3xl font-bold mb-4">Vamos Conversar? 💌</h1>
                <p className="text-brand-100 mb-8 leading-relaxed">
                Tem uma dúvida sobre alguma receita? Quer sugerir um tema? Ou só quer dizer oi? Adoro receber mensagens!
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start">
                        <span className="text-2xl mr-4">📧</span>
                        <div>
                            <p className="font-bold text-sm uppercase opacity-70 mb-1">Email</p>
                            <p className="font-medium">contato@receitasdecasa.com.br</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <span className="text-2xl mr-4">📸</span>
                        <div>
                            <p className="font-bold text-sm uppercase opacity-70 mb-1">Instagram</p>
                            <p className="font-medium">@receitasdejanara</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <p className="text-xs text-brand-200">
                    📩 Respondo todas as mensagens com carinho (pode levar alguns dias, mas prometo que leio cada uma!)
                </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-3/5">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div>
                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                     <input type="text" id="name" className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition placeholder-gray-400" placeholder="Seu nome" />
                 </div>
                 
                 <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                     <input type="email" id="email" className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition placeholder-gray-400" placeholder="seu@email.com" />
                 </div>

                 <div>
                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                     <select id="subject" className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition">
                         <option>Dúvida sobre Receita</option>
                         <option>Sugestão</option>
                         <option>Parceria</option>
                         <option>Só para dar um Oi</option>
                     </select>
                 </div>

                 <div>
                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                     <textarea id="message" rows={4} className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition placeholder-gray-400" placeholder="Escreva sua mensagem aqui..."></textarea>
                 </div>

                 <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-700 transition transform active:scale-95 shadow-lg">
                     Enviar Mensagem
                 </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;