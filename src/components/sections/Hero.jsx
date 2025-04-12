import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const Hero = ({ 
  title = 'Sua Assistente de IA <span>Privada e Segura</span>',
  description = 'Análises completas, visualizações interativas e insights valiosos sem compartilhar seus dados com modelos públicos de IA.',
  primaryButtonText = 'Comece Agora',
  secondaryButtonText = 'Ver Demonstração',
  primaryButtonLink = '#pricing',
  onWatchVideo = () => {},
  backgroundImage = '/api/placeholder/1600/800',
  videoThumbnail = '/api/placeholder/1200/675',
  companyLogos = [
    { url: '/api/placeholder/120/36', alt: 'Company 1' },
    { url: '/api/placeholder/120/36', alt: 'Company 2' },
    { url: '/api/placeholder/120/36', alt: 'Company 3' },
    { url: '/api/placeholder/120/36', alt: 'Company 4' },
    { url: '/api/placeholder/120/36', alt: 'Company 5' }
  ]
}) => {
  const heroRef = useRef(null);
  
  // Animation on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Process title to handle HTML tags
  const renderTitle = () => {
    if (!title.includes('<span>')) {
      return <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">{title}</h1>;
    }
    
    // Split by span tags and render with formatting
    const parts = title.split(/<\/?span>/);
    return (
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        {parts[0]}
        <span className="text-gradient bg-gradient-to-r from-primary-600 to-tertiary-500">{parts[1]}</span>
        {parts[2] || ''}
      </h1>
    );
  };

  return (
    <section className="pt-32 pb-24 relative overflow-hidden" ref={heroRef} id="hero">
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ 
          background: 'linear-gradient(135deg, rgba(91, 82, 243, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
          opacity: heroOpacity,
          y: heroY
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </motion.div>

      {/* Abstract shape for hero design */}
      <div className="hidden lg:block absolute -top-10 -right-20 w-96 h-96 bg-gradient-to-br from-primary-300/20 to-tertiary-300/20 rounded-full blur-3xl"></div>
      <div className="hidden lg:block absolute top-40 -left-20 w-80 h-80 bg-gradient-to-br from-tertiary-300/20 to-primary-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderTitle()}
          </motion.div>
          
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              to={primaryButtonLink}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="ml-2 h-5 w-5" />}
              iconPosition="right"
            >
              {primaryButtonText}
            </Button>
            
            <Button
              onClick={onWatchVideo}
              variant="secondary"
              size="lg"
              icon={<Play className="mr-2 h-5 w-5" />}
              iconPosition="left"
            >
              {secondaryButtonText}
            </Button>
          </motion.div>
        </div>

        {/* Video Thumbnail */}
        <motion.div 
          className="mt-16 relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={videoThumbnail} 
              alt="Claud.IA Interface" 
              className="w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <button 
              onClick={onWatchVideo}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-5 text-white hover:bg-white/40 transition-colors"
            >
              <Play className="w-10 h-10 fill-current" />
            </button>
          </div>
        </motion.div>

        {/* Trusted by companies */}
        {companyLogos && companyLogos.length > 0 && (
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm font-semibold text-gray-500 text-center mb-6">UTILIZADA POR EMPRESAS COMO</p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              {companyLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="col-span-1 flex justify-center items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <img className="h-9" src={logo.url} alt={logo.alt} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;