
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import CategoryTag from './CategoryTag';
import type { Poster } from '@/data/posters';

interface PosterCardProps {
  poster: Poster;
}

const PosterCard: React.FC<PosterCardProps> = ({ poster }) => {
  const formattedDate = new Date(poster.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link to={`/poster/${poster.id}`}>
      <Card className="h-full overflow-hidden card-hover">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={poster.imageUrl} 
            alt={poster.title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <CategoryTag category={poster.category} />
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold line-clamp-2 mb-2">{poster.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{poster.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-xs text-gray-500">
          {poster.location}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PosterCard;
