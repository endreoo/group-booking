export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'hotel';
}

export interface Location {
  id: string;
  name: string;
  country: string;
}

export interface Booking {
  id: string;
  clientId: string;
  status: 'pending' | 'active' | 'completed';
  groupSize: number;
  location: string;
  checkIn: Date;
  checkOut: Date;
  requirements: string;
  budget: number;
  createdAt: Date;
}

export interface Bid {
  id: string;
  bookingId: string;
  hotelId: string;
  price: number;
  description: string;
  amenities: string[];
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}