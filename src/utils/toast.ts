import {Platform, ToastAndroid} from 'react-native';

export const androidToast = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
};
