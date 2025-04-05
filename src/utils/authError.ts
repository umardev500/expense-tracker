// src/utils/authError.ts
import {androidToast} from './index'; // Adjust import path if needed

export function handleAuthError(code: string) {
  const errorMap: Record<string, string> = {
    'auth/invalid-email': '❌ Invalid email format',
    'auth/user-not-found': '❌ No user found for that email',
    'auth/wrong-password': '❌ Incorrect password',
    'auth/user-disabled': '🚫 User account is disabled',
    'auth/email-already-in-use': '⚠️ Email is already registered',
    'auth/weak-password': '🔐 Password is too weak',
    'auth/invalid-credential': '🚫 Invalid or expired credentials',
    'auth/network-request-failed': '📡 Network error, try again later',
    'auth/too-many-requests': '⛔ Too many attempts. Try again later.',
  };

  const message = errorMap[code] ?? `❗ Unknown Firebase Auth error: ${code}`;
  androidToast(message);
}
