import React from 'react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your Journey Through Sicily Starts Here
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience seamless travel across the beautiful island with reliable rides at your fingertips
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 border-b pb-4">
                <MapPin className="text-green-600" />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-green-600" />
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="w-full focus:outline-none"
                />
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                Book Your Ride
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}