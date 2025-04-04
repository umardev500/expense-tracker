import clsx from 'clsx';
import {useEffect} from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  text: string;
  labelIndex: number;
  currentIndex: number;
  animateDuration?: number;
};

export const TabLabel = ({
  text,
  labelIndex,
  currentIndex,
  animateDuration = 300,
}: Props) => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      ['rgba(255,255,255,0.8)', 'black'],
    );

    return {color};
  });

  useEffect(() => {
    if (labelIndex === currentIndex) {
      progress.value = withTiming(1, {duration: animateDuration});
    } else {
      progress.value = withTiming(0, {duration: animateDuration});
    }
  }, [labelIndex, currentIndex]);

  return (
    <>
      <Animated.Text
        style={animatedStyle}
        className={clsx('text-base', {
          'font-medium': labelIndex === currentIndex,
        })}>
        {text}
      </Animated.Text>
    </>
  );
};
