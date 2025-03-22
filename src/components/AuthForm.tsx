
import React, { useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

interface AuthFormProps {
  onSuccess: () => void;
  className?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSuccess, className }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState<'phone' | 'verification'>('phone');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call for phone verification
    setTimeout(() => {
      setIsLoading(false);
      // Basic validation - in a real app, we'd check if the phone is valid format
      if (!phoneNumber || phoneNumber.length < 10) {
        setError('Please enter a valid phone number');
        return;
      }
      setStep('verification');
    }, 1500);
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call for code verification
    setTimeout(() => {
      setIsLoading(false);
      // Basic validation - in a real app, we'd verify the code with backend
      if (!verificationCode || verificationCode.length < 4) {
        setError('Please enter a valid verification code');
        return;
      }
      // Success
      onSuccess();
    }, 1500);
  };

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      {step === 'phone' ? (
        <form onSubmit={handlePhoneSubmit} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="input-soccer w-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={isLoading}
            />
            <p className="text-xs text-foreground/70 mt-1">
              We'll send you a verification code to log in
            </p>
          </div>
          
          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-2 rounded-md">
              {error}
            </div>
          )}
          
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            isLoading={isLoading}
          >
            Send Verification Code
          </Button>
        </form>
      ) : (
        <form onSubmit={handleVerificationSubmit} className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="code" className="block text-sm font-medium">
                Verification Code
              </label>
              <button
                type="button"
                className="text-xs text-soccer-blue hover:text-soccer-blue-dark"
                onClick={() => setStep('phone')}
                disabled={isLoading}
              >
                Change Phone
              </button>
            </div>
            <input
              id="code"
              type="text"
              placeholder="Enter 4-digit code"
              className="input-soccer w-full"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              disabled={isLoading}
            />
            <p className="text-xs text-foreground/70 mt-1">
              Enter the code we sent to {phoneNumber}
            </p>
          </div>
          
          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-2 rounded-md">
              {error}
            </div>
          )}
          
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            isLoading={isLoading}
          >
            Verify and Continue
          </Button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
