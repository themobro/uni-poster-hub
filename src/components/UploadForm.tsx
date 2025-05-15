
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/data/posters';
import PosterPreview from './PosterPreview';

const UploadForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'Job' | 'Event' | 'Party' | 'Study' | 'Misc'>('Event');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [keywords, setKeywords] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !category || !date || !location || !imageFile) {
      toast({
        title: "Missing fields",
        description: "Please fill out all required fields and upload an image.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate AI content moderation
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Poster uploaded successfully!",
        description: "Your poster has passed our content moderation check and is now live.",
      });
      
      // In a real app, we would save the poster data to a database here
      
      // Reset form
      setTitle('');
      setDescription('');
      setCategory('Event');
      setDate('');
      setLocation('');
      setKeywords('');
      setImageFile(null);
      setImagePreview(null);
      
      // Redirect to home page
      // history.push('/');
    }, 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter poster title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter poster description"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select
                value={category}
                onValueChange={(value: 'Job' | 'Event' | 'Party' | 'Study' | 'Misc') => setCategory(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Building name, room number, etc."
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords/Tags</Label>
            <Input
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Enter keywords separated by commas"
            />
            <p className="text-xs text-gray-500">
              E.g., "workshop, computer science, free"
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Poster Image *</Label>
            <Input
              id="image"
              type="file"
              onChange={handleImageChange}
              accept="image/*,.pdf"
              required
            />
            <p className="text-xs text-gray-500">
              Supported formats: JPG, PNG, PDF (max 10MB)
            </p>
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Uploading & Checking...' : 'Upload Poster'}
          </Button>
        </form>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <PosterPreview
          title={title}
          description={description}
          category={category}
          date={date}
          location={location}
          imagePreview={imagePreview}
        />
        <p className="text-xs text-gray-500 mt-4">
          * All posters are automatically scanned for inappropriate content. Posters that violate our community guidelines will be rejected.
        </p>
      </div>
    </div>
  );
};

export default UploadForm;
