
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getGameById } from '../utils/mockData';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { MapPin, Calendar, Clock, Users, AlertCircle, MessageSquare, ChevronLeft, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [game, setGame] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isJoined, setIsJoined] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<any[]>([
    // Sample chat messages for demonstration
    {
      id: '1',
      userId: '201',
      userName: 'Morgan Taylor',
      message: 'Hey everyone, excited for the game!',
      timestamp: new Date(Date.now() - 6000000).toISOString()
    },
    {
      id: '2',
      userId: '202',
      userName: 'Sam Roberts',
      message: 'I\'ll bring extra balls just in case.',
      timestamp: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: '3',
      userId: '203',
      userName: 'Chris Davis',
      message: 'Is there parking nearby?',
      timestamp: new Date(Date.now() - 1800000).toISOString()
    },
    {
      id: '4',
      userId: '201',
      userName: 'Morgan Taylor',
      message: 'Yes, there\'s a lot right next to the field. See you all there!',
      timestamp: new Date(Date.now() - 900000).toISOString()
    }
  ]);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      // Simulate API call to fetch game details
      setTimeout(() => {
        const gameData = getGameById(id);
        if (gameData) {
          setGame(gameData);
        } else {
          // Game not found, redirect to dashboard
          navigate('/dashboard');
        }
        setIsLoading(false);
      }, 1000);
    }
  }, [id, navigate]);

  // Handle joining a game
  const handleJoinGame = () => {
    setIsJoined(true);
    // In a real app, we would make an API call to join the game
  };

  // Handle leaving a game
  const handleLeaveGame = () => {
    setIsJoined(false);
    // In a real app, we would make an API call to leave the game
  };

  // Handle sending a chat message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim() === '') return;
    
    const newMessage = {
      id: Date.now().toString(),
      userId: '1001', // Current user ID (would come from auth context)
      userName: 'You', // Current user name
      message: chatMessage,
      timestamp: new Date().toISOString()
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setChatMessage('');
  };

  // Format timestamp for chat messages
  const formatChatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-soccer-gray/30">
        <Navbar />
        <main className="flex-grow pt-16 flex items-center justify-center">
          <div className="p-8 text-center">
            <div className="w-16 h-16 border-4 border-soccer-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading game details...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col bg-soccer-gray/30">
        <Navbar />
        <main className="flex-grow pt-16 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 p-8 text-center max-w-md">
            <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Game Not Found</h2>
            <p className="text-foreground/70 mb-6">
              The game you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/dashboard">
              <Button variant="primary">Find Other Games</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

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
        
        <div className="container mx-auto px-4 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Game Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 overflow-hidden mb-6">
                {/* Status banner */}
                <div className={cn(
                  "py-2 px-4 text-center text-white font-medium",
                  game.status === 'confirmed' ? "bg-soccer-green" : 
                  game.status === 'pending' ? "bg-soccer-orange" : 
                  "bg-red-500"
                )}>
                  {game.status === 'confirmed' ? 'Game Confirmed' : 
                   game.status === 'pending' ? 'Game Pending Confirmation' : 
                   'Game Canceled'}
                </div>
                
                {/* Game header */}
                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-2">{game.title}</h1>
                  <div className="flex items-center text-foreground/70 mb-6">
                    <MapPin size={16} className="mr-1" />
                    <span>{game.location}</span>
                    <span className="mx-1.5">•</span>
                    <span>{game.distance}</span>
                  </div>
                  
                  {/* Game details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6 mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-soccer-green/10 flex items-center justify-center mr-3">
                        <Calendar size={18} className="text-soccer-green" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70">Date</p>
                        <p className="font-medium">{game.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-soccer-blue/10 flex items-center justify-center mr-3">
                        <Clock size={18} className="text-soccer-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70">Time</p>
                        <p className="font-medium">{game.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-soccer-orange/10 flex items-center justify-center mr-3">
                        <Users size={18} className="text-soccer-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70">Players</p>
                        <p className="font-medium">{game.playersJoined}/{game.maxPlayers}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags/badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-soccer-gray/70">
                      {game.gameType}
                    </span>
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                      game.skillLevel === 'casual' ? "bg-soccer-green/10 text-soccer-green-dark" : 
                      game.skillLevel === 'intermediate' ? "bg-soccer-blue/10 text-soccer-blue-dark" :
                      "bg-soccer-orange/10 text-soccer-orange-dark"
                    )}>
                      {game.skillLevel.charAt(0).toUpperCase() + game.skillLevel.slice(1)}
                    </span>
                  </div>
                  
                  {/* Description */}
                  {game.description && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Description</h3>
                      <p className="text-foreground/70">
                        {game.description}
                      </p>
                    </div>
                  )}
                  
                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3">
                    {game.status !== 'canceled' && (
                      isJoined ? (
                        <Button 
                          variant="outline" 
                          className="flex-1 sm:flex-auto border-red-300 text-red-500 hover:bg-red-50"
                          onClick={handleLeaveGame}
                        >
                          Leave Game
                        </Button>
                      ) : (
                        <Button 
                          variant="primary" 
                          className="flex-1 sm:flex-auto"
                          onClick={handleJoinGame}
                        >
                          Join Game
                        </Button>
                      )
                    )}
                    <Button variant="outline" className="flex items-center gap-2">
                      <Share2 size={16} />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Player list */}
              <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Players</h2>
                  
                  {/* Host */}
                  {game.host && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-foreground/70 mb-2">Host</h3>
                      <div className="flex items-center p-3 bg-soccer-green/5 rounded-xl border border-soccer-green/10">
                        <div className="w-10 h-10 rounded-full bg-soccer-green flex items-center justify-center text-white font-bold mr-3">
                          {game.host.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{game.host.name}</p>
                          <p className="text-sm text-foreground/70">Organizer</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Players list */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium text-foreground/70">Players</h3>
                      <span className="text-sm text-foreground/70">{game.playersJoined}/{game.maxPlayers}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {game.players && game.players.map((player: any, index: number) => (
                        player.id !== game.host?.id && (
                          <div key={player.id} className="flex items-center p-3 bg-soccer-gray/30 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-soccer-gray-dark flex items-center justify-center text-white font-bold mr-3">
                              {player.name.charAt(0)}
                            </div>
                            <p className="font-medium">{player.name}</p>
                          </div>
                        )
                      ))}
                      
                      {/* Empty slots */}
                      {Array.from({ length: Math.max(0, game.maxPlayers - game.playersJoined) }).map((_, index) => (
                        <div key={`empty-${index}`} className="flex items-center p-3 bg-soccer-gray/20 rounded-xl border border-dashed border-soccer-gray-dark/30">
                          <div className="w-10 h-10 rounded-full bg-soccer-gray/40 flex items-center justify-center mr-3">
                            <Users size={16} className="text-foreground/40" />
                          </div>
                          <p className="text-foreground/50">Open Spot</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat / Map Column */}
            <div className="lg:col-span-1">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 overflow-hidden mb-6">
                <div className="h-56 bg-soccer-gray relative">
                  <img 
                    src="https://i.imgur.com/mZtyY3B.png" 
                    alt="Map placeholder" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-soccer-green rounded-full w-10 h-10 flex items-center justify-center shadow-lg pulse-animation">
                      <MapPin size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{game.location}</h3>
                  <p className="text-sm text-foreground/70 mb-3">{game.distance} from your location</p>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(game.location)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-soccer-blue hover:text-soccer-blue-dark text-sm font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              {/* Chat */}
              <div className="bg-white rounded-2xl shadow-md border border-soccer-gray/40 overflow-hidden">
                <div className="p-4 border-b border-soccer-gray/40 flex items-center">
                  <MessageSquare size={18} className="mr-2 text-soccer-green" />
                  <h3 className="font-semibold">Game Chat</h3>
                </div>
                
                <div className="h-96 flex flex-col">
                  {/* Chat messages */}
                  <div className="flex-grow p-4 overflow-y-auto">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="mb-4 last:mb-0">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-soccer-gray-dark flex items-center justify-center text-white text-sm font-bold mr-2">
                            {msg.userName.charAt(0)}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-baseline justify-between mb-1">
                              <span className="font-medium text-sm">{msg.userName}</span>
                              <span className="text-xs text-foreground/50">{formatChatTime(msg.timestamp)}</span>
                            </div>
                            <p className="text-sm bg-soccer-gray/30 p-2 rounded-lg inline-block">
                              {msg.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chat input */}
                  <div className="p-3 border-t border-soccer-gray/40">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="input-soccer flex-grow"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                      />
                      <Button variant="primary" type="submit">Send</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameDetails;
