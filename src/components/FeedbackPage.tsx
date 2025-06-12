import React, { useState } from 'react';
import { Star, Send, MessageSquare, ThumbsUp, Heart, CheckCircle } from 'lucide-react';

interface FeedbackFormData {
  name: string;
  email: string;
  age: string;
  rating: number;
  category: string;
  message: string;
  improvements: string[];
}

export function FeedbackPage() {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    email: '',
    age: '',
    rating: 0,
    category: '',
    message: '',
    improvements: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const categories = [
    'Website Design',
    'Tutorial Content',
    'AI Assistant (DigiBuddy)',
    'Accessibility Features',
    'Technical Issues',
    'Suggestions for New Features',
    'General Feedback'
  ];

  const improvementOptions = [
    'Larger text size',
    'More video tutorials',
    'Voice instructions',
    'Simpler language',
    'More practice exercises',
    'Live help support',
    'Mobile app version',
    'Offline tutorials'
  ];

  const testimonials = [
    {
      name: 'Kamala Devi',
      age: 68,
      text: 'This website has changed my life! I can now video call my children living abroad.',
      rating: 5
    },
    {
      name: 'Prakash Sharma',
      age: 61,
      text: 'The step-by-step tutorials are perfect. I learned WhatsApp in just one day!',
      rating: 5
    },
    {
      name: 'Saroja Rao',
      age: 65,
      text: 'DigiBuddy is so patient and helpful. It\'s like having a tech-savvy grandchild always available.',
      rating: 5
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImprovementChange = (improvement: string) => {
    setFormData(prev => ({
      ...prev,
      improvements: prev.improvements.includes(improvement)
        ? prev.improvements.filter(item => item !== improvement)
        : [...prev.improvements, improvement]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('Feedback submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <CheckCircle size={80} className="mx-auto text-green-600 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Thank You for Your Feedback!
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Your valuable input helps us make digital learning better for everyone. 
            We truly appreciate you taking the time to share your thoughts with us.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                age: '',
                rating: 0,
                category: '',
                message: '',
                improvements: []
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            Submit Another Feedback
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          We Value Your Feedback
        </h2>
        <p className="text-xl text-gray-700">
          Help us improve by sharing your experience and suggestions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-lg font-medium text-gray-700 mb-2">
                  Age (Optional)
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Overall Rating *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="p-1 transition-all duration-200 hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={`${
                        star <= (hoveredRating || formData.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2">
                Feedback Category *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                What would help improve your experience? (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {improvementOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.improvements.includes(option)}
                      onChange={() => handleImprovementChange(option)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-600"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please share your thoughts, suggestions, or any issues you encountered..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-xl font-medium transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send size={24} />
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
              <Heart className="text-red-500" />
              What Our Learners Say
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic text-center">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <p className="font-bold text-blue-700">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">Age {testimonial.age}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl shadow-lg p-6 md:p-8 text-white text-center">
            <MessageSquare size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Quick Feedback</h3>
            <p className="mb-6">
              Found something that could be better? We're all ears! 
              Every piece of feedback helps us serve you better.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2">
                <ThumbsUp size={20} />
                Like
              </button>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2">
                <MessageSquare size={20} />
                Suggest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}