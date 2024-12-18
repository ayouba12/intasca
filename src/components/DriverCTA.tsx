import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function DriverCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-green-600 rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Our Driver Network
              </h2>
              <p className="text-white/90 mb-8">
                Be your own boss, set your schedule, and earn competitive income. Join Sicily's fastest-growing ride-hailing platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <ChevronRight className="h-5 w-5 mr-2" />
                  <span>Flexible working hours</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="h-5 w-5 mr-2" />
                  <span>Weekly payments</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="h-5 w-5 mr-2" />
                  <span>Support and training provided</span>
                </div>
              </div>
              <Link 
                to="/become-driver"
                className="mt-8 bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition inline-block w-fit"
              >
                Become a Driver
              </Link>
            </div>
            <div 
              className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}