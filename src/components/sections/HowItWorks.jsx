import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, PieChart, Zap, CheckCircle, Brain, Shield } from 'lucide-react';
import Section, { SectionHeader } from '../common/Section';

const HowItWorks = ({ tabContent }) => {
  const [activeTab, setActiveTab] = useState('documents');

  // Default tab content if none provided
  const defaultTabContent = {
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
  };

  // Use default tab content if none provided
  const displayTabContent = tabContent || defaultTabContent;

  return (
    <Section id="how-it-works" bgColor="bg-gray-50">
      <SectionHeader
        subtitle="Como Funciona"
        title="Tecnologia Avançada, Interface Intuitiva"
        description="Experimente a potência da Claud.IA através de uma interface simples e fácil de usar"
      />

      <motion.div 
        className="mt-12"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center">
          <motion.div 
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="mb-8 lg:pr-12">
              <div className="bg-white rounded-lg p-1">
                <div className="flex space-x-1 border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('documents')}
                    className={`flex-1 py-4 px-6 text-sm font-medium rounded-t-lg transition-colors ${
                      activeTab === 'documents' 
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-500' 
                        : 'text-gray-500 hover:text-primary-600'
                    }`}
                  >
                    <FileText className="w-5 h-5 mx-auto mb-1" />
                    Documentos
                  </button>
                  <button
                    onClick={() => setActiveTab('visualizations')}
                    className={`flex-1 py-4 px-6 text-sm font-medium rounded-t-lg transition-colors ${
                      activeTab === 'visualizations' 
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-500' 
                        : 'text-gray-500 hover:text-primary-600'
                    }`}
                  >
                    <PieChart className="w-5 h-5 mx-auto mb-1" />
                    Visualizações
                  </button>
                  <button
                    onClick={() => setActiveTab('insights')}
                    className={`flex-1 py-4 px-6 text-sm font-medium rounded-t-lg transition-colors ${
                      activeTab === 'insights' 
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-500' 
                        : 'text-gray-500 hover:text-primary-600'
                    }`}
                  >
                    <Zap className="w-5 h-5 mx-auto mb-1" />
                    Insights
                  </button>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {displayTabContent[activeTab].title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {displayTabContent[activeTab].description}
                      </p>
                      <ul className="space-y-3">
                        {displayTabContent[activeTab].features.map((feature, i) => (
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
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            <div className="relative">
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={displayTabContent[activeTab].image}
                  alt={displayTabContent[activeTab].title}
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Floating element 1 - Correção da propriedade transition duplicada */}
              <motion.div
                className="absolute -top-5 -right-5 bg-white rounded-lg shadow-lg p-3"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 0.2
                  }
                }}
              >
                <Brain className="w-8 h-8 text-primary-500" />
              </motion.div>

              {/* Floating element 2 - Correção da propriedade transition duplicada */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 0.3
                  }
                }}
              >
                <Shield className="w-8 h-8 text-tertiary-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default HowItWorks;