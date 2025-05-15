
export interface Poster {
  id: string;
  title: string;
  description: string;
  category: 'Job' | 'Event' | 'Party' | 'Study' | 'Misc';
  date: string;
  location: string;
  keywords: string[];
  imageUrl: string;
  uploadedBy: string;
  uploadedAt: string;
}

export const categories = ['Job', 'Event', 'Party', 'Study', 'Misc'];

export const posters: Poster[] = [
  {
    id: '1',
    title: 'Campus Job Fair 2025',
    description: 'Looking for a summer internship or a full-time job? Come to our annual job fair and meet recruiters from top companies in tech, finance, and more!',
    category: 'Job',
    date: '2025-04-15',
    location: 'University Main Hall',
    keywords: ['job', 'career', 'internship', 'networking'],
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop',
    uploadedBy: 'Career Services',
    uploadedAt: '2025-03-01T12:00:00Z'
  },
  {
    id: '2',
    title: 'End of Semester Party',
    description: 'Celebrate the end of finals with the biggest party of the year! DJ, drinks, and good vibes.',
    category: 'Party',
    date: '2025-06-20',
    location: 'Student Union Ballroom',
    keywords: ['party', 'music', 'social', 'semester'],
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop',
    uploadedBy: 'Student Council',
    uploadedAt: '2025-05-28T09:12:00Z'
  },
  {
    id: '3',
    title: 'AI Research Group - New Members',
    description: 'Our AI research group is looking for new members interested in machine learning, natural language processing, and computer vision.',
    category: 'Study',
    date: '2025-03-10',
    location: 'Computer Science Building, Room 305',
    keywords: ['AI', 'research', 'machine learning', 'study group'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop',
    uploadedBy: 'Dr. Alan Smith',
    uploadedAt: '2025-02-20T15:30:00Z'
  },
  {
    id: '4',
    title: 'International Food Festival',
    description: 'Experience cuisines from around the world! Student clubs will be serving traditional dishes from their home countries.',
    category: 'Event',
    date: '2025-04-05',
    location: 'University Quad',
    keywords: ['food', 'culture', 'international', 'festival'],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
    uploadedBy: 'International Student Association',
    uploadedAt: '2025-03-15T10:00:00Z'
  },
  {
    id: '5',
    title: 'Textbook Exchange',
    description: 'Buy, sell, or trade textbooks for the upcoming semester. Save money and help fellow students!',
    category: 'Misc',
    date: '2025-08-25',
    location: 'Library Courtyard',
    keywords: ['textbooks', 'exchange', 'books', 'sale'],
    imageUrl: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=600&auto=format&fit=crop',
    uploadedBy: 'University Library',
    uploadedAt: '2025-08-10T14:00:00Z'
  },
  {
    id: '6',
    title: 'Summer Research Opportunity',
    description: 'Paid research position in the Biology department studying climate change impacts on local ecosystems.',
    category: 'Job',
    date: '2025-05-01',
    location: 'Science Building, Room 210',
    keywords: ['research', 'biology', 'climate', 'paid'],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop',
    uploadedBy: 'Biology Department',
    uploadedAt: '2025-04-01T11:20:00Z'
  },
  {
    id: '7',
    title: 'Hackathon 2025',
    description: '48-hour coding competition with prizes up to $5,000. All skill levels welcome!',
    category: 'Event',
    date: '2025-07-15',
    location: 'Engineering Building',
    keywords: ['coding', 'hackathon', 'competition', 'tech'],
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop',
    uploadedBy: 'Computer Science Club',
    uploadedAt: '2025-06-01T08:00:00Z'
  },
  {
    id: '8',
    title: 'Calculus Study Group',
    description: 'Weekly study group for Calculus I & II. We meet every Wednesday to work through problem sets and prepare for exams.',
    category: 'Study',
    date: '2025-03-05',
    location: 'Math Building, Room 120',
    keywords: ['math', 'calculus', 'study', 'group'],
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop',
    uploadedBy: 'Math Club',
    uploadedAt: '2025-02-15T16:45:00Z'
  }
];
