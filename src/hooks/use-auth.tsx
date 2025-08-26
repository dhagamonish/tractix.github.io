
import { useState, useEffect } from 'react';
import type { User } from 'firebase/auth';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '@/lib/firebase';

// Mock user data for prototyping
const MOCK_USER: User = {
  uid: 'mock-user-id',
  email: 'jane.doe@example.com',
  displayName: 'Jane Doe',
  photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fDE?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  providerId: 'google.com',
  emailVerified: true,
  isAnonymous: false,
  metadata: {
    creationTime: new Date().toUTCString(),
    lastSignInTime: new Date().toUTCString(),
  },
  providerData: [],
  refreshToken: 'mock-refresh-token',
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => 'mock-id-token',
  getIdTokenResult: async () => ({
    token: 'mock-id-token',
    expirationTime: new Date().toUTCString(),
    authTime: new Date().toUTCString(),
    issuedAtTime: new Date().toUTCString(),
    signInProvider: 'google.com',
    signInSecondFactor: null,
    claims: {},
  }),
  reload: async () => {},
  toJSON: () => ({}),
};


// Set this to true to simulate a logged-in user for prototyping
const IS_PROTOTYPE_MODE = true;

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // This is where you would normally listen for Firebase Auth state changes.
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setUser(user);
    //   setLoading(false);
    // });
    // return () => unsubscribe();

    // --- Prototyping Logic ---
    // This logic simulates authentication using sessionStorage for rapid prototyping.
    const checkAuthStatus = () => {
        if (IS_PROTOTYPE_MODE) {
            const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
            const isGuestUser = sessionStorage.getItem('isGuest') === 'true';
            
            if (isLoggedIn) {
                setUser(MOCK_USER);
                setIsGuest(isGuestUser);
            } else {
                setUser(null);
                setIsGuest(false);
            }
        }
        setLoading(false);
    }
    
    checkAuthStatus();
    
    // Listen for storage changes to sync auth state across tabs
    const handleStorageChange = () => {
        checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };

  }, []);

  return { user, loading, isGuest };
}
