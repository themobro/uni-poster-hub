
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UploadForm from '@/components/UploadForm';
import { Button } from '@/components/ui/button';
import { Upload, LogIn } from 'lucide-react';

const UploadPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container-main py-8">
          <h1 className="text-3xl font-bold mb-2">Upload Poster</h1>
          <p className="text-gray-600 mb-8">
            Share your event, job opportunity, or announcement with the campus community.
          </p>
          
          {isAuthenticated ? (
            <UploadForm />
          ) : (
            <div className="bg-blue-50 p-8 rounded-lg text-center max-w-md mx-auto">
              <Upload className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Login Required</h2>
              <p className="text-gray-600 mb-6">
                Please log in with your university account to upload posters.
              </p>
              <Button onClick={() => navigate('/login')}>
                <LogIn className="mr-2 h-4 w-4" />
                Login to Upload
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadPage;
