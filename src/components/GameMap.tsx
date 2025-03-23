import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Game } from '../utils/mockData';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface GameMapProps {
  games: Game[];
  onGameSelect: (gameId: string) => void;
  selectedGameId?: string;
  className?: string;
}

const MAPBOX_TOKEN = "pk.eyJ1IjoibWFya29jYWx2b2NydXoiLCJhIjoiY2swZDBrNXFjMDMxZzNibG9vZXBhMWk2MiJ9.bIgAvOl_Uq2Ic9KeAGXElw";

const GameMap: React.FC<GameMapProps> = ({
  games,
  onGameSelect,
  selectedGameId,
  className
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const popupsRef = useRef<{ [key: string]: mapboxgl.Popup }>({});

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    try {
      // Initialize map with the stored token
      mapboxgl.accessToken = MAPBOX_TOKEN;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40], // Default center (will be updated based on games)
        zoom: 10
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'bottom-right'
      );
      
      // Ensure map is fully loaded before adding markers
      map.current.on('load', () => {
        addGameMarkers();
      });
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    return () => {
      // Clean up markers and popups
      Object.values(markersRef.current).forEach(marker => marker.remove());
      Object.values(popupsRef.current).forEach(popup => popup.remove());
      
      // Remove map
      map.current?.remove();
    };
  }, []);

  // Update markers when games or selectedGameId changes
  useEffect(() => {
    if (!map.current) return;
    
    // Only add markers if map is loaded
    if (map.current.loaded()) {
      addGameMarkers();
    }
  }, [games, selectedGameId]);

  const addGameMarkers = () => {
    if (!map.current) return;
    
    // Clear existing markers and popups
    Object.values(markersRef.current).forEach(marker => marker.remove());
    Object.values(popupsRef.current).forEach(popup => popup.remove());
    markersRef.current = {};
    popupsRef.current = {};
    
    // Variable to track bounds for the map view
    const bounds = new mapboxgl.LngLat(-74.5, 40).toBounds(10);

    games.forEach((game, index) => {
      // Calculate pseudo-random positions for demo purposes
      // In a real app, you would use actual coordinates from your data
      const lng = -74 + ((index * 0.123) % 2) - 1;
      const lat = 40 + ((index * 0.087) % 1.5);
      
      // Update bounds
      bounds.extend([lng, lat]);
      
      // Create HTML element for marker
      const el = document.createElement('div');
      el.className = cn(
        'w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer',
        game.status === 'confirmed' ? "bg-soccer-green" : 
        game.status === 'pending' ? "bg-soccer-orange" : 
        "bg-gray-400",
        selectedGameId === game.id ? "ring-4 ring-white" : ""
      );
      el.innerHTML = `<span class="font-bold">${game.gameType.slice(0, 3)}</span>`;
      
      // Add popup for hover
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 25,
        className: 'game-popup'
      }).setHTML(`
        <div class="p-2 min-w-[150px]">
          <div class="font-semibold text-sm truncate">${game.title}</div>
          <div class="text-xs text-gray-600">${game.location}</div>
          <div class="text-xs mt-1 flex justify-between">
            <span>${game.time}</span>
            <span>${game.playersJoined}/${game.maxPlayers}</span>
          </div>
        </div>
      `);

      // Add marker
      const marker = new mapboxgl.Marker({
        element: el
      })
        .setLngLat([lng, lat])
        .setPopup(selectedGameId === game.id ? popup : undefined)
        .addTo(map.current);
      
      // Add click handler
      marker.getElement().addEventListener('click', () => {
        onGameSelect(game.id);
      });
      
      // Store references for cleanup
      markersRef.current[game.id] = marker;
      popupsRef.current[game.id] = popup;
      
      // Show popup if game is selected
      if (selectedGameId === game.id) {
        marker.togglePopup();
      }
    });
    
    // Fit map to show all markers
    if (games.length > 0) {
      map.current.fitBounds(bounds, {
        padding: 100,
        maxZoom: 15
      });
    }
  };

  return (
    <div className={cn("relative w-full h-full min-h-[500px] bg-soccer-gray rounded-2xl overflow-hidden", className)}>
      {/* Mapbox container */}
      <div ref={mapContainer} className="absolute inset-0" />

      {/* Map attribution - automatically added by Mapbox */}
      
      {/* Add a loading overlay if map is not loaded */}
      {!map.current && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <div className="animate-spin h-8 w-8 border-4 border-soccer-green border-t-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default GameMap;
