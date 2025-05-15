
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Calendar } from 'lucide-react';
import { categories } from '@/data/posters';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  categories: string[];
  postDateStart?: Date | null;
  postDateEnd?: Date | null;
  eventDateStart?: Date | null;
  eventDateEnd?: Date | null;
  keywords: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [postDateStart, setPostDateStart] = useState<Date | null>(null);
  const [postDateEnd, setPostDateEnd] = useState<Date | null>(null);
  const [eventDateStart, setEventDateStart] = useState<Date | null>(null);
  const [eventDateEnd, setEventDateEnd] = useState<Date | null>(null);
  const [keywordInput, setKeywordInput] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const applyFilters = () => {
    onFilter({
      categories: selectedCategories,
      postDateStart,
      postDateEnd,
      eventDateStart,
      eventDateEnd,
      keywords: selectedKeywords,
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keywordInput.trim() !== '') {
      e.preventDefault();
      if (!selectedKeywords.includes(keywordInput.trim())) {
        setSelectedKeywords(prev => [...prev, keywordInput.trim()]);
      }
      setKeywordInput('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setSelectedKeywords(prev => prev.filter(k => k !== keyword));
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setPostDateStart(null);
    setPostDateEnd(null);
    setEventDateStart(null);
    setEventDateEnd(null);
    setSelectedKeywords([]);
    onFilter({
      categories: [],
      postDateStart: null,
      postDateEnd: null,
      eventDateStart: null,
      eventDateEnd: null,
      keywords: [],
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for posters..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Filter</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4">
            <div className="space-y-4">
              <h3 className="font-medium text-sm mb-2">Filters</h3>
              
              {/* Categories Section */}
              <div>
                <h4 className="text-sm font-medium mb-2">Categories</h4>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Post Date Section */}
              <div>
                <h4 className="text-sm font-medium mb-2">Post Date Range</h4>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">From</p>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left font-normal text-xs h-8"
                        >
                          <Calendar className="mr-2 h-3 w-3" />
                          {postDateStart ? format(postDateStart, 'PP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={postDateStart || undefined}
                          onSelect={setPostDateStart}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">To</p>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left font-normal text-xs h-8"
                        >
                          <Calendar className="mr-2 h-3 w-3" />
                          {postDateEnd ? format(postDateEnd, 'PP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={postDateEnd || undefined}
                          onSelect={setPostDateEnd}
                          initialFocus
                          className="pointer-events-auto"
                          disabled={(date) => 
                            postDateStart ? date < postDateStart : false
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
              
              {/* Event Date Section */}
              <div>
                <h4 className="text-sm font-medium mb-2">Event Date Range</h4>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">From</p>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left font-normal text-xs h-8"
                        >
                          <Calendar className="mr-2 h-3 w-3" />
                          {eventDateStart ? format(eventDateStart, 'PP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={eventDateStart || undefined}
                          onSelect={setEventDateStart}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">To</p>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left font-normal text-xs h-8"
                        >
                          <Calendar className="mr-2 h-3 w-3" />
                          {eventDateEnd ? format(eventDateEnd, 'PP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={eventDateEnd || undefined}
                          onSelect={setEventDateEnd}
                          initialFocus
                          className="pointer-events-auto"
                          disabled={(date) => 
                            eventDateStart ? date < eventDateStart : false
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
              
              {/* Keywords Section */}
              <div>
                <h4 className="text-sm font-medium mb-2">Keywords</h4>
                <div className="mb-2">
                  <Input
                    type="text"
                    placeholder="Type keyword and press Enter"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyDown={addKeyword}
                    className="text-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-1">
                  {selectedKeywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="flex items-center gap-1">
                      {keyword}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => removeKeyword(keyword)} 
                      />
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-between pt-2">
                <Button variant="outline" size="sm" onClick={resetFilters}>
                  Reset
                </Button>
                <Button size="sm" onClick={applyFilters}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
