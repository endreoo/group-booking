import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Users } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useAuthStore } from '../../store/authStore';

export function Login() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (role: 'client' | 'hotel') => {
    // Simulate login - in a real app, this would make an API call
    setUser({
      id: '1',
      name: email.split('@')[0],
      email,
      role,
    });

    // Check for pending booking request
    const pendingBooking = localStorage.getItem('pendingBooking');
    if (pendingBooking && role === 'client') {
      localStorage.removeItem('pendingBooking');
      navigate('/client');
    } else {
      navigate(role === 'client' ? '/client' : '/hotel');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Group Booking Platform
        </h2>
        {localStorage.getItem('pendingBooking') && (
          <p className="mt-2 text-center text-sm text-blue-600">
            Sign in to complete your booking request
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => handleLogin('client')}
                className="w-full flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                Login as Client
              </Button>

              <Button
                onClick={() => handleLogin('hotel')}
                className="w-full flex items-center justify-center gap-2"
              >
                <Building2 className="h-5 w-5" />
                Login as Hotel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}