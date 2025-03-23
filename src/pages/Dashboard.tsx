
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FilterPanel from '../components/FilterPanel';
import GameList from '../components/GameList';
import GameMap from '../components/GameMap';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { MapPin, List, Filter } from 'lucide-react';
import { mockGames, filterGames } from '../utils/mockData';

const Dashboard = () => {
  const [view, setView] = useState<'map' | 'list'>('map');
  const [selectedGameId, setSelectedGameId] = useState<string | undefined>(undefined);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [games, setGames] = useState(mockGames);
  const [filteredGames, setFilteredGames] = useState(mockGames);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    setTimeout(() => {
      setGames(mockGames);
      setFilteredGames(mockGames);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleFilterChange = (filters: any) => {
    const results = filterGames(games, filters);
    setFilteredGames(results);
  };

  const toggleView = () => {
    setView(prev => prev === 'map' ? 'list' : 'map');
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-soccer-gray/30">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header Bar */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold mb-4 sm:mb-0">Find Soccer Games</h1>
            
            <div className="flex items-center gap-3">
              {/* View toggle */}
              <button 
                className="flex items-center gap-2 btn-outline"
                onClick={toggleView}
              >
                {view === 'map' ? (
                  <>
                    <List size={16} />
                    <span>List View</span>
                  </>
                ) : (
                  <>
                    <MapPin size={16} />
                    <span>Map View</span>
                  </>
                )}
              </button>
              
              {/* Mobile filter toggle */}
              <button 
                className="sm:hidden flex items-center gap-2 btn-outline"
                onClick={toggleFilter}
              >
                <Filter size={16} />
                <span>Filter</span>
              </button>
              
              {/* Create Game Button */}
              <Link to="/create-game">
                <Button variant="primary">Create Game</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Filters - sidebar on desktop, expandable on mobile */}
            <div className={`md:col-span-1 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
              <FilterPanel onFilterChange={handleFilterChange} />
            </div>
            
            {/* Main content area */}
            <div className="md:col-span-2 lg:col-span-3">
              {/* View Content */}
              {view === 'map' ? (
                <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 overflow-hidden flex flex-col h-[700px]">
                  <div className="flex-grow">
                    <GameMap 
                      games={filteredGames} 
                      onGameSelect={setSelectedGameId}
                      selectedGameId={selectedGameId}
                      className="h-full w-full"
                    />
                  </div>
                  
                  {/* Game count */}
                  <div className="p-4 border-t border-soccer-gray/40 flex justify-between items-center">
                    <div>
                      <span className="font-medium">{filteredGames.length} games</span> 
                      <span className="text-foreground/70 ml-1">found in your area</span>
                    </div>
                    <Link to="/create-game">
                      <Button variant="primary" className="text-sm">Create Game</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Game count */}
                  <div className="mb-4 flex justify-between items-center">
                    <div>
                      <span className="font-medium">{filteredGames.length} games</span> 
                      <span className="text-foreground/70 ml-1">found in your area</span>
                    </div>
                  </div>
                  
                  {/* Game list */}
                  <GameList games={filteredGames} isLoading={isLoading} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
