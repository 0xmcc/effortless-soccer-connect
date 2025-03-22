
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-soccer-green/10 blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-soccer-blue/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-24 flex flex-col-reverse lg:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pr-10 animate-fade-in relative z-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full text-soccer-green-dark bg-soccer-green/10 border border-soccer-green/20 animate-bounce-in">
            One-tap local soccer matchmaking
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Find your next 
            <span className="text-soccer-green relative inline-block ml-2">
              soccer match
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-soccer-green/20 -z-10"></span>
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
            Connect with local players, join pick-up games, or create your own matches with just one tap. 
            Find the perfect game based on your skill level, location, and availability.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/dashboard">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md hover-lift">
                Find Games Near Me
              </Button>
            </Link>
            <Link to="/create-game">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Create a Game
              </Button>
            </Link>
          </div>
          
          <div className="mt-10 flex items-center gap-8 text-foreground/70">
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-soccer-green">1000+</span>
              <span className="text-sm">Active Players</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-soccer-blue">150+</span>
              <span className="text-sm">Weekly Games</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-soccer-orange">25+</span>
              <span className="text-sm">Cities</span>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 animate-fade-in relative z-20">
          <div className="relative">
            {/* Main image */}
            <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Soccer players on field" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-soccer-green/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-soccer-blue/20 rounded-full blur-2xl -z-10"></div>
            
            {/* Floating card 1 */}
            <div className="absolute -left-10 top-1/4 glass-panel rounded-2xl p-4 shadow-lg animate-pulse-soft z-30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-soccer-orange/20 flex items-center justify-center">
                  <span className="text-soccer-orange-dark text-sm font-bold">5v5</span>
                </div>
                <div>
                  <p className="font-semibold">Casual Match</p>
                  <p className="text-xs text-foreground/70">2.5 miles away</p>
                </div>
              </div>
            </div>
            
            {/* Floating card 2 */}
            <div className="absolute -right-8 bottom-1/4 glass-panel rounded-2xl p-4 shadow-lg animate-pulse-soft animation-delay-300 z-30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-soccer-green/20 flex items-center justify-center">
                  <span className="text-soccer-green-dark text-sm font-bold">7v7</span>
                </div>
                <div>
                  <p className="font-semibold">Competitive</p>
                  <p className="text-xs text-foreground/70">4 spots left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-soccer-gray/40 hover-shadow animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-full bg-soccer-green/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-soccer-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Local Games</h3>
            <p className="text-foreground/70">Discover soccer matches happening near you with our interactive map and filtering options.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-soccer-gray/40 hover-shadow animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 rounded-full bg-soccer-blue/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-soccer-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">One-Tap Joining</h3>
            <p className="text-foreground/70">Join games with a single tap and get instant confirmations without complicated signups.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-soccer-gray/40 hover-shadow animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 rounded-full bg-soccer-orange/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-soccer-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-foreground/70">Get instant notifications about game status, player updates, and upcoming matches.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
