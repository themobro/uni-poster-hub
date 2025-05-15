
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CategoryTag from './CategoryTag';

interface PosterPreviewProps {
  title: string;
  description: string;
  category: 'Job' | 'Event' | 'Party' | 'Study' | 'Misc';
  date: string;
  location: string;
  imagePreview: string | null;
}

const PosterPreview: React.FC<PosterPreviewProps> = ({
  title,
  description,
  category,
  date,
  location,
  imagePreview
}) => {
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }) : '';

  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Poster Preview"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image selected
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          {category && <CategoryTag category={category} />}
          {date && <div className="text-sm text-gray-500">{formattedDate}</div>}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title || 'Untitled'}</h3>
        <p className="text-sm text-gray-600 mb-2">{description || 'No description'}</p>
        {location && <p className="text-xs text-gray-500">{location}</p>}
      </CardContent>
    </Card>
  );
};

export default PosterPreview;
