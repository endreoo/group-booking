import React from 'react';
import { MapPin } from 'lucide-react';
import { Input } from './Input';

interface Location {
  id: string;
  name: string;
  country: string;
}

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  onSelect?: (location: Location) => void;
}

export function LocationInput({ value, onChange, onSelect }: LocationInputProps) {
  const [suggestions, setSuggestions] = React.useState<Location[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  // Simulated locations - in a real app, this would come from an API
  const locations: Location[] = [
    { id: '1', name: 'New York', country: 'United States' },
    { id: '2', name: 'London', country: 'United Kingdom' },
    { id: '3', name: 'Paris', country: 'France' },
    { id: '4', name: 'Tokyo', country: 'Japan' },
    { id: '5', name: 'Sydney', country: 'Australia' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    onChange(input);
    
    if (input.length > 0) {
      const filtered = locations.filter(location =>
        location.name.toLowerCase().includes(input.toLowerCase()) ||
        location.country.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (location: Location) => {
    onChange(`${location.name}, ${location.country}`);
    onSelect?.(location);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
      <Input
        label="Location"
        type="text"
        value={value}
        onChange={handleInputChange}
        className="pl-10"
        placeholder="Enter city or country"
        required
      />
      
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <ul className="max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
            {suggestions.map((location) => (
              <li
                key={location.id}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-50"
                onClick={() => handleSelect(location)}
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate">
                    {location.name}, {location.country}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}