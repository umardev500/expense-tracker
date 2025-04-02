import {Icon} from '@/components/custom-icon';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

type Props = {
  onPress?: () => void;
};

export const HeaderBackAction = ({onPress}: Props) => {
  const navigation = useNavigation();

  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <Pressable
      className="mr-6"
      onPress={() => {
        if (onPress) {
          onPress();
        } else {
          navigation.goBack();
        }
      }}>
      <Icon name="arrow_back" size={24} color="white" />
    </Pressable>
  );
};
