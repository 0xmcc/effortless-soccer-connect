
import React from 'react';
import { cn } from '@/lib/utils';
import { Game } from '../utils/mockData';

interface GameMapProps {
  games: Game[];
  onGameSelect: (gameId: string) => void;
  selectedGameId?: string;
  className?: string;
}

const GameMap: React.FC<GameMapProps> = ({
  games,
  onGameSelect,
  selectedGameId,
  className
}) => {
  // This is a placeholder component for the Google Maps integration
  // In a real app, we would integrate with Google Maps API
  
  return (
    <div className={cn("relative w-full h-full min-h-[500px] bg-soccer-gray rounded-2xl overflow-hidden", className)}>
      {/* Map background - this would be replaced with Google Maps */}
      <div className="absolute inset-0 bg-soccer-gray">
        <img 
          src="https://i.imgur.com/mZtyY3B.png" 
          alt="Map placeholder" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Game markers */}
      <div className="absolute inset-0">
        {games.map((game, index) => {
          // Calculate pseudo-random positions for demo purposes
          const left = 20 + ((index * 123) % 60);
          const top = 15 + ((index * 87) % 70);
          
          return (
            <button
              key={game.id}
              className={cn(
                "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                selectedGameId === game.id ? "z-10 scale-110" : "z-0"
              )}
              style={{ left: `${left}%`, top: `${top}%` }}
              onClick={() => onGameSelect(game.id)}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md",
                game.status === 'confirmed' ? "bg-soccer-green" : 
                game.status === 'pending' ? "bg-soccer-orange" : 
                "bg-gray-400",
                selectedGameId === game.id ? "ring-4 ring-white" : ""
              )}>
                <span className="font-bold">{game.gameType.slice(0, 3)}</span>
              </div>
              {selectedGameId === game.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg p-2 shadow-lg min-w-[150px] text-left border border-soccer-gray/40 animate-fade-in">
                  <div className="font-semibold text-sm truncate">{game.title}</div>
                  <div className="text-xs text-foreground/70">{game.location}</div>
                  <div className="text-xs mt-1 flex justify-between">
                    <span>{game.time}</span>
                    <span>{game.playersJoined}/{game.maxPlayers}</span>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Map controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <span className="text-xl font-bold">+</span>
        </button>
        <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <span className="text-xl font-bold">−</span>
        </button>
      </div>

      {/* Map attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-foreground/50 bg-white/70 px-1 rounded">
        Map data © Google Maps
      </div>
    </div>
  );
};

export default GameMap;
