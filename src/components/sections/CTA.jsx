import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CTA = ({
  title = 'Pronto para transformar sua análise de dados?',
  description = 'Comece hoje mesmo com 7 dias de teste grátis. Sem compromisso.',
  primaryButtonText = 'Começar Teste Grátis',
  secondaryButtonText = 'Ver Planos',
  primaryButtonLink = '/register',
  secondaryButtonAction = () => {},
  gradient = 'from-primary-600 to-tertiary-600',
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 bg-gradient-to-br ${gradient} text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={primaryButtonLink}
              variant="secondary"
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-50"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              {primaryButtonText}
            </Button>
            
            <Button
              onClick={secondaryButtonAction}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Variação alternativa com fundo de imagem
export const CTAWithBackground = ({
  title = 'Pronto para transformar sua análise de dados?',
  description = 'Comece hoje mesmo com 7 dias de teste grátis. Sem compromisso.',
  primaryButtonText = 'Começar Teste Grátis',
  secondaryButtonText = 'Ver Planos',
  primaryButtonLink = '/register',
  secondaryButtonAction = () => {},
  backgroundImage = '/api/placeholder/1920/1080',
  className = '',
}) => {
  return (
    <section className={`relative py-20 text-white overflow-hidden ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-tertiary-900/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={primaryButtonLink}
              variant="primary"
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              {primaryButtonText}
            </Button>
            
            <Button
              onClick={secondaryButtonAction}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;