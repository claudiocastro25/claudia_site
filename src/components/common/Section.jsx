import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  children,
  className = '',
  id = '',
  bgColor = 'bg-white',
  paddingY = 'py-20',
  paddingX = 'px-4 sm:px-6 lg:px-8',
  containerWidth = 'max-w-7xl',
  withAnimation = true,
  staggerChildren = 0.1,
  ...props
}) => {
  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: 0.1,
      },
    },
  };

  // Child item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Combine classes
  const sectionClasses = `${bgColor} ${paddingY} overflow-hidden ${className}`;
  const containerClasses = `mx-auto ${containerWidth} ${paddingX}`;

  return (
    <section id={id} className={sectionClasses} {...props}>
      {withAnimation ? (
        <motion.div
          className={containerClasses}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {React.Children.map(children, (child, index) =>
            child ? (
              React.cloneElement(
                child,
                {
                  ...child.props,
                  variants: child.props.variants || itemVariants,
                  key: `child-${index}`,
                }
              )
            ) : null
          )}
        </motion.div>
      ) : (
        <div className={containerClasses}>{children}</div>
      )}
    </section>
  );
};

// Headers for sections
export const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  titleSize = 'text-3xl sm:text-4xl lg:text-5xl',
  subtitleSize = 'text-base',
  descriptionSize = 'text-xl',
  className = '',
  titleClass = '',
  subtitleClass = '',
  descriptionClass = '',
  variants,
  ...props
}) => {
  // Text alignment classes
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  // Animation variants
  const headerVariants = variants || {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`mb-12 ${alignClasses[align]} ${className}`}
      variants={headerVariants}
      {...props}
    >
      {subtitle && (
        <h3 className={`${subtitleSize} font-semibold text-primary-600 tracking-wide uppercase mb-3 ${subtitleClass}`}>
          {subtitle}
        </h3>
      )}
      {title && (
        <h2 className={`${titleSize} font-extrabold text-gray-900 mb-4 ${titleClass}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`${descriptionSize} text-gray-600 max-w-2xl mx-auto ${descriptionClass}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default Section;