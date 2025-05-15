
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import PosterCard from '@/components/PosterCard';
import { posters as allPosters } from '@/data/posters';

const Index = () => {
  const [posters, setPosters] = useState(allPosters);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    let filteredPosters = allPosters;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredPosters = filteredPosters.filter(poster => 
        poster.title.toLowerCase().includes(query) ||
        poster.description.toLowerCase().includes(query) ||
        poster.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filteredPosters = filteredPosters.filter(poster => 
        selectedCategories.includes(poster.category)
      );
    }

    setPosters(filteredPosters);
  }, [searchQuery, selectedCategories]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to UniPostAI</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover campus events, job opportunities, study groups, and more - all in one place.
            </p>
            <div className="mb-6">
              <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-main">
            <h2 className="text-2xl font-semibold mb-8">
              {posters.length > 0 ? 'Browse Posters' : 'No posters found'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {posters.map(poster => (
                <PosterCard key={poster.id} poster={poster} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
