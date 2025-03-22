
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CreateGameForm from '../components/CreateGameForm';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const CreateGame = () => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [newGameId, setNewGameId] = useState<string | null>(null);

  const handleCreateGame = (gameData: any) => {
    // In a real app, we would make an API call to create the game
    console.log('Creating game with data:', gameData);
    
    // For demo, simulate a successful creation
    setTimeout(() => {
      // Generate a random ID for the new game
      const randomId = Math.floor(Math.random() * 1000 + 10).toString();
      setNewGameId(randomId);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-soccer-gray/30">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Back button */}
        <div className="container mx-auto px-4 py-4">
          <Link to="/dashboard" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors">
            <ChevronLeft size={18} />
            <span>Back to Games</span>
          </Link>
        </div>
        
        <div className="container mx-auto px-4 py-6 max-w-3xl">
          {isSuccess ? (
            <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-soccer-green/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-soccer-green" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Game Created Successfully!</h2>
              <p className="text-foreground/70 mb-8">
                Your game has been created and is now visible to other players in the area.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="primary"
                  onClick={() => navigate(`/game/${newGameId}`)}
                >
                  View Your Game
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                >
                  Find More Games
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 overflow-hidden">
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Create a New Game</h1>
                <CreateGameForm onSubmit={handleCreateGame} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CreateGame;
