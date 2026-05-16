import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  homeLabel?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items = [], 
  homeLabel = "Home" 
}) => {
  const location = useLocation();
  
  // Generate breadcrumbs from current path if items not provided
  const generateBreadcrumbsFromPath = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbsFromPath();
  
  if (location.pathname === '/') {
    return null; // Don't show breadcrumbs on homepage
  }
  
  const allItems = [
    { label: homeLabel, href: '/' },
    ...breadcrumbItems
  ];
  
  return (
    <nav 
      className="flex items-center space-x-1 sm:space-x-2 text-sm text-muted-foreground py-4 px-4 sm:px-6 md:px-8 lg:px-12"
      aria-label="Breadcrumb navigation"
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;
        
        return (
          <motion.div
            key={item.href || item.label}
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {index === 0 && (
              <Home className="w-4 h-4 mr-1 text-muted-foreground" aria-hidden="true" />
            )}
            
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-foreground transition-colors duration-200 font-medium"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
            
            {!isLast && (
              <ChevronRight 
                className="w-4 h-4 mx-1 sm:mx-2 text-muted-foreground flex-shrink-0" 
                aria-hidden="true" 
              />
            )}
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
