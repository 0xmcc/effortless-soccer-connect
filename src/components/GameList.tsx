import React from 'react';
import GameCard from './GameCard';
import { Game } from '../utils/mockData';

interface GameListProps {
  games: Game[];
  isLoading?: boolean;
}

const GameList: React.FC<GameListProps> = ({ games, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="soccer-card animate-pulse">
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="w-1/2 h-6 bg-soccer-gray rounded-md"></div>
                <div className="w-20 h-6 bg-soccer-gray rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="h-4 bg-soccer-gray rounded-md"></div>
                <div className="h-4 bg-soccer-gray rounded-md"></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="w-16 h-6 bg-soccer-gray rounded-full"></div>
                <div className="w-24 h-6 bg-soccer-gray rounded-full"></div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <div className="w-16 h-4 bg-soccer-gray rounded-md"></div>
                  <div className="w-8 h-4 bg-soccer-gray rounded-md"></div>
                </div>
                <div className="h-2 bg-soccer-gray rounded-full"></div>
              </div>
              <div className="flex justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="w-8 h-8 rounded-full bg-soccer-gray-dark"></div>
                  ))}
                </div>
                <div className="w-24 h-10 bg-soccer-gray rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto text-soccer-gray-dark mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <h3 className="text-lg font-semibold mb-2">No Games Found</h3>
        <p className="text-foreground/70 mb-6">
          There are no games matching your current filters or in your area.
        </p>
        <div className="flex justify-center">
          <button className="btn-primary">Create a Game</button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {games.map((game, index) => (
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
          className={`animate-slide-in-bottom delay-${index * 100}`}
        />
      ))}
    </div>
  );
};

export default GameList;
