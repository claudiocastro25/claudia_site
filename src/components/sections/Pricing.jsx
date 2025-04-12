import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Section, { SectionHeader } from '../common/Section';
import Button from '../common/Button';

// Default pricing plans definido no escopo do componente
const defaultPricingPlans = {
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
};

const Pricing = ({ pricingPlans }) => {
  const [pricingPeriod, setPricingPeriod] = useState('monthly');
  
  // Use default pricing plans if none provided
  const displayPricingPlans = pricingPlans || defaultPricingPlans;

  return (
    <Section id="pricing" bgColor="bg-gray-50">
      <SectionHeader
        subtitle="Preços"
        title="Planos para Cada Necessidade"
        description="Escolha o plano ideal para as necessidades do seu negócio"
      />

      <div className="mt-12 flex justify-center">
        <div className="bg-white p-1 rounded-lg inline-flex shadow-sm">
          <button
            onClick={() => setPricingPeriod('monthly')}
            className={`px-5 py-2 text-sm rounded-md font-medium ${
              pricingPeriod === 'monthly' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-500 hover:text-primary-600'
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setPricingPeriod('annual')}
            className={`px-5 py-2 text-sm rounded-md font-medium ${
              pricingPeriod === 'annual' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-500 hover:text-primary-600'
            }`}
          >
            Anual <span className="text-xs text-tertiary-500 font-bold">-20%</span>
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {displayPricingPlans[pricingPeriod].map((plan, index) => (
          <motion.div
            key={index}
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all ${
              plan.popular ? 'md:-mt-4 md:mb-4 ring-2 ring-primary-500 relative' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {plan.popular && (
              <div className="bg-primary-500 text-white text-xs font-bold uppercase tracking-wider py-1 text-center">
                Mais Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.price !== 'Sob consulta' && (
                  <span className="ml-1 text-xl text-gray-500">/mês</span>
                )}
              </div>
              <p className="mt-2 text-sm text-primary-600">7 dias de teste grátis</p>
            </div>
            <div className="px-6 pb-6">
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  fullWidth
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Alternative pricing layout - comparison table
export const PricingTable = ({ pricingPlans }) => {
  const [pricingPeriod, setPricingPeriod] = useState('monthly');
  
  // Use default pricing plans if none provided
  const displayPricingPlans = pricingPlans || defaultPricingPlans;
  
  // All features from all plans for comparison table
  const allFeatures = Array.from(new Set(
    displayPricingPlans.monthly
      .flatMap(plan => plan.features)
      .concat(displayPricingPlans.annual.flatMap(plan => plan.features))
  ));
  
  // Feature categories (for grouping in table)
  const featureCategories = {
    "Usuários e Armazenamento": ["1 usuário", "5 usuários", "Usuários ilimitados", "10GB de armazenamento", "50GB de armazenamento", "Armazenamento personalizado"],
    "Recursos": ["Análise de documentos", "Análise avançada de documentos", "Visualizações básicas", "Visualizações interativas", "Relatórios personalizados", "Integração com sistemas existentes"],
    "Suporte": ["Suporte por email", "Suporte prioritário", "Suporte 24/7", "Treinamento personalizado"]
  };
  
  // Group features by category
  const groupedFeatures = {};
  Object.entries(featureCategories).forEach(([category, features]) => {
    groupedFeatures[category] = features.filter(feature => allFeatures.includes(feature));
  });
  
  return (
    <Section id="pricing-table" bgColor="bg-white">
      <SectionHeader
        subtitle="Planos e Preços"
        title="Compare Nossos Planos"
        description="Escolha o plano que melhor atende às necessidades do seu negócio"
      />
      
      <div className="mt-12 flex justify-center">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex shadow-sm">
          <button
            onClick={() => setPricingPeriod('monthly')}
            className={`px-5 py-2 text-sm rounded-md font-medium ${
              pricingPeriod === 'monthly' 
                ? 'bg-white text-primary-700 shadow-sm' 
                : 'text-gray-500 hover:text-primary-600'
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setPricingPeriod('annual')}
            className={`px-5 py-2 text-sm rounded-md font-medium ${
              pricingPeriod === 'annual' 
                ? 'bg-white text-primary-700 shadow-sm' 
                : 'text-gray-500 hover:text-primary-600'
            }`}
          >
            Anual <span className="text-xs text-tertiary-500 font-bold">-20%</span>
          </button>
        </div>
      </div>
      
      <div className="mt-8 overflow-x-auto">
        <div className="inline-block min-w-full">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th scope="col" className="py-6 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                  Recursos
                </th>
                {displayPricingPlans[pricingPeriod].map((plan, index) => (
                  <th scope="col" key={index} className="py-6 px-6 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`${plan.popular ? 'relative' : ''}`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 inset-x-0 -translate-y-8 transform">
                          <span className="inline-flex rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold leading-5 text-primary-800">
                            Mais Popular
                          </span>
                        </div>
                      )}
                      <div className="text-lg font-medium text-gray-900">{plan.name}</div>
                      <div className="mt-2 flex justify-center items-baseline">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        {plan.price !== 'Sob consulta' && (
                          <span className="ml-1 text-gray-500 text-sm">/mês</span>
                        )}
                      </div>
                      <div className="mt-4">
                        <Button
                          variant={plan.popular ? "primary" : "outline"}
                          size="md"
                        >
                          {plan.cta}
                        </Button>
                      </div>
                    </motion.div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(groupedFeatures).map(([category, features]) => (
                <React.Fragment key={category}>
                  <tr>
                    <td colSpan={displayPricingPlans[pricingPeriod].length + 1} className="py-4 px-6 bg-gray-50">
                      <div className="text-sm font-medium text-gray-900">{category}</div>
                    </td>
                  </tr>
                  {features.map((feature, idx) => (
                    <tr key={`${category}-${idx}`} className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-sm text-gray-600">{feature}</td>
                      {displayPricingPlans[pricingPeriod].map((plan, planIdx) => (
                        <td key={planIdx} className="py-3 px-6 text-center">
                          {plan.features.includes(feature) ? (
                            <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                          ) : (
                            <span className="block w-5 h-5 mx-auto">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;