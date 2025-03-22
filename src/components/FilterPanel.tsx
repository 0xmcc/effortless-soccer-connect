
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import Button from './Button';
import { X, Filter, Search } from 'lucide-react';

interface FilterState {
  searchTerm: string;
  skillLevel: string[];
  gameType: string[];
  distance: number;
  dateRange: string;
}

interface FilterPanelProps {
  onFilterChange: (filters: FilterState) => void;
  className?: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    skillLevel: [],
    gameType: [],
    distance: 10,
    dateRange: 'anytime',
  });

  // Toggle selection of a filter option
  const toggleFilter = (category: 'skillLevel' | 'gameType', value: string) => {
    setFilters(prev => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value];
      
      return {
        ...prev,
        [category]: updatedCategory
      };
    });
  };

  // Check if a filter option is selected
  const isSelected = (category: 'skillLevel' | 'gameType', value: string) => {
    return filters[category].includes(value);
  };

  // Update distance filter
  const handleDistanceChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      distance: value[0]
    }));
  };

  // Update date range filter
  const handleDateRangeChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      dateRange: value
    }));
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      searchTerm: e.target.value
    }));
  };

  // Apply filters
  const applyFilters = () => {
    onFilterChange(filters);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    const resetFilters = {
      searchTerm: '',
      skillLevel: [],
      gameType: [],
      distance: 10,
      dateRange: 'anytime',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className={className}>
      {/* Search and Filter Toggle for Mobile */}
      <div className="mb-4 md:hidden">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search games..."
              className="input-soccer w-full pl-10"
              value={filters.searchTerm}
              onChange={handleSearchChange}
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn-outline flex items-center gap-2"
          >
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      <div className={cn(
        "bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-5 transition-all duration-300",
        !isOpen && "md:block hidden"
      )}>
        {/* Header with title and clear button */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-semibold">Filters</h3>
          <button
            className="text-sm text-foreground/70 hover:text-foreground flex items-center gap-1"
            onClick={clearFilters}
          >
            <X size={14} />
            <span>Clear all</span>
          </button>
        </div>

        {/* Search - Desktop */}
        <div className="mb-6 hidden md:block">
          <label className="block text-sm font-medium mb-2">Search</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search games or locations..."
              className="input-soccer w-full pl-10"
              value={filters.searchTerm}
              onChange={handleSearchChange}
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
          </div>
        </div>

        {/* Skill Level Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Skill Level</label>
          <div className="flex flex-wrap gap-2">
            {['casual', 'intermediate', 'competitive'].map((skill) => (
              <button
                key={skill}
                className={cn(
                  "filter-pill",
                  isSelected('skillLevel', skill) && "active"
                )}
                onClick={() => toggleFilter('skillLevel', skill)}
              >
                {skill.charAt(0).toUpperCase() + skill.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Game Type Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Game Type</label>
          <div className="flex flex-wrap gap-2">
            {['5v5', '7v7', '11v11', 'other'].map((type) => (
              <button
                key={type}
                className={cn(
                  "filter-pill",
                  isSelected('gameType', type) && "active"
                )}
                onClick={() => toggleFilter('gameType', type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Distance Slider */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">Distance</label>
            <span className="text-sm text-foreground/70">{filters.distance} miles</span>
          </div>
          <Slider
            defaultValue={[filters.distance]}
            max={50}
            step={1}
            onValueChange={handleDistanceChange}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-foreground/60 mt-1">
            <span>1 mile</span>
            <span>50 miles</span>
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">When</label>
          <div className="flex flex-wrap gap-2">
            {[
              { value: 'today', label: 'Today' },
              { value: 'tomorrow', label: 'Tomorrow' },
              { value: 'this-week', label: 'This Week' },
              { value: 'anytime', label: 'Anytime' }
            ].map((option) => (
              <button
                key={option.value}
                className={cn(
                  "filter-pill",
                  filters.dateRange === option.value && "active"
                )}
                onClick={() => handleDateRangeChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <Button variant="primary" className="w-full" onClick={applyFilters}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
