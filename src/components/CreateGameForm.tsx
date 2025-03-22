
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface CreateGameFormProps {
  onSubmit: (gameData: any) => void;
  className?: string;
}

const CreateGameForm: React.FC<CreateGameFormProps> = ({ onSubmit, className }) => {
  const [formData, setFormData] = useState({
    title: '',
    gameType: '5v5',
    skillLevel: 'casual',
    location: '',
    date: '',
    time: '',
    maxPlayers: 10,
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillLevelChange = (level: string) => {
    setFormData(prev => ({
      ...prev,
      skillLevel: level
    }));
  };

  const handleGameTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      gameType: type
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate form
    if (!formData.title || !formData.location || !formData.date || !formData.time) {
      setError('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSubmit(formData);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {error && (
        <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
          {error}
        </div>
      )}
      
      {/* Game Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Game Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="e.g., Saturday Morning Soccer"
          className="input-soccer w-full"
          value={formData.title}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      
      {/* Game Type */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Game Type <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {['5v5', '7v7', '11v11', 'other'].map((type) => (
            <button
              key={type}
              type="button"
              className={cn(
                "filter-pill",
                formData.gameType === type && "active"
              )}
              onClick={() => handleGameTypeChange(type)}
              disabled={isLoading}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      
      {/* Skill Level */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Skill Level <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {['casual', 'intermediate', 'competitive'].map((level) => (
            <button
              key={level}
              type="button"
              className={cn(
                "filter-pill",
                formData.skillLevel === level && "active"
              )}
              onClick={() => handleSkillLevelChange(level)}
              disabled={isLoading}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-1">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Enter address or field name"
          className="input-soccer w-full"
          value={formData.location}
          onChange={handleChange}
          disabled={isLoading}
        />
        <p className="text-xs text-foreground/70 mt-1">
          You can enter an address, park name, or field location
        </p>
      </div>
      
      {/* Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="input-soccer w-full"
            value={formData.date}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-1">
            Time <span className="text-red-500">*</span>
          </label>
          <input
            id="time"
            name="time"
            type="time"
            className="input-soccer w-full"
            value={formData.time}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
      </div>
      
      {/* Max Players */}
      <div>
        <label htmlFor="maxPlayers" className="block text-sm font-medium mb-1">
          Maximum Players
        </label>
        <input
          id="maxPlayers"
          name="maxPlayers"
          type="number"
          min="2"
          max="30"
          className="input-soccer w-full"
          value={formData.maxPlayers}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      
      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description (Optional)
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Add any additional details about the game..."
          className="input-soccer w-full resize-none"
          value={formData.description}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      
      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        isLoading={isLoading}
      >
        Create Game
      </Button>
    </form>
  );
};

export default CreateGameForm;
