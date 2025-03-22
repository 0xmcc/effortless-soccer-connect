
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MapPin, Users, Calendar, Clock } from 'lucide-react';
import Button from './Button';

interface GameCardProps {
  id: string;
  title: string;
  location: string;
  distance: string;
  date: string;
  time: string;
  gameType: string;
  skillLevel: 'casual' | 'intermediate' | 'competitive';
  playersJoined: number;
  maxPlayers: number;
  status: 'confirmed' | 'pending' | 'canceled';
  className?: string;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  location,
  distance,
  date,
  time,
  gameType,
  skillLevel,
  playersJoined,
  maxPlayers,
  status,
  className
}) => {
  // Status styling
  const statusStyles = {
    confirmed: 'bg-soccer-green/10 text-soccer-green-dark border-soccer-green/30',
    pending: 'bg-soccer-orange/10 text-soccer-orange-dark border-soccer-orange/30',
    canceled: 'bg-red-100 text-red-500 border-red-200'
  };

  // Skill level styling
  const skillStyles = {
    casual: 'bg-soccer-green/10 text-soccer-green-dark',
    intermediate: 'bg-soccer-blue/10 text-soccer-blue-dark',
    competitive: 'bg-soccer-orange/10 text-soccer-orange-dark'
  };

  // Percent filled calculation
  const percentFilled = (playersJoined / maxPlayers) * 100;
  
  return (
    <div className={cn("soccer-card", className)}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center text-sm text-foreground/70 mt-1">
              <MapPin size={14} className="mr-1" />
              <span>{location}</span>
              <span className="mx-1.5">•</span>
              <span>{distance}</span>
            </div>
          </div>
          <div className={cn(
            "px-2.5 py-1 text-xs font-medium rounded-full border",
            statusStyles[status]
          )}>
            {status === 'confirmed' ? 'Confirmed' : status === 'pending' ? 'Pending' : 'Canceled'}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm">
            <Calendar size={14} className="mr-2 text-foreground/60" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock size={14} className="mr-2 text-foreground/60" />
            <span>{time}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-soccer-gray/70">
            {gameType}
          </span>
          <span className={cn(
            "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
            skillStyles[skillLevel]
          )}>
            {skillLevel === 'casual' ? 'Casual' : skillLevel === 'intermediate' ? 'Intermediate' : 'Competitive'}
          </span>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium">Players</span>
            <span className="text-sm text-foreground/70">{playersJoined}/{maxPlayers}</span>
          </div>
          <div className="h-2 bg-soccer-gray rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full",
                percentFilled < 40 ? "bg-soccer-green" : 
                percentFilled < 75 ? "bg-soccer-blue" :
                "bg-soccer-orange"
              )}
              style={{ width: `${percentFilled}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex justify-between gap-3">
          <div className="flex -space-x-2">
            {/* Player avatars - would be dynamic in a real app */}
            {Array.from({ length: Math.min(playersJoined, 5) }).map((_, i) => (
              <div 
                key={i} 
                className="w-8 h-8 rounded-full bg-soccer-gray-dark border-2 border-white flex items-center justify-center text-xs font-medium"
              >
                {i+1}
              </div>
            ))}
            {playersJoined > 5 && (
              <div className="w-8 h-8 rounded-full bg-soccer-gray border-2 border-white flex items-center justify-center text-xs font-medium">
                +{playersJoined - 5}
              </div>
            )}
          </div>
          <Link to={`/game/${id}`}>
            <Button variant={status === 'canceled' ? 'outline' : 'primary'} disabled={status === 'canceled'}>
              {status === 'canceled' ? 'View Details' : 'Join Game'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
