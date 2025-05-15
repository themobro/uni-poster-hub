
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryTagProps {
  category: 'Job' | 'Event' | 'Party' | 'Study' | 'Misc';
  className?: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ category, className }) => {
  const getCategoryStyles = () => {
    switch (category) {
      case 'Job':
        return 'bg-blue-100 text-blue-800';
      case 'Event':
        return 'bg-purple-100 text-purple-800';
      case 'Party':
        return 'bg-pink-100 text-pink-800';
      case 'Study':
        return 'bg-green-100 text-green-800';
      case 'Misc':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      getCategoryStyles(),
      className
    )}>
      {category}
    </span>
  );
};

export default CategoryTag;
