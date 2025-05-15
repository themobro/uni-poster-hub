
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posters } from '@/data/posters';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, User, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CategoryTag from '@/components/CategoryTag';

const PosterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [poster, setPoster] = useState(posters.find(p => p.id === id));
  
  useEffect(() => {
    if (!poster) {
      navigate('/not-found');
    }
  }, [poster, navigate]);
  
  if (!poster) {
    return null;
  }
  
  const handleReport = () => {
    toast({
      title: "Thank you for reporting",
      description: "Our team will review this poster shortly.",
    });
  };
  
  const formattedDate = new Date(poster.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container-main py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to posters
          </Button>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={poster.imageUrl} 
                  alt={poster.title}
                  className="w-full object-contain bg-gray-100" 
                  style={{ maxHeight: '600px' }}
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <CategoryTag category={poster.category} className="mb-4" />
              <h1 className="text-3xl font-bold mb-4">{poster.title}</h1>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Date & Time</h3>
                    <p className="text-gray-600">{formattedDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">{poster.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Posted By</h3>
                    <p className="text-gray-600">{poster.uploadedBy}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6 mb-6">
                <h3 className="font-semibold text-lg mb-3">Description</h3>
                <p className="text-gray-600 whitespace-pre-line">{poster.description}</p>
              </div>
              
              {poster.keywords.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {poster.keywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <Button 
                variant="outline" 
                className="text-red-600 hover:text-red-700 hover:bg-red-50 w-full"
                onClick={handleReport}
              >
                Report This Poster
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PosterDetail;
