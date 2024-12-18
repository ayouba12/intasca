import React from 'react';
import { Shield, Clock, CreditCard, MapPin } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'All our drivers are verified and vehicles regularly inspected for your safety'
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Available round the clock for your convenience, whenever you need a ride'
  },
  {
    icon: CreditCard,
    title: 'Easy Payment',
    description: 'Multiple payment options including cards, PayPal, and cash'
  },
  {
    icon: MapPin,
    title: 'Local Knowledge',
    description: 'Expert drivers familiar with every corner of Sicily'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose InTasca</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <feature.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}