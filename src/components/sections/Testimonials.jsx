import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../common/Section';

// Dados de depoimentos padrão definidos no escopo do componente
const defaultTestimonials = [
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
];

const Testimonials = ({ testimonials }) => {
  // Use default testimonials if none provided
  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <Section id="testimonials" bgColor="bg-white">
      <SectionHeader
        subtitle="Depoimentos"
        title="O Que Nossos Clientes Dizem"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute top-6 right-8 text-primary-200">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5554 9.66675C28.2034 11.0223 29.9621 12.8334 30.8315 15.1001C31.178 16.0223 31.3513 17.0001 31.3513 18.0334C31.3513 20.1889 30.4819 21.9445 28.743 23.3001C27.0042 24.6556 25.0562 25.3334 22.8991 25.3334C20.5714 25.3334 18.5958 24.5445 16.9722 22.9667C15.3486 21.3889 14.5368 19.3556 14.5368 16.8667C14.5368 14.1112 15.4916 11.6778 17.4013 9.56675C19.3476 7.45564 21.9679 5.75564 25.2623 4.46675L27.0588 7.46675C25.3401 8.11119 23.9077 8.94453 22.7617 9.96675C21.6157 10.9667 20.9891 11.8889 20.8715 12.7334C20.8715 12.9001 20.9304 13.0667 21.0481 13.2334C21.1657 13.3778 21.3774 13.5001 21.6831 13.6001C21.9888 13.6778 22.412 13.7556 22.9527 13.8334C24.5763 14.0445 25.869 14.7445 26.831 15.9334C27.8295 17.1001 28.3288 18.4889 28.3288 20.1001C28.3288 21.5112 27.7707 22.7445 26.6543 23.8001C25.5733 24.8334 24.2806 25.3501 22.7765 25.3501C20.8715 25.3501 19.3182 24.6556 18.1166 23.2667C16.915 21.8778 16.3142 20.1445 16.3142 18.0667C16.3142 14.6223 17.5746 11.6556 20.0952 9.16675C22.6159 6.67786 25.8793 4.97786 29.8744 4.06675L31.6783 7.06675C29.4095 7.73342 27.4929 8.56675 25.9249 9.56675L25.5554 9.66675ZM6.77778 9.66675C9.42578 11.0223 11.1845 12.8334 12.0539 15.1001C12.4004 16.0223 12.5736 17.0001 12.5736 18.0334C12.5736 20.1889 11.7043 21.9445 9.96535 23.3001C8.22645 24.6556 6.26316 25.3334 4.10549 25.3334C1.77777 25.3334 -0.197523 24.5445 -1.82111 22.9667C-3.4447 21.3889 -4.2565 19.3556 -4.2565 16.8667C-4.2565 14.1112 -3.30166 11.6778 -1.39198 9.56675C0.554268 7.45564 3.1746 5.75564 6.46899 4.46675L8.26559 7.46675C6.54688 8.11119 5.11446 8.94453 3.9685 9.96675C2.82254 10.9667 2.19585 11.8889 2.07826 12.7334C2.07826 12.9001 2.13715 13.0667 2.25474 13.2334C2.37233 13.3778 2.58404 13.5001 2.88987 13.6001C3.1957 13.6778 3.61883 13.7556 4.15954 13.8334C5.78312 14.0445 7.07579 14.7445 8.03777 15.9334C9.03634 17.1001 9.53562 18.4889 9.53562 20.1001C9.53562 21.5112 8.9775 22.7445 7.86127 23.8001C6.7803 24.8334 5.4876 25.3501 3.98319 25.3501C2.07826 25.3501 0.524937 24.6556 -0.676674 23.2667C-1.87829 21.8778 -2.4791 20.1445 -2.4791 18.0667C-2.4791 14.6223 -1.21862 11.6556 1.30194 9.16675C3.8225 6.67786 7.08591 4.97786 11.081 4.06675L12.8849 7.06675C10.6161 7.73342 8.69958 8.56675 7.13157 9.56675L6.77778 9.66675Z" fill="currentColor"/>
              </svg>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">"{testimonial.quote}"</p>
            
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.avatar}
                alt={testimonial.name}
              />
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Alternative testimonial carousel layout
export const TestimonialsCarousel = ({ testimonials }) => {
  // Use default testimonials if none provided
  const displayTestimonials = testimonials || defaultTestimonials;
  
  // Featured testimonial
  const featuredTestimonial = displayTestimonials[0];
  
  return (
    <Section id="testimonials-carousel" bgColor="bg-gray-50">
      <SectionHeader
        subtitle="Casos de Sucesso"
        title="O Que Nossos Clientes Estão Dizendo"
        description="A Claud.IA tem ajudado empresas de diversos setores a extrair valor de seus dados sem comprometer a privacidade"
      />
      
      <div className="mt-12">
        {/* Featured testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="relative">
                <img 
                  src={featuredTestimonial.avatar || "/api/placeholder/120/120"} 
                  alt={featuredTestimonial.name}
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-primary-500 text-white rounded-full p-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 italic mb-4">
                "{featuredTestimonial.quote}"
              </blockquote>
              <div className="font-bold text-lg">{featuredTestimonial.name}</div>
              <div className="text-primary-600">{featuredTestimonial.title}, {featuredTestimonial.company}</div>
            </div>
          </div>
        </motion.div>
        
        {/* Additional testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayTestimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-start">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-3">{testimonial.title}, {testimonial.company}</div>
                  <p className="text-gray-700">"{testimonial.quote}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;