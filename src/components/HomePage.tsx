import React from 'react';
import { Users, Target, Heart, Star, BookOpen, MessageCircle, Smartphone } from 'lucide-react';

export function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Step-by-Step Tutorials',
      description: 'Learn at your own pace with easy-to-follow video tutorials for popular apps like WhatsApp, Paytm, and Google Maps.'
    },
    {
      icon: MessageCircle,
      title: 'AI Assistant - DigiBuddy',
      description: 'Get instant help from our friendly AI chatbot that answers your questions 24/7 in simple language.'
    },
    {
      icon: Smartphone,
      title: 'Practical Learning',
      description: 'Focus on real-world digital tools that make your daily life easier and more connected.'
    }
  ];

  const testimonials = [
    {
      name: 'Sunita Sharma',
      age: 62,
      text: 'I never thought I could use WhatsApp at my age. This course made it so simple!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      age: 58,
      text: 'The tutorials are clear and the AI helper is like having a patient teacher always available.',
      rating: 5
    },
    {
      name: 'Meera Patel',
      age: 65,
      text: 'Now I can video call my grandchildren and use Google Maps to navigate. Thank you!',
      rating: 5
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6">
            Welcome to Your Digital Journey
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Learn digital tools at your own pace with our friendly, easy-to-understand tutorials 
            designed specifically for parents and seniors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-xl font-medium transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105">
              Start Learning Today
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-medium transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105">
              Talk to DigiBuddy
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Why Choose Our Course?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <feature.icon size={48} className="text-blue-600" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                {feature.title}
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Target size={64} className="mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl md:text-2xl leading-relaxed">
            To bridge the digital divide by making technology accessible, understandable, 
            and enjoyable for everyone, regardless of age or experience level.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          What Our Learners Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic text-center">
                "{testimonial.text}"
              </p>
              <div className="text-center">
                <p className="font-bold text-blue-700 text-xl">{testimonial.name}</p>
                <p className="text-gray-600">Age {testimonial.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-50 rounded-3xl shadow-xl p-8 md:p-12 text-center">
        <Heart size={64} className="mx-auto mb-6 text-green-600" />
        <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Ready to Get Started?
        </h3>
        <p className="text-xl text-gray-700 mb-8">
          Join thousands of learners who have already transformed their digital skills.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl text-xl font-medium transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105">
          Begin Your Journey
        </button>
      </section>
    </div>
  );
}