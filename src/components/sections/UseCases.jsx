import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, PieChart, BarChart, Layers } from 'lucide-react';
import Section, { SectionHeader } from '../common/Section';
import Button from '../common/Button';

// Default use cases definidos no escopo do componente
const defaultUseCases = [
  {
    title: 'Análise de Documentos Jurídicos',
    description: 'Extraia insights valiosos de contratos, processos e documentos legais com processamento avançado de linguagem natural.',
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: 'Visualização de Dados Financeiros',
    description: 'Transforme dados financeiros complexos em visualizações interativas para melhor tomada de decisões estratégicas.',
    icon: <PieChart className="w-6 h-6" />
  },
  {
    title: 'Análise de Sentimento de Clientes',
    description: 'Compreenda o feedback dos clientes com análises detalhadas e relatórios automatizados que revelam tendências.',
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: 'Processamento de Documentação Técnica',
    description: 'Organize e extraia conhecimento de manuais técnicos, especificações e documentação de produtos.',
    icon: <Layers className="w-6 h-6" />
  }
];

const UseCases = ({ useCases, viewAllLink = "#" }) => {
  // Use default use cases if none provided
  const displayUseCases = useCases || defaultUseCases;

  return (
    <Section id="use-cases" bgColor="bg-gray-50">
      <SectionHeader
        subtitle="Casos de Uso"
        title="Aplicações Poderosas em Diversos Setores"
        description="Veja como a Claud.IA pode ser aplicada em diferentes cenários para potencializar seu negócio"
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {displayUseCases.map((useCase, index) => (
          <motion.div
            key={index}
            className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-16 sm:w-24 flex-shrink-0 bg-gradient-to-b from-primary-500 to-tertiary-500 flex items-center justify-center p-4">
              <div className="text-white">
                {useCase.icon}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {viewAllLink && (
        <div className="mt-12 text-center">
          <Button
            href={viewAllLink}
            variant="ghost"
            icon={<ChevronRight className="ml-1 w-5 h-5" />}
            iconPosition="right"
          >
            Ver todos os casos de uso
          </Button>
        </div>
      )}
    </Section>
  );
};

// Alternative grid layout for use cases
export const UseCasesGrid = ({ useCases, title, subtitle, description }) => {
  // Use default use cases if none provided
  const displayUseCases = useCases || defaultUseCases;
  
  // Expanded use cases array for grid layout
  const expandedUseCases = [
    ...displayUseCases,
    {
      title: 'Análise de Risco de Crédito',
      description: 'Avalie o risco de crédito com maior precisão através da análise de múltiplas fontes de dados estruturados e não estruturados.',
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'Pesquisa e Desenvolvimento',
      description: 'Acelere descobertas analisando grandes volumes de artigos científicos, patentes e relatórios de pesquisa.',
      icon: <Layers className="w-6 h-6" />
    }
  ];

  return (
    <Section id="use-cases-grid" bgColor="bg-white">
      <SectionHeader
        subtitle={subtitle || "Casos de Uso"}
        title={title || "Transforme Seu Negócio com IA Privada"}
        description={description || "A Claud.IA é aplicável em diversos setores e casos de uso, sempre com foco em privacidade e precisão"}
      />
      
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expandedUseCases.map((useCase, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-4">
              {useCase.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
            <p className="text-gray-600 text-sm">{useCase.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default UseCases;