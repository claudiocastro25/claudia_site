import React from 'react';

const Card = ({
  children,
  className = '',
  variant = 'default',
  elevation = 'md',
  hover = false,
  bordered = false,
  rounded = 'lg',
  padding = 'md',
  ...props
}) => {
  // Base classes
  const baseClasses = 'bg-white overflow-hidden transition-all duration-200';
  
  // Elevation (shadow) classes
  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };
  
  // Variant classes
  const variantClasses = {
    default: '',
    primary: 'border-l-4 border-primary-500',
    secondary: 'border-l-4 border-secondary-500',
    tertiary: 'border-l-4 border-tertiary-500',
    success: 'border-l-4 border-green-500',
    warning: 'border-l-4 border-yellow-500',
    danger: 'border-l-4 border-red-500',
    info: 'border-l-4 border-blue-500',
  };
  
  // Hover classes
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
  // Border classes
  const borderClasses = bordered ? 'border border-gray-200' : '';
  
  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };
  
  // Padding classes
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8',
  };
  
  // Combine all classes
  const combinedClasses = `
    ${baseClasses} 
    ${elevationClasses[elevation]} 
    ${variantClasses[variant]} 
    ${hoverClasses} 
    ${borderClasses} 
    ${roundedClasses[rounded]} 
    ${paddingClasses[padding]} 
    ${className}
  `.trim();
  
  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;