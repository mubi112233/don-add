import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  ariaLabel?: string;
  variant?: 'default' | 'button' | 'text';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
}

const InternalLink: React.FC<InternalLinkProps> = ({
  to,
  children,
  className = '',
  title,
  ariaLabel,
  variant = 'default',
  size = 'md',
  external = false
}) => {
  const baseClasses = 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    default: 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline',
    button: 'inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    text: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium'
  };
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const linkProps = {
    title,
    className: combinedClasses,
    'aria-label': ariaLabel
  };

  const MotionLink = motion(Link);
  const MotionA = motion.a;

  if (external) {
    return (
      <MotionA
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </MotionA>
    );
  }

  return (
    <MotionLink
      to={to}
      {...linkProps}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionLink>
  );
};

export default InternalLink;
