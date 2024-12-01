import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Users, Calendar, DollarSign, Star, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BookingRequestForm } from '../components/BookingRequestForm';

export function LandingPage() {
  const navigate = useNavigate();

  const handleBookingRequest = (data: {
    groupSize: number;
    location: string;
    checkIn: string;
    checkOut: string;
    budget: number;
    requirements: string;
  }) => {
    // In a real app, this would make an API call
    // For now, we'll store it in localStorage and redirect to login
    localStorage.setItem('pendingBooking', JSON.stringify(data));
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">GroupBook</span>
            </div>
            <Link to="/login">
              <Button variant="primary">Sign In</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Booking Form */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center lg:text-left lg:col-span-6">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Simplify Group Bookings</span>
                    <span className="block text-blue-600">Worldwide</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl">
                    Connect large groups with hotels anywhere in the world. Get competitive bids, 
                    manage bookings, and streamline the entire process in one platform.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <span className="ml-2 text-gray-600">Global Coverage</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-6 w-6 text-blue-600" />
                      <span className="ml-2 text-gray-600">Any Group Size</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                      <span className="ml-2 text-gray-600">Best Rates</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-6">
                  <BookingRequestForm onSubmit={handleBookingRequest} />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
    </div>
  );
}