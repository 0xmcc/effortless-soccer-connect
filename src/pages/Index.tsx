
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { MapPin, MessageSquare, Search } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16">
        <Hero />
      </div>
      
      {/* How It Works Section */}
      <section className="py-20 bg-soccer-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Find and join local soccer games in just a few taps, or create your own game and invite players.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-soccer-gray/40 text-center hover-shadow animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto bg-soccer-green/10 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-soccer-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Games</h3>
              <p className="text-foreground/70">
                Browse upcoming games on our interactive map or list view. Apply filters to find the perfect match.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-soccer-gray/40 text-center hover-shadow animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto bg-soccer-blue/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-soccer-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join or Create</h3>
              <p className="text-foreground/70">
                Join existing games with one tap or create your own game in seconds and set your preferences.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-soccer-gray/40 text-center hover-shadow animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto bg-soccer-orange/10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-soccer-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Play & Connect</h3>
              <p className="text-foreground/70">
                Get real-time updates, chat with players, and enjoy your game. Build your soccer community.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/dashboard">
              <Button variant="primary" size="lg" className="shadow-md">
                Find Games Near Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Players Say</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Join thousands of players who are finding and enjoying local soccer games.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-soccer-gray/40 hover-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-soccer-green rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">Jamie Davis</h4>
                  <p className="text-sm text-foreground/70">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">
                "I've found amazing games and made new friends through this app. The one-tap joining feature is incredibly convenient!"
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-soccer-gray/40 hover-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-soccer-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  TS
                </div>
                <div>
                  <h4 className="font-semibold">Taylor Smith</h4>
                  <p className="text-sm text-foreground/70">Chicago, IL</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">
                "After moving to a new city, this app helped me quickly find soccer games nearby. Real-time updates are super helpful."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-soccer-gray/40 hover-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-soccer-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AJ
                </div>
                <div>
                  <h4 className="font-semibold">Alex Johnson</h4>
                  <p className="text-sm text-foreground/70">Austin, TX</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">
                "Creating games is so simple. The filters make it easy to find players at my skill level for balanced, fun matches."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-soccer-green/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Join our community of soccer enthusiasts today and never miss a game again.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dashboard">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                Find Games
              </Button>
            </Link>
            <Link to="/create-game">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-md">
                Create Game
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-10 border-t border-soccer-gray/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-soccer-green flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="font-bold text-lg">
                  Effortless<span className="text-soccer-green">Soccer</span>
                </span>
              </div>
              <p className="text-sm text-foreground/70 mt-2">
                Connecting local soccer players since 2023
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="#" className="text-foreground/70 hover:text-soccer-green transition-colors">About Us</a>
              <a href="#" className="text-foreground/70 hover:text-soccer-green transition-colors">Privacy Policy</a>
              <a href="#" className="text-foreground/70 hover:text-soccer-green transition-colors">Terms of Service</a>
              <a href="#" className="text-foreground/70 hover:text-soccer-green transition-colors">Contact</a>
              <a href="#" className="text-foreground/70 hover:text-soccer-green transition-colors">Help</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-soccer-gray/40 text-center text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} EffortlessSoccer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
