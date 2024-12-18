import React from 'react';
import { Car } from 'lucide-react';

export default function DriverRegistration() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Car className="h-12 w-12 text-green-600" />
              <h1 className="text-4xl font-bold">Become a InTasca Driver</h1>
            </div>
            <p className="text-xl text-gray-600">Join Sicily's fastest-growing ride-hailing platform</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City in Sicily
                </label>
                <select
                  id="city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select a city</option>
                  <option value="palermo">Palermo</option>
                  <option value="catania">Catania</option>
                  <option value="messina">Messina</option>
                  <option value="syracuse">Syracuse</option>
                  <option value="ragusa">Ragusa</option>
                </select>
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle Information
                </label>
                <input
                  type="text"
                  id="vehicle"
                  placeholder="Year, Make, and Model"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Driving Experience (Years)
                </label>
                <input
                  type="number"
                  id="experience"
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the Terms of Service and Privacy Policy. I confirm that I have a valid driver's license and vehicle insurance.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
              >
                Submit Application
              </button>
            </form>
          </div>

          <div className="mt-8 bg-green-50 border border-green-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>We'll review your application within 24-48 hours</li>
              <li>Background check and document verification</li>
              <li>Brief online orientation session</li>
              <li>Start earning with InTasca!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}