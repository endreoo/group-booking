import React from 'react';
import { Calendar, Users, DollarSign, FileText } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { LocationInput } from './ui/LocationInput';

interface BookingRequestFormProps {
  onSubmit: (data: {
    groupSize: number;
    location: string;
    checkIn: string;
    checkOut: string;
    budget: number;
    requirements: string;
  }) => void;
}

export function BookingRequestForm({ onSubmit }: BookingRequestFormProps) {
  const [formData, setFormData] = React.useState({
    groupSize: '',
    location: '',
    checkIn: '',
    checkOut: '',
    budget: '',
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      groupSize: Number(formData.groupSize),
      location: formData.location,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      budget: Number(formData.budget),
      requirements: formData.requirements,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLocationChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      location: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900">Submit Your Request</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <Users className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
          <Input
            label="Group Size"
            type="number"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            className="pl-10"
            required
            min="1"
          />
        </div>

        <LocationInput
          value={formData.location}
          onChange={handleLocationChange}
        />

        <div className="relative">
          <DollarSign className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
          <Input
            label="Budget (USD)"
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="pl-10"
            required
            min="0"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
          <Input
            label="Check-in Date"
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="pl-10"
            required
          />
        </div>

        <div className="relative md:col-span-2">
          <Calendar className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
          <Input
            label="Check-out Date"
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="relative">
        <FileText className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Requirements & Preferences
          </label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 pl-10 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={4}
            required
            placeholder="Tell us about your group's needs, preferences, and any special requirements..."
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Submit Request
      </Button>
    </form>
  );
}