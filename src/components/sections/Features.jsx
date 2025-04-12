import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../common/Section';
import { Lock, Shield, FileText, Search, Zap, Database } from 'lucide-react';

// Default features defined at component scope
const defaultFeatures = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Privacidade Total',
    description: 'Seus dados permanecem isolados e seguros, sem exposição a modelos públicos de IA.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Sem Alucinações',
    description: 'Respostas baseadas exclusivamente nos seus dados, eliminando informações incorretas.'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Análise Documental',
    description: 'Processa diversos formatos como PDFs, Word, Excel, emails e imagens com texto.'
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Busca Inteligente',
    description: 'Encontre informações em segundos, mesmo em milhares de documentos complexos.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Insights Automáticos',
    description: 'Descubra tendências, padrões e informações críticas sem precisar procurar.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Integração Perfeita',
    description: 'Conecte-se facilmente com seus sistemas e fluxos de trabalho existentes.'
  }
];

const Features = ({ features }) => {
  // Use default features if none provided
  const displayFeatures = features || defaultFeatures;

  return (
    <Section id="features" bgColor="bg-white">
      <SectionHeader
        subtitle="Recursos"
        title="Uma IA que Respeita Seus Dados"
        description="Descubra como a Claud.IA transforma a maneira como você analisa e utiliza seus dados empresariais"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-tertiary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Alternative card layout for features
export const FeaturesAlternative = ({ features, title, subtitle, description }) => {
  // Use default features if none provided
  const displayFeatures = features || defaultFeatures;
  
  return (
    <Section id="features-alt" bgColor="bg-gray-50">
      <SectionHeader
        subtitle={subtitle || "Recursos"}
        title={title || "Por que escolher a Claud.IA?"}
        description={description || "Nossa plataforma oferece recursos exclusivos para maximizar o valor dos seus dados"}
      />
      
      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {displayFeatures.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="h-2 bg-gradient-to-r from-primary-500 to-tertiary-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayFeatures.slice(3).map((feature, index) => (
            <motion.div
              key={index}
              className="flex bg-white rounded-lg p-4 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;