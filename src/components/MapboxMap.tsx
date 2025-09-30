import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Monastery {
  name: string;
  coordinates: [number, number]; // [lng, lat]
  description: string;
}

const monasteries: Monastery[] = [
  {
    name: "Rumtek Monastery",
    coordinates: [88.5535, 27.3015],
    description: "The largest monastery in Sikkim, seat of the Karmapa"
  },
  {
    name: "Enchey Monastery",
    coordinates: [88.6065, 27.3389],
    description: "200-year-old monastery above Gangtok"
  },
  {
    name: "Do Drul Chorten",
    coordinates: [88.6127, 27.3119],
    description: "Important stupa built by Trulshik Rinpoche"
  },
  {
    name: "Pemayangtse Monastery",
    coordinates: [88.2773, 27.2057],
    description: "Second oldest monastery in Sikkim"
  },
  {
    name: "Tashiding Monastery",
    coordinates: [88.2867, 27.3408],
    description: "Sacred monastery on a hilltop"
  },
  {
    name: "Labrang Monastery",
    coordinates: [88.5167, 27.4833],
    description: "Beautiful monastery in North Sikkim"
  },
  {
    name: "Ralang Monastery",
    coordinates: [88.3117, 27.2428],
    description: "Historic monastery in West Sikkim"
  },
  {
    name: "Phodong Monastery",
    coordinates: [88.5833, 27.4167],
    description: "Beautiful monastery in North Sikkim"
  }
];

const MapboxMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [88.5, 27.35], // Center of Sikkim
      zoom: 10,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    // Add scale control
    map.current.addControl(
      new mapboxgl.ScaleControl({
        maxWidth: 100,
        unit: 'metric'
      }),
      'bottom-left'
    );

    // Add geolocate control
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      }),
      'top-right'
    );

    map.current.on('load', () => {
      // Add 3D terrain
      map.current?.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });
      
      // Add terrain source
      map.current?.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14
      });

      // Add sky layer for better 3D effect
      map.current?.addLayer({
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 90.0],
          'sky-atmosphere-sun-intensity': 15
        }
      });

      // Add monastery markers
      monasteries.forEach((monastery) => {
        // Create custom marker element
        const el = document.createElement('div');
        el.className = 'monastery-marker';
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.cursor = 'pointer';
        el.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#f59e0b" stroke="#000" stroke-width="0.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        `;

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `
            <div class="p-3">
              <h3 class="font-bold text-base mb-2">${monastery.name}</h3>
              <p class="text-sm text-gray-600 mb-3">${monastery.description}</p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=${monastery.coordinates[1]},${monastery.coordinates[0]}" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors"
              >
                Get Directions
              </a>
            </div>
          `
        );

        // Add marker to map
        new mapboxgl.Marker(el)
          .setLngLat(monastery.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
      });
    });
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapToken.trim()) {
      setShowTokenInput(false);
      initializeMap(mapToken);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mapbox Token Required</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Please enter your Mapbox public token to view the interactive map. 
              Get your token from{' '}
              <a 
                href="https://account.mapbox.com/access-tokens/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Mapbox Account
              </a>
            </p>
          </div>
          <form onSubmit={handleTokenSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="pk.eyJ1..."
              value={mapToken}
              onChange={(e) => setMapToken(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Load Map</Button>
          </form>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default MapboxMap;
