import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../common/Section';

// Dados de FAQs padrão
const defaultFaqs = [
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
];

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);
  
  // Use faqs fornecidos ou padrão
  const displayFaqs = faqs || defaultFaqs;
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <Section id="faq" bgColor="bg-white">
      <SectionHeader
        subtitle="Perguntas Frequentes"
        title="Tire Suas Dúvidas Sobre a Claud.IA"
        description="Respostas para as perguntas mais comuns sobre nossa plataforma"
      />
      
      <div className="mt-12 space-y-6 max-w-3xl mx-auto">
        {displayFaqs.map((faq, index) => (
          <motion.div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`px-6 pb-4 transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// FAQ alternativo com layout de grid
export const FAQGrid = ({ faqs }) => {
  // Use faqs fornecidos ou padrão
  const displayFaqs = faqs || defaultFaqs;
  
  return (
    <Section id="faq-grid" bgColor="bg-gray-50">
      <SectionHeader
        subtitle="Perguntas Frequentes"
        title="Respostas para Perguntas Comuns"
        description="Entenda melhor como a Claud.IA pode ajudar seu negócio"
      />
      
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayFaqs.map((faq, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;