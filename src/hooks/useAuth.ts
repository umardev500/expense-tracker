import {androidToast, handleAuthError, waitForEmailVerification} from '@/utils';
import auth from '@react-native-firebase/auth';
import {useCallback} from 'react';

export const useAuth = () => {
  const login = useCallback(async (email: string, password: string) => {
    if (!email || !password) {
      androidToast('Please enter both email and password');
      return;
    }

    try {
      const userCreds = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      androidToast(`🎉 Welcome ${userCreds.user.email}`);
      if (userCreds.user.emailVerified) {
        return userCreds;
      }

      await auth().currentUser?.sendEmailVerification();
      androidToast('Please verify your email');

      const verified = await waitForEmailVerification();

      if (verified) {
        androidToast('✅ Email verified! Logging you in...');
        // proceed to home screen or wherever
      } else {
        androidToast('⏳ Email not verified yet. Try again later.');
      }

      return userCreds;
    } catch (err: any) {
      if (err.code) {
        handleAuthError(err.code);
      } else {
        console.error('🛑 Unknown error:', err);
      }
    }
  }, []);

  const register = useCallback(async (email: string, password: string) => {
    if (!email || !password) {
      androidToast('Please enter both email and password');
      return;
    }

    try {
      const userCreds = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      androidToast(`✅ Registered: ${userCreds.user.email}`);
      return userCreds;
    } catch (err: any) {
      if (err.code) {
        handleAuthError(err.code);
      } else {
        console.error('🛑 Unknown error:', err);
      }
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await auth().signOut();
      androidToast('Logged out successfully');
    } catch (err: any) {
      androidToast('Logout failed');
      handleAuthError(err.code);
    }
  }, []);

  return {login, register, logout};
};
