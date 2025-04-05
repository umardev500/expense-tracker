import auth from '@react-native-firebase/auth';

/**
 * Waits for the current Firebase user to verify their email.
 * Polls periodically to check if the email has been verified.
 *
 * @param intervalMs Polling interval in milliseconds (default 3000)
 * @param maxAttempts Maximum polling attempts (default 20)
 * @returns Promise<boolean> - true if verified, false otherwise
 */
export const waitForEmailVerification = async (
  intervalMs: number = 3000,
  maxAttempts: number = 20,
): Promise<boolean> => {
  let attempts = 0;

  while (attempts < maxAttempts) {
    await auth().currentUser?.reload();
    const isVerified = auth().currentUser?.emailVerified;

    if (isVerified) {
      return true;
    }

    await new Promise(resolve => setTimeout(resolve, intervalMs));
    attempts++;
  }

  return false;
};
