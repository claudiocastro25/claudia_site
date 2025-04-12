import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md', 
  className = '',
  icon = null,
  iconPosition = 'left',
  href = null,
  to = null,
  onClick = null,
  type = 'button',
  fullWidth = false,
  disabled = false,
  ...props 
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-md',
    xl: 'px-8 py-4 text-lg rounded-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-sm',
    secondary: 'bg-primary-100 text-primary-700 hover:bg-primary-200 focus:ring-2 focus:ring-offset-2 focus:ring-primary-400',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-offset-2 focus:ring-primary-400',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-offset-2 focus:ring-primary-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500',
    'danger-outline': 'border border-red-600 text-red-600 hover:bg-red-50 focus:ring-2 focus:ring-offset-2 focus:ring-red-400',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-400',
    'success-outline': 'border border-green-500 text-green-500 hover:bg-green-50 focus:ring-2 focus:ring-offset-2 focus:ring-green-400',
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';
  
  // Combine all classes
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${disabledClasses} ${className}`;
  
  // Render content with icon
  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  // Render based on type (link, router link, or button)
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {renderContent()}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;