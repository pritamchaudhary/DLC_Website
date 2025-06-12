import React, { useState } from 'react';
import { Play, Clock, Users, Star, ChevronRight, Smartphone, CreditCard, MapPin, Video, MessageSquare, Camera } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate';
  icon: React.ComponentType<any>;
  image: string;
  lessons: string[];
  rating: number;
  students: number;
}

export function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'communication' | 'payments' | 'navigation' | 'entertainment'>('all');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  const tutorials: Tutorial[] = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Mastery',
      description: 'Learn to send messages, make video calls, and share photos with family and friends.',
      duration: '45 min',
      difficulty: 'Beginner',
      icon: MessageSquare,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: [
        'Setting up WhatsApp',
        'Sending your first message',
        'Making voice and video calls',
        'Sharing photos and videos',
        'Creating group chats',
        'Using WhatsApp status'
      ],
      rating: 4.9,
      students: 1250
    },
    {
      id: 'paytm',
      title: 'Digital Payments with Paytm',
      description: 'Safely make payments, transfer money, and pay bills using your smartphone.',
      duration: '35 min',
      difficulty: 'Beginner',
      icon: CreditCard,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: [
        'Setting up Paytm wallet',
        'Adding money to your wallet',
        'Making payments at stores',
        'Transferring money to family',
        'Paying utility bills',
        'Understanding transaction history'
      ],
      rating: 4.8,
      students: 980
    },
    {
      id: 'googlemaps',
      title: 'Navigate with Google Maps',
      description: 'Find locations, get directions, and explore places around you with confidence.',
      duration: '30 min',
      difficulty: 'Beginner',
      icon: MapPin,
      image: 'https://images.pexels.com/photos/6865121/pexels-photo-6865121.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: [
        'Understanding the map interface',
        'Searching for places',
        'Getting turn-by-turn directions',
        'Saving favorite locations',
        'Using offline maps',
        'Finding nearby services'
      ],
      rating: 4.7,
      students: 1100
    },
    {
      id: 'zoom',
      title: 'Video Calling with Zoom',
      description: 'Connect with family and attend online meetings with ease.',
      duration: '25 min',
      difficulty: 'Beginner',
      icon: Video,
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: [
        'Installing and setting up Zoom',
        'Joining a meeting',
        'Using camera and microphone',
        'Screen sharing basics',
        'Chat during meetings',
        'Recording meetings'
      ],
      rating: 4.6,
      students: 850
    },
    {
      id: 'photos',
      title: 'Managing Photos & Videos',
      description: 'Organize, edit, and share your precious memories digitally.',
      duration: '40 min',
      difficulty: 'Beginner',
      icon: Camera,
      image: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: [
        'Taking better photos',
        'Organizing photo albums',
        'Basic photo editing',
        'Sharing photos safely',
        'Backing up memories',
        'Creating slideshows'
      ],
      rating: 4.5,
      students: 720
    },
    {
      id: 'smartphone',
      title: 'Smartphone Basics',
      description: 'Master the fundamentals of using your Android or iPhone.',
      duration: '50 min',
      difficulty: 'Beginner',
      icon: Smartphone,
      image: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: [
        'Understanding your phone interface',
        'Making calls and texting',
        'Installing and managing apps',
        'Using settings and preferences',
        'Managing storage and battery',
        'Basic security and privacy'
      ],
      rating: 4.8,
      students: 1500
    }
  ];

  const categories = [
    { id: 'all', label: 'All Tutorials', count: tutorials.length },
    { id: 'communication', label: 'Communication', count: 2 },
    { id: 'payments', label: 'Payments', count: 1 },
    { id: 'navigation', label: 'Navigation', count: 1 },
    { id: 'entertainment', label: 'Media & Photos', count: 2 }
  ];

  const filteredTutorials = selectedCategory === 'all' ? tutorials : tutorials.filter(tutorial => {
    switch (selectedCategory) {
      case 'communication': return ['whatsapp', 'zoom'].includes(tutorial.id);
      case 'payments': return tutorial.id === 'paytm';
      case 'navigation': return tutorial.id === 'googlemaps';
      case 'entertainment': return ['photos', 'smartphone'].includes(tutorial.id);
      default: return true;
    }
  });

  if (selectedTutorial) {
    return (
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setSelectedTutorial(null)}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 text-lg font-medium"
        >
          ← Back to Tutorials
        </button>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-80">
            <img 
              src={selectedTutorial.image} 
              alt={selectedTutorial.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button className="bg-white bg-opacity-90 rounded-full p-6 hover:bg-opacity-100 transition-all duration-200 hover:transform hover:scale-110">
                <Play size={48} className="text-blue-600 ml-1" />
              </button>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <selectedTutorial.icon size={48} className="text-blue-600" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                  {selectedTutorial.title}
                </h2>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={20} />
                    {selectedTutorial.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={20} />
                    {selectedTutorial.students} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={20} className="text-yellow-400 fill-current" />
                    {selectedTutorial.rating}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {selectedTutorial.description}
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">What You'll Learn:</h3>
              <div className="space-y-3">
                {selectedTutorial.lessons.map((lesson, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-full p-1">
                      <ChevronRight size={20} className="text-green-600" />
                    </div>
                    <span className="text-lg text-gray-700">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-xl font-medium transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105">
              Start Tutorial
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Learn Digital Tools Step by Step
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Choose from our carefully designed tutorials that break down complex technology 
          into simple, easy-to-follow steps.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id as any)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Tutorials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutorials.map((tutorial) => (
          <div 
            key={tutorial.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:scale-105 cursor-pointer overflow-hidden"
            onClick={() => setSelectedTutorial(tutorial)}
          >
            <div className="relative h-48">
              <img 
                src={tutorial.image} 
                alt={tutorial.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                <tutorial.icon size={24} className="text-blue-600" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg px-3 py-1">
                <span className="text-sm font-medium text-gray-700">{tutorial.duration}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {tutorial.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {tutorial.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{tutorial.rating}</span>
                  <span className="text-sm text-gray-500">({tutorial.students})</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tutorial.difficulty === 'Beginner' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {tutorial.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}