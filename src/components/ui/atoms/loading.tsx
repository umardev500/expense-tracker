import LottieView from 'lottie-react-native';

export const Loading = () => {
  return (
    <LottieView
      source={require('@/assets/anim/loading-com.json')}
      autoPlay
      loop
      style={{width: 35, height: 35}}
    />
  );
};
