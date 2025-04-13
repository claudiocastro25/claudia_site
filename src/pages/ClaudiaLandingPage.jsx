import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageCircle, FileText, PieChart, Zap, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

// Logo
import ClaudIAEyeLogo from '../ClaudiaLogo';

// Importação de imagens
import headLogo from '../assets/images/head-logo.png';
import claudiaVideo from '../assets/images/claudia.mp4';
import claudiaDados from '../assets/images/claudia_dados.png';
import claudiaPensando from '../assets/images/claudia_pensando.png';
import claudiaVisual from '../assets/images/claudia_visual.png';

// Importações corrigidas de componentes de seções
import UseCases from '../components/sections/UseCases';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

// Componente de formulário de contato
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyzzdkdq");
  
  if (state.succeeded) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-medium text-green-800">Mensagem enviada com sucesso!</h3>
        <p className="mt-2 text-green-600">Obrigado pelo seu contato. Retornaremos em breve.</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome completo
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Telefone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Empresa
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      
      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
        >
          {state.submitting ? 'Enviando...' : 'Enviar mensagem'}
        </button>
      </div>
    </form>
  );
};

// Componente de chat flutuante
const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Olá! Sou a Claud.IA, sua assistente virtual. Como posso ajudar você hoje?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    // Adiciona a mensagem do usuário
    const userMessage = { id: messages.length + 1, sender: 'user', text: newMessage };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simula resposta da IA após breve delay
    setTimeout(() => {
      const botMessage = { 
        id: messages.length + 2, 
        sender: 'bot', 
        text: 'Obrigada por sua mensagem! Nosso time irá analisar e entrar em contato em breve. Enquanto isso, posso responder algumas perguntas sobre nossos serviços.'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  // Scroll para a última mensagem quando uma nova mensagem é adicionada
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Botão de chat flutuante */}
      <button
        onClick={toggleChat}
        className="fixed bottom-20 right-6 z-40 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
        aria-label="Chat com Claud.IA"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <img src={headLogo} alt="Claudia" className="w-14 h-14" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">1</span>
          </div>
        )}
      </button>

      {/* Janela de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-32 right-6 z-40 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden max-h-[500px] flex flex-col"
          >
            {/* Cabeçalho do chat */}
            <div className="bg-primary-600 p-4 text-white flex items-center">
              <div className="mr-3">
                <img src={headLogo} alt="Claudia" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-medium">Chat com Claud.IA</h3>
                <p className="text-xs text-primary-100">Assistente virtual</p>
              </div>
              <button 
                onClick={toggleChat}
                className="ml-auto text-white hover:text-primary-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Mensagens do chat */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs sm:max-w-sm px-4 py-2 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-primary-600 text-white rounded-br-none'
                          : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Formulário para envio de mensagem */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 rounded-r-md hover:bg-primary-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Componente para a seção "IA Que Respeita Seus Dados" com vídeo
const AIRespectSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    // Função para reiniciar o vídeo com pausa
    const handleVideoEnded = () => {
      setTimeout(() => {
        videoElement.play();
      }, 10000); // Pausa de 10 segundos antes de reiniciar
    };

    videoElement.addEventListener('ended', handleVideoEnded);

    // Limpar event listener quando o componente for desmontado
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, []);
  
  return (
    <section id="ai-respect" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Uma IA que Respeita Seus Dados
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a Claud.IA transforma a maneira como você analisa e utiliza seus dados empresariais
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full">
          {/* Vídeo à esquerda */}
          <motion.div 
            className="relative rounded-lg overflow-hidden w-full max-w-lg mx-auto lg:mx-0 h-full group"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <video 
              ref={videoRef}
              autoPlay 
              muted
              className="w-full h-full object-cover"
              src={claudiaVideo}
            />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-tertiary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </motion.div>
          
          {/* Containers à direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
            <motion.div 
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-tertiary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="flex items-start mb-2">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Privacidade Total</h3>
                  <p className="text-gray-600 mt-2">Seus dados permanecem isolados e seguros, sem exposição a modelos públicos de IA.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-tertiary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="flex items-start mb-2">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Sem Alucinações</h3>
                  <p className="text-gray-600 mt-2">Respostas baseadas exclusivamente nos seus dados, eliminando informações incorretas.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-tertiary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="flex items-start mb-2">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Análise Documental</h3>
                  <p className="text-gray-600 mt-2">Processa diversos formatos como PDFs, Word, Excel, emails e imagens com texto.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-tertiary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="flex items-start mb-2">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Busca Inteligente</h3>
                  <p className="text-gray-600 mt-2">Encontre informações em segundos, mesmo em milhares de documentos complexos.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-tertiary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="flex items-start mb-2">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Insights Automáticos</h3>
                  <p className="text-gray-600 mt-2">Descubra tendências, padrões e informações críticas sem precisar procurar.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-tertiary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="flex items-start mb-2">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22V12c0-5.5 4.5-10 10-10s10 4.5 10 10v10"/><path d="M18 22V5.5a2.5 2.5 0 0 0-5 0V22"/><path d="M6 22V2"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Integração Perfeita</h3>
                  <p className="text-gray-600 mt-2">Conecte-se facilmente com seus sistemas e fluxos de trabalho existentes.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente para a seção "Como Funciona"
const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState('documents');
  
  const tabContent = {
    documents: {
      title: 'Análise de Documentos',
      description: 'Extraia insights valiosos de qualquer tipo de documento com nossa tecnologia de processamento avançado. Claud.IA identifica entidades, relacionamentos e informações críticas automaticamente.',
      features: [
        'Processamento de múltiplos formatos (PDF, Word, Excel, etc)',
        'Extração de entidades e informações-chave',
        'Resumo automático de documentos extensos',
        'Busca inteligente em todo seu acervo documental'
      ],
      image: claudiaDados
    },
    visualizations: {
      title: 'Visualizações Interativas',
      description: 'Transforme dados brutos em visualizações interativas e intuitivas que revelam tendências e insights imediatamente. Nossa plataforma cria automaticamente os gráficos e dashboards mais relevantes.',
      features: [
        'Dashboards personalizáveis e interativos',
        'Gráficos gerados automaticamente com base nos seus dados',
        'Visualização de tendências e anomalias',
        'Compartilhamento seguro de insights visuais'
      ],
      image: claudiaVisual
    },
    insights: {
      title: 'Insights Acionáveis',
      description: 'Claud.IA vai além da análise básica, fornecendo insights acionáveis que realmente impactam seu negócio. Receba recomendações proativas baseadas em seus dados.',
      features: [
        'Detecção automática de padrões e tendências',
        'Alertas proativos sobre anomalias e oportunidades',
        'Recomendações contextualizadas e relevantes',
        'Priorização inteligente de informações críticas'
      ],
      image: claudiaPensando
    }
  };

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tecnologia Avançada, Interface Intuitiva
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Experimente a potência da Claud.IA através de uma interface simples e fácil de usar
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Coluna das abas - ocupa 2/3 do espaço */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`flex items-center py-4 px-6 font-medium text-sm ${
                    activeTab === 'documents'
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Documentos
                </button>
                <button
                  onClick={() => setActiveTab('visualizations')}
                  className={`flex items-center py-4 px-6 font-medium text-sm ${
                    activeTab === 'visualizations'
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <PieChart className="w-5 h-5 mr-2" />
                  Visualizações
                </button>
                <button
                  onClick={() => setActiveTab('insights')}
                  className={`flex items-center py-4 px-6 font-medium text-sm ${
                    activeTab === 'insights'
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Insights
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-5">
                    {tabContent[activeTab].description}
                  </p>
                  <ul className="space-y-3">
                    {tabContent[activeTab].features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Coluna da imagem - ocupa 1/3 do espaço */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-8 flex items-center justify-center h-full"
                style={{ minHeight: '25rem' }} 
              >
                {activeTab === 'documents' && (
                  <div className="w-full h-full flex items-center justify-center">
                    <img src={claudiaDados} alt="Documentos" className="w-80 h-80 object-contain" />
                  </div>
                )}
                
                {activeTab === 'visualizations' && (
                  <div className="w-full h-full flex items-center justify-center">
                    <img src={claudiaVisual} alt="Visualizações" className="w-80 h-80 object-contain" />
                  </div>
                )}
                
                {activeTab === 'insights' && (
                  <div className="w-full h-full flex items-center justify-center">
                    <img src={claudiaPensando} alt="Insights" className="w-80 h-80 object-contain" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção de contato com formulário
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a extrair o máximo valor dos seus dados
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fale Conosco</h3>
              <ContactForm />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-primary-800 mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-lg text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Telefone</h4>
                    <p className="text-primary-700 mt-1">(11) 4002-8922</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-lg text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="text-primary-700 mt-1">contato@claudia.ai</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 text-white rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src={claudiaDados} alt="Claudia" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">Entre para nossa lista VIP</h3>
                <p className="text-gray-300 mb-4">Receba novidades, atualizações e conteúdos exclusivos sobre a Claud.IA</p>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Seu email"
                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <button 
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md transition-colors"
                  >
                    Inscrever
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClaudiaLandingPage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dados para as seções
  const claudiaData = {
    features: [
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
        title: 'Privacidade Total',
        description: 'Seus dados permanecem isolados e seguros, sem exposição a modelos públicos de IA.'
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
        title: 'Sem Alucinações',
        description: 'Respostas baseadas exclusivamente nos seus dados, eliminando informações incorretas.'
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>,
        title: 'Análise Documental',
        description: 'Processa diversos formatos como PDFs, Word, Excel, emails e imagens com texto.'
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
        title: 'Busca Inteligente',
        description: 'Encontre informações em segundos, mesmo em milhares de documentos complexos.'
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
        title: 'Insights Automáticos',
        description: 'Descubra tendências, padrões e informações críticas sem precisar procurar.'
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2 22V12c0-5.5 4.5-10 10-10s10 4.5 10 10v10"/><path d="M18 22V5.5a2.5 2.5 0 0 0-5 0V22"/><path d="M6 22V2"/></svg>,
        title: 'Integração Perfeita',
        description: 'Conecte-se facilmente com seus sistemas e fluxos de trabalho existentes.'
      }
    ],
    useCases: [
      {
        title: 'Análise de Documentos Jurídicos',
        description: 'Extraia insights valiosos de contratos, processos e documentos legais com processamento avançado de linguagem natural.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
      },
      {
        title: 'Visualização de Dados Financeiros',
        description: 'Transforme dados financeiros complexos em visualizações interativas para melhor tomada de decisões estratégicas.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z"/><path d="M15 9.35a4 4 0 1 0 0 5.3"/></svg>
      },
      {
        title: 'Análise de Sentimento de Clientes',
        description: 'Compreenda o feedback dos clientes com análises detalhadas e relatórios automatizados que revelam tendências.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="3" y2="21"/><line x1="15" x2="15" y1="3" y2="21"/></svg>
      },
      {
        title: 'Processamento de Documentação Técnica',
        description: 'Organize e extraia conhecimento de manuais técnicos, especificações e documentação de produtos.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/></svg>
      }
    ],
    testimonials: [
      {
        quote: 'A Claud.IA transformou completamente nossa análise de documentos. O que costumava levar dias agora é feito em minutos, com maior precisão e segurança.',
        name: 'Ana Silva',
        title: 'Diretora de Operações',
        company: 'TechSolutions Brasil',
        avatar: '/api/placeholder/48/48'
      },
      {
        quote: 'A privacidade dos dados era nossa maior preocupação. Com a Claud.IA, finalmente temos uma solução de IA que mantém nossos dados confidenciais realmente seguros.',
        name: 'Carlos Mendes',
        title: 'CTO',
        company: 'Fintech Inovadora',
        avatar: '/api/placeholder/48/48'
      },
      {
        quote: 'As visualizações e relatórios gerados pela Claud.IA nos ajudaram a identificar tendências que nunca teríamos descoberto por conta própria. Um diferencial competitivo incrível.',
        name: 'Mariana Costa',
        title: 'Analista de Dados',
        company: 'Grupo Empresarial',
        avatar: '/api/placeholder/48/48'
      }
    ],
    pricingPlans: {
      monthly: [
        {
          name: 'Individual',
          price: 'R$59,90',
          features: [
            '1 usuário',
            '10GB de armazenamento',
            'Análise de documentos',
            'Visualizações básicas',
            'Suporte por email'
          ],
          cta: 'Começar teste grátis',
          popular: false
        },
        {
          name: 'Profissional',
          price: 'R$249,90',
          features: [
            '5 usuários',
            '50GB de armazenamento',
            'Análise avançada de documentos',
            'Visualizações interativas',
            'Relatórios personalizados',
            'Suporte prioritário'
          ],
          cta: 'Começar teste grátis',
          popular: true
        },
        {
          name: 'Empresarial',
          price: 'Sob consulta',
          features: [
            'Usuários ilimitados',
            'Armazenamento personalizado',
            'Análise avançada de documentos',
            'Visualizações interativas',
            'Relatórios personalizados',
            'Integração com sistemas existentes',
            'Treinamento personalizado',
            'Suporte 24/7'
          ],
          cta: 'Entre em contato',
          popular: false
        }
      ],
      annual: [
        {
          name: 'Individual',
          price: 'R$47,90',
          features: [
            '1 usuário',
            '10GB de armazenamento',
            'Análise de documentos',
            'Visualizações básicas',
            'Suporte por email'
          ],
          cta: 'Começar teste grátis',
          popular: false
        },
        {
          name: 'Profissional',
          price: 'R$199,90',
          features: [
            '5 usuários',
            '50GB de armazenamento',
            'Análise avançada de documentos',
            'Visualizações interativas',
            'Relatórios personalizados',
            'Suporte prioritário'
          ],
          cta: 'Começar teste grátis',
          popular: true
        },
        {
          name: 'Empresarial',
          price: 'Sob consulta',
          features: [
            'Usuários ilimitados',
            'Armazenamento personalizado',
            'Análise avançada de documentos',
            'Visualizações interativas',
            'Relatórios personalizados',
            'Integração com sistemas existentes',
            'Treinamento personalizado',
            'Suporte 24/7'
          ],
          cta: 'Entre em contato',
          popular: false
        }
      ]
    },
    faqs: [
      {
        question: 'O que é a Claud.IA e como ela funciona?',
        answer: 'Claud.IA é uma assistente de IA privada e segura que utiliza tecnologia RAG (Retrieval-Augmented Generation) para analisar seus dados de forma isolada e segura. Ela processa seus documentos, realiza análises complexas e gera visualizações e relatórios detalhados, tudo sem compartilhar seus dados com modelos públicos de IA.'
      },
      {
        question: 'Como a Claud.IA garante a privacidade dos meus dados?',
        answer: 'A Claud.IA foi projetada com privacidade como prioridade. Seus dados permanecem isolados em um ambiente seguro, sem serem enviados para modelos de IA públicos. Utilizamos criptografia de ponta a ponta, controles de acesso rigorosos e processamento local sempre que possível para garantir que seus dados confidenciais nunca sejam expostos.'
      },
      {
        question: 'O que significa "sem alucinações" no contexto da Claud.IA?',
        answer: 'Alucinações em IA referem-se a quando modelos geram informações incorretas ou inventadas. A Claud.IA evita isso ao basear suas respostas exclusivamente nos seus dados, utilizando tecnologia RAG avançada que ancora todas as respostas em fontes verificáveis dentro do seu conjunto de dados, garantindo precisão e confiabilidade.'
      },
      {
        question: 'Como posso personalizar a Claud.IA para meu negócio específico?',
        answer: 'A Claud.IA é altamente personalizável. Nossos especialistas trabalham com você para adaptar o sistema às necessidades específicas do seu setor e fluxos de trabalho. Isso inclui treinamento com seus dados específicos, integração com seus sistemas existentes e personalização das visualizações e relatórios para atender às suas necessidades de negócio.'
      },
      {
        question: 'Quais tipos de documentos a Claud.IA pode analisar?',
        answer: 'A Claud.IA pode processar uma ampla variedade de formatos de documentos, incluindo PDFs, documentos do Word, planilhas Excel, apresentações PowerPoint, e-mails, páginas web, imagens com texto (via OCR) e muito mais. Ela pode extrair informações estruturadas e não estruturadas, identificar padrões e gerar insights valiosos a partir desses diversos tipos de conteúdo.'
      },
      {
        question: 'Preciso de conhecimento técnico para usar a Claud.IA?',
        answer: 'Não. A Claud.IA foi projetada para ser intuitiva e fácil de usar, mesmo para pessoas sem conhecimento técnico. Nossa interface amigável permite que você faça perguntas em linguagem natural, solicite análises e visualizações, e obtenha relatórios detalhados sem precisar de habilidades de programação ou análise de dados.'
      }
    ]
  };

  // Handler for scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Handle opening video modal
  const handleOpenVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  // Custom Hero Component com vídeo centralizado
  const CustomHero = () => {
    return (
      <section className="pt-32 pb-24 relative overflow-hidden" id="hero">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 to-tertiary-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sua Assistente de IA <span className="text-gradient bg-gradient-to-r from-primary-600 to-tertiary-500">Privada e Segura</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Análises completas, visualizações interativas e insights valiosos sem compartilhar seus dados com modelos públicos de IA.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="#pricing" 
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Comece Agora
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <button 
                onClick={handleOpenVideoModal}
                className="inline-flex justify-center items-center px-8 py-4 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Ver Demonstração
              </button>
            </motion.div>
          </div>
          
          {/* Vídeo centralizado com botão de play personalizado */}
          <motion.div 
            className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                src="https://player.vimeo.com/video/1071610754?h=6a0ddd0234&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=0" 
                width="100%" 
                height="100%" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                title="Claud.IA Demo"
                id="vimeo-player"
              ></iframe>
            </div>
            
            {/* Overlay com gradiente sutil e botão de play personalizado */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer group"
              onClick={() => {
                // Usar a API do Vimeo para reproduzir o vídeo quando o botão for clicado
                const iframe = document.getElementById('vimeo-player');
                if (iframe) {
                  iframe.contentWindow.postMessage(
                    JSON.stringify({
                      method: 'play'
                    }),
                    '*'
                  );
                  
                  // Ocultar o overlay após o clique
                  const overlay = iframe.parentElement.nextElementSibling;
                  if (overlay) {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                      overlay.style.display = 'none';
                    }, 500); // Transição de 500ms
                  }
                }
              }}
            >
              <div className="bg-white/30 backdrop-blur-sm rounded-full p-6 text-white transition-all duration-300 group-hover:bg-white/40 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </motion.div>
          
          {/* Trusted by companies */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm font-semibold text-gray-500 text-center mb-6">UTILIZADA POR EMPRESAS COMO</p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              {[1, 2, 3, 4, 5].map((index) => (
                <div 
                  key={index}
                  className="col-span-1 flex justify-center items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <img className="h-9" src={`/api/placeholder/120/36`} alt={`Empresa ${index}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <ClaudIAEyeLogo size="medium" showText={true} withAnimation={true} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('ai-respect')}
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')}
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Casos de Uso
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Contato
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="inline-flex items-center font-medium text-sm text-primary-600 hover:text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Login
              </a>
              <a href="/register" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" x2="20" y1="8" y2="14"/><line x1="23" x2="17" y1="11" y2="11"/></svg>
                Registrar
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                <span className="sr-only">Abrir menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)}></div>
            
            <motion.nav 
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-xl flex flex-col" 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b">
                <ClaudIAEyeLogo size="small" showText={true} withAnimation={true} />
                <button
                  className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fechar menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="pt-2 pb-4 flex-1 overflow-y-auto">
                <div className="px-2 space-y-1 mt-3">
                  <button
                    onClick={() => scrollToSection('ai-respect')}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                  >
                    Recursos
                  </button>
                  <button
                    onClick={() => scrollToSection('how-it-works')}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                  >
                    Como Funciona
                  </button>
                  <button
                    onClick={() => scrollToSection('use-cases')}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                  >
                    Casos de Uso
                  </button>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                  >
                    Preços
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                  >
                    Contato
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 pb-6 px-4 space-y-3">
                <a
                  href="/login"
                  className="w-full flex items-center justify-center px-4 py-2 border border-primary-600 rounded-md shadow-sm text-base font-medium text-primary-600 hover:bg-primary-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Login
                </a>
                <a
                  href="/register"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" x2="20" y1="8" y2="14"/><line x1="23" x2="17" y1="11" y2="11"/></svg>
                  Registrar
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <CustomHero />

        {/* Features Section - Substituído pela nova seção */}
        <AIRespectSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Use Cases Section */}
        <UseCases useCases={claudiaData.useCases} />

        {/* Testimonials Section */}
        <Testimonials testimonials={claudiaData.testimonials} />

        {/* Pricing Section */}
        <Pricing pricingPlans={claudiaData.pricingPlans} />

        {/* Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <FAQ faqs={claudiaData.faqs} />

        {/* CTA Section */}
        <CTA 
          title="Pronto para transformar sua análise de dados?"
          description="Comece hoje mesmo com 7 dias de teste grátis. Sem compromisso."
          primaryButtonText="Começar Teste Grátis"
          secondaryButtonText="Ver Planos"
          primaryButtonLink="/register"
          secondaryButtonAction={() => scrollToSection('pricing')}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <ClaudIAEyeLogo size="medium" showText={true} textColor="white" withAnimation={true} />
              </div>
              <p className="text-gray-400 max-w-md">
                Assistente de IA privada e segura para análise de dados e documentos. Transforme seus dados em insights valiosos sem compartilhá-los com modelos públicos.
              </p>
              <div className="mt-6 flex space-x-6">
                {/* Social icons would go here */}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Produto</h3>
              <ul className="mt-4 space-y-4">
                <li><button onClick={() => scrollToSection('ai-respect')} className="text-gray-400 hover:text-white transition-colors">Recursos</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">Preços</button></li>
                <li><button onClick={() => scrollToSection('use-cases')} className="text-gray-400 hover:text-white transition-colors">Casos de Uso</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors">Suporte</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Empresa</h3>
              <ul className="mt-4 space-y-4">
                <li><button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">Depoimentos</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition-colors">Como Funciona</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Claud.IA. Todos os direitos reservados.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition-colors">Termos</button>
              <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition-colors">Privacidade</button>
              <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal com correção para que apareça */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                onClick={() => setIsVideoModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative pt-[56.25%]">
                <video
                  className="absolute inset-0 w-full h-full"
                  src={claudiaVideo}
                  controls
                  autoPlay
                  title="Claud.IA Demo Video"
                ></video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Chat flutuante */}
      <FloatingChat />
    </div>
  );
};

export default ClaudiaLandingPage;