
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import GameCard from '../components/GameCard';
import { mockUserProfile, mockGames } from '../utils/mockData';
import { User, Calendar, MapPin, Settings, LogOut, Edit2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [upcomingGames, setUpcomingGames] = useState<any[]>([]);
  const [pastGames, setPastGames] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  useEffect(() => {
    // Simulate API call to fetch user profile
    setIsLoading(true);
    setTimeout(() => {
      setProfile(mockUserProfile);
      
      // Get upcoming games
      const upcoming = mockGames.filter(game => 
        mockUserProfile.upcomingGames.includes(game.id)
      );
      setUpcomingGames(upcoming);
      
      // Get past games
      const past = mockGames.filter(game => 
        mockUserProfile.pastGames.includes(game.id)
      );
      setPastGames(past);
      
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading || !profile) {
    return (
      <div className="min-h-screen flex flex-col bg-soccer-gray/30">
        <Navbar />
        <main className="flex-grow pt-16 flex items-center justify-center">
          <div className="p-8 text-center">
            <div className="w-16 h-16 border-4 border-soccer-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading profile...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-soccer-gray/30">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-6">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 mb-6 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-soccer-green-dark to-soccer-green relative"></div>
            <div className="px-6 pb-6 pt-0 relative">
              <div className="w-24 h-24 rounded-full bg-white p-1.5 absolute -top-12">
                <div className="w-full h-full rounded-full bg-soccer-green flex items-center justify-center text-white text-2xl font-bold">
                  {profile.name.charAt(0)}
                </div>
              </div>
              
              <div className="ml-28 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-foreground/70 mt-1">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{profile.age} years old</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{profile.gamesPlayed} games played</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{profile.locationRadius} mile radius</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-0 flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Edit2 size={14} />
                    <span>Edit Profile</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 border-red-300 text-red-500 hover:bg-red-50">
                    <LogOut size={14} />
                    <span>Sign Out</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Preferences and Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Preferences */}
            <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Preferences</h2>
                <button className="text-soccer-green hover:text-soccer-green-dark">
                  <Settings size={16} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Preferred Skill Level</p>
                  <div className="flex gap-2">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                      profile.preferredSkillLevel === 'casual' ? "bg-soccer-green/10 text-soccer-green-dark" : 
                      profile.preferredSkillLevel === 'intermediate' ? "bg-soccer-blue/10 text-soccer-blue-dark" :
                      "bg-soccer-orange/10 text-soccer-orange-dark"
                    )}>
                      {profile.preferredSkillLevel.charAt(0).toUpperCase() + profile.preferredSkillLevel.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Preferred Game Types</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.preferredGameTypes.map((type: string) => (
                      <span key={type} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-soccer-gray/70">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Location Radius</p>
                  <p className="font-medium">{profile.locationRadius} miles</p>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Update Preferences
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Activity Stats */}
            <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-6">
              <h2 className="text-lg font-semibold mb-4">Activity Stats</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-soccer-gray/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-soccer-green-dark">{profile.gamesPlayed}</p>
                  <p className="text-sm text-foreground/70">Games Played</p>
                </div>
                
                <div className="bg-soccer-gray/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-soccer-blue-dark">{profile.gamesCreated}</p>
                  <p className="text-sm text-foreground/70">Games Created</p>
                </div>
                
                <div className="bg-soccer-gray/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-soccer-orange-dark">{upcomingGames.length}</p>
                  <p className="text-sm text-foreground/70">Upcoming Games</p>
                </div>
                
                <div className="bg-soccer-gray/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-foreground/80">{pastGames.length}</p>
                  <p className="text-sm text-foreground/70">Past Games</p>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <Link to="/create-game">
                  <Button variant="primary" className="w-full">
                    Create a New Game
                  </Button>
                </Link>
                
                <Link to="/dashboard">
                  <Button variant="outline" className="w-full">
                    Find Games Nearby
                  </Button>
                </Link>
                
                <button className="w-full text-left p-3 rounded-lg border border-soccer-gray-dark/30 hover:bg-soccer-gray/30 transition-colors">
                  <p className="font-medium">Invite Friends</p>
                  <p className="text-xs text-foreground/70">Share the app with your soccer buddies</p>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg border border-soccer-gray-dark/30 hover:bg-soccer-gray/30 transition-colors">
                  <p className="font-medium">Help & Support</p>
                  <p className="text-xs text-foreground/70">Get assistance with the app</p>
                </button>
              </div>
            </div>
          </div>
          
          {/* Games Tabs */}
          <div>
            <div className="flex border-b border-soccer-gray-dark/30 mb-6">
              <button 
                className={cn(
                  "px-6 py-3 font-medium text-foreground/70 border-b-2 border-transparent",
                  activeTab === 'upcoming' && "text-soccer-green border-soccer-green"
                )}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Games
              </button>
              <button 
                className={cn(
                  "px-6 py-3 font-medium text-foreground/70 border-b-2 border-transparent",
                  activeTab === 'past' && "text-soccer-green border-soccer-green"
                )}
                onClick={() => setActiveTab('past')}
              >
                Past Games
              </button>
            </div>
            
            {activeTab === 'upcoming' ? (
              <div className="space-y-6">
                {upcomingGames.length === 0 ? (
                  <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-8 text-center">
                    <Calendar size={48} className="mx-auto text-foreground/40 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Upcoming Games</h3>
                    <p className="text-foreground/70 mb-6">
                      You haven't joined any upcoming games yet.
                    </p>
                    <Link to="/dashboard">
                      <Button variant="primary">Find Games to Join</Button>
                    </Link>
                  </div>
                ) : (
                  upcomingGames.map((game) => (
                    <GameCard
                      key={game.id}
                      id={game.id}
                      title={game.title}
                      location={game.location}
                      distance={game.distance}
                      date={game.date}
                      time={game.time}
                      gameType={game.gameType}
                      skillLevel={game.skillLevel}
                      playersJoined={game.playersJoined}
                      maxPlayers={game.maxPlayers}
                      status={game.status}
                    />
                  ))
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {pastGames.length === 0 ? (
                  <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-8 text-center">
                    <Calendar size={48} className="mx-auto text-foreground/40 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Past Games</h3>
                    <p className="text-foreground/70 mb-6">
                      You haven't participated in any games yet.
                    </p>
                    <Link to="/dashboard">
                      <Button variant="primary">Find Games to Join</Button>
                    </Link>
                  </div>
                ) : (
                  pastGames.map((game) => (
                    <GameCard
                      key={game.id}
                      id={game.id}
                      title={game.title}
                      location={game.location}
                      distance={game.distance}
                      date={game.date}
                      time={game.time}
                      gameType={game.gameType}
                      skillLevel={game.skillLevel}
                      playersJoined={game.playersJoined}
                      maxPlayers={game.maxPlayers}
                      status={game.status}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
