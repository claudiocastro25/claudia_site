import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

// Logo
import ClaudIAEyeLogo from '../ClaudiaLogo';

// Importações corrigidas de componentes de seções
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import UseCases from '../components/sections/UseCases';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

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
    tabContent: {
      documents: {
        title: 'Análise de Documentos',
        description: 'Extraia insights valiosos de qualquer tipo de documento com nossa tecnologia de processamento avançado. Claud.IA identifica entidades, relacionamentos e informações críticas automaticamente.',
        features: [
          'Processamento de múltiplos formatos (PDF, Word, Excel, etc)',
          'Extração de entidades e informações-chave',
          'Resumo automático de documentos extensos',
          'Busca inteligente em todo seu acervo documental'
        ],
        image: '/api/placeholder/600/400'
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
        image: '/api/placeholder/600/400'
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
        image: '/api/placeholder/600/400'
      }
    },
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
          name: 'Básico',
          price: 'R$49,90',
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
          price: 'R$89,90',
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
          name: 'Básico',
          price: 'R$39,90',
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
          price: 'R$69,90',
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
                onClick={() => scrollToSection('features')}
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
                    onClick={() => scrollToSection('features')}
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
        <Hero 
          onWatchVideo={handleOpenVideoModal}
          backgroundImage="/api/placeholder/1600/800"
          videoThumbnail="/api/placeholder/1200/675"
        />

        {/* Features Section */}
        <Features features={claudiaData.features} />

        {/* How It Works Section */}
        <HowItWorks tabContent={claudiaData.tabContent} />

        {/* Use Cases Section */}
        <UseCases useCases={claudiaData.useCases} />

        {/* Testimonials Section */}
        <Testimonials testimonials={claudiaData.testimonials} />

        {/* Pricing Section */}
        <Pricing pricingPlans={claudiaData.pricingPlans} />

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

      {/* Footer - Corrigido */}
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
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">Recursos</button></li>
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
                <li><button onClick={() => scrollToSection('cta')} className="text-gray-400 hover:text-white transition-colors">Contato</button></li>
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

      {/* Video Modal - Com efeito de movimento no hover */}
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
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Claud.IA Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
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
    </div>
  );
};

export default ClaudiaLandingPage;