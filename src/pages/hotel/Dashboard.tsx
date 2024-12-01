import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';
import { formatCurrency } from '../../lib/utils';
import type { Booking } from '../../types';

export function HotelDashboard() {
  const [availableBookings] = React.useState<Booking[]>([]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Available Booking Requests
          </h1>
        </div>

        <div className="bg-white shadow rounded-lg divide-y">
          {availableBookings.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No booking requests available at the moment.
            </div>
          ) : (
            availableBookings.map((booking) => (
              <div
                key={booking.id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="space-y-4">
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
                    <span className="text-lg font-semibold text-green-600">
                      Budget: {formatCurrency(booking.budget)}
                    </span>
                  </div>
                  <p className="text-gray-700">{booking.requirements}</p>
                  <Button variant="primary">Place Bid</Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}