import React from 'react';
import { Plus } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';
import type { Booking } from '../../types';

export function ClientDashboard() {
  const [bookings] = React.useState<Booking[]>([]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">My Bookings</h1>
          <Button className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            New Booking Request
          </Button>
        </div>

        <div className="bg-white shadow rounded-lg divide-y">
          {bookings.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No booking requests yet. Create your first one!
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Group of {booking.groupSize}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {new Date(booking.checkIn).toLocaleDateString()} -{' '}
                      {new Date(booking.checkOut).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={cn(
                      'px-3 py-1 rounded-full text-sm font-medium',
                      {
                        'bg-yellow-100 text-yellow-800':
                          booking.status === 'pending',
                        'bg-green-100 text-green-800':
                          booking.status === 'active',
                        'bg-gray-100 text-gray-800':
                          booking.status === 'completed',
                      }
                    )}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}