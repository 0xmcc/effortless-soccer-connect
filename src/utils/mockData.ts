
export interface Game {
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
  description?: string;
  host?: {
    id: string;
    name: string;
    phone?: string;
  };
  players?: Array<{
    id: string;
    name: string;
  }>;
}

export const mockGames: Game[] = [
  {
    id: '1',
    title: 'Saturday Morning Pickup',
    location: 'Central Park Field 3',
    distance: '1.2 miles away',
    date: 'Sat, Jun 12',
    time: '9:00 AM',
    gameType: '5v5',
    skillLevel: 'casual',
    playersJoined: 7,
    maxPlayers: 10,
    status: 'confirmed',
    description: 'Casual morning game, all skill levels welcome. We have extra bibs and water.',
    host: {
      id: '101',
      name: 'Alex Chen',
      phone: '555-1234'
    },
    players: [
      { id: '101', name: 'Alex Chen' },
      { id: '102', name: 'Jamie Smith' },
      { id: '103', name: 'Taylor Johnson' },
      { id: '104', name: 'Casey Brown' },
      { id: '105', name: 'Jordan Lee' },
      { id: '106', name: 'Riley Wilson' },
      { id: '107', name: 'Quinn Martinez' }
    ]
  },
  {
    id: '2',
    title: 'Competitive Evening Match',
    location: 'Riverside Soccer Fields',
    distance: '3.5 miles away',
    date: 'Sat, Jun 12',
    time: '6:30 PM',
    gameType: '7v7',
    skillLevel: 'competitive',
    playersJoined: 10,
    maxPlayers: 14,
    status: 'confirmed',
    description: 'Looking for experienced players for a fast-paced game. Please bring both light and dark shirts.',
    host: {
      id: '201',
      name: 'Morgan Taylor',
      phone: '555-5678'
    },
    players: [
      { id: '201', name: 'Morgan Taylor' },
      { id: '202', name: 'Sam Roberts' },
      { id: '203', name: 'Chris Davis' },
      { id: '204', name: 'Jesse Garcia' },
      { id: '205', name: 'Avery Wilson' },
      { id: '206', name: 'Jordan Park' },
      { id: '207', name: 'Drew Smith' },
      { id: '208', name: 'Alex Johnson' },
      { id: '209', name: 'Cameron Lee' },
      { id: '210', name: 'Casey Martin' }
    ]
  },
  {
    id: '3',
    title: 'Sunday Afternoon Soccer',
    location: 'Memorial Park',
    distance: '0.8 miles away',
    date: 'Sun, Jun 13',
    time: '2:00 PM',
    gameType: '5v5',
    skillLevel: 'intermediate',
    playersJoined: 6,
    maxPlayers: 10,
    status: 'pending',
    description: 'Regular weekend game. We usually play for about 2 hours with short breaks.',
    host: {
      id: '301',
      name: 'Jamie Rodriguez',
      phone: '555-9012'
    },
    players: [
      { id: '301', name: 'Jamie Rodriguez' },
      { id: '302', name: 'Taylor Kim' },
      { id: '303', name: 'Casey Jackson' },
      { id: '304', name: 'Riley Parks' },
      { id: '305', name: 'Jordan Brown' },
      { id: '306', name: 'Quinn Smith' }
    ]
  },
  {
    id: '4',
    title: 'Monday Night Lights',
    location: 'Downtown Field',
    distance: '2.1 miles away',
    date: 'Mon, Jun 14',
    time: '7:00 PM',
    gameType: '7v7',
    skillLevel: 'casual',
    playersJoined: 5,
    maxPlayers: 14,
    status: 'pending',
    description: 'After-work game for all levels. Field has lights for night play.',
    host: {
      id: '401',
      name: 'Casey Johnson',
      phone: '555-3456'
    },
    players: [
      { id: '401', name: 'Casey Johnson' },
      { id: '402', name: 'Riley Adams' },
      { id: '403', name: 'Jamie Singh' },
      { id: '404', name: 'Taylor Washington' },
      { id: '405', name: 'Jordan Martinez' }
    ]
  },
  {
    id: '5',
    title: 'Weekend Tournament',
    location: 'Sports Complex',
    distance: '5.3 miles away',
    date: 'Sat, Jun 19',
    time: '10:00 AM',
    gameType: '11v11',
    skillLevel: 'competitive',
    playersJoined: 15,
    maxPlayers: 22,
    status: 'confirmed',
    description: 'Full-day tournament with multiple games. Registration fee: $10 per player for field rental and referees.',
    host: {
      id: '501',
      name: 'Alex Peterson',
      phone: '555-7890'
    },
    players: Array.from({ length: 15 }, (_, i) => ({
      id: (500 + i + 1).toString(),
      name: `Player ${i + 1}`
    }))
  },
  {
    id: '6',
    title: 'Wednesday Lunchtime Game',
    location: 'City Center Park',
    distance: '1.5 miles away',
    date: 'Wed, Jun 16',
    time: '12:30 PM',
    gameType: '5v5',
    skillLevel: 'casual',
    playersJoined: 3,
    maxPlayers: 10,
    status: 'pending',
    description: 'Quick lunchtime game, we start and end on time to get back to work!',
    host: {
      id: '601',
      name: 'Drew Lee',
      phone: '555-2345'
    },
    players: [
      { id: '601', name: 'Drew Lee' },
      { id: '602', name: 'Cameron Davis' },
      { id: '603', name: 'Avery Martin' }
    ]
  },
  {
    id: '7',
    title: 'Friday Night Futsal',
    location: 'Indoor Sports Arena',
    distance: '4.0 miles away',
    date: 'Fri, Jun 18',
    time: '8:00 PM',
    gameType: '5v5',
    skillLevel: 'intermediate',
    playersJoined: 8,
    maxPlayers: 10,
    status: 'confirmed',
    description: 'Indoor futsal game on a professional court. Fast-paced and fun!',
    host: {
      id: '701',
      name: 'Jordan Park',
      phone: '555-6789'
    },
    players: Array.from({ length: 8 }, (_, i) => ({
      id: (700 + i + 1).toString(),
      name: `Player ${i + 1}`
    }))
  },
  {
    id: '8',
    title: 'Canceled: Thursday Evening',
    location: 'Northside Fields',
    distance: '3.2 miles away',
    date: 'Thu, Jun 17',
    time: '6:00 PM',
    gameType: '7v7',
    skillLevel: 'casual',
    playersJoined: 6,
    maxPlayers: 14,
    status: 'canceled',
    description: 'This game has been canceled due to field maintenance.',
    host: {
      id: '801',
      name: 'Quinn Johnson',
      phone: '555-0123'
    },
    players: Array.from({ length: 6 }, (_, i) => ({
      id: (800 + i + 1).toString(),
      name: `Player ${i + 1}`
    }))
  }
];

export const getGameById = (id: string): Game | undefined => {
  return mockGames.find(game => game.id === id);
};

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  age?: number;
  preferredSkillLevel: 'casual' | 'intermediate' | 'competitive';
  preferredGameTypes: string[];
  locationRadius: number;
  gamesPlayed: number;
  gamesCreated: number;
  upcomingGames: string[];
  pastGames: string[];
}

export const mockUserProfile: UserProfile = {
  id: '1001',
  name: 'Alex Johnson',
  phone: '555-123-4567',
  age: 28,
  preferredSkillLevel: 'intermediate',
  preferredGameTypes: ['5v5', '7v7'],
  locationRadius: 10,
  gamesPlayed: 23,
  gamesCreated: 5,
  upcomingGames: ['1', '3', '7'],
  pastGames: ['2', '4', '5', '6']
};

export const filterGames = (
  games: Game[],
  filters: {
    searchTerm?: string;
    skillLevel?: string[];
    gameType?: string[];
    distance?: number;
    dateRange?: string;
  }
): Game[] => {
  return games.filter(game => {
    // Search term filter
    if (filters.searchTerm && !game.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) && 
        !game.location.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    
    // Skill level filter
    if (filters.skillLevel && filters.skillLevel.length > 0 && 
        !filters.skillLevel.includes(game.skillLevel)) {
      return false;
    }
    
    // Game type filter
    if (filters.gameType && filters.gameType.length > 0 && 
        !filters.gameType.includes(game.gameType)) {
      return false;
    }
    
    // Distance filter (simplified for demo)
    if (filters.distance) {
      const numericDistance = parseFloat(game.distance.split(' ')[0]);
      if (numericDistance > filters.distance) {
        return false;
      }
    }
    
    // Date range filter (simplified for demo)
    if (filters.dateRange) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const thisWeek = new Date(today);
      thisWeek.setDate(thisWeek.getDate() + 7);
      
      // Convert game date to Date object (simplified)
      const gameDateParts = game.date.split(', ')[1].split(' ');
      const gameMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(gameDateParts[0]);
      const gameDay = parseInt(gameDateParts[1]);
      const gameDate = new Date(today.getFullYear(), gameMonth, gameDay);
      
      if (filters.dateRange === 'today') {
        if (gameDate.getDate() !== today.getDate() || 
            gameDate.getMonth() !== today.getMonth()) {
          return false;
        }
      } else if (filters.dateRange === 'tomorrow') {
        if (gameDate.getDate() !== tomorrow.getDate() || 
            gameDate.getMonth() !== tomorrow.getMonth()) {
          return false;
        }
      } else if (filters.dateRange === 'this-week') {
        if (gameDate > thisWeek) {
          return false;
        }
      }
    }
    
    return true;
  });
};
