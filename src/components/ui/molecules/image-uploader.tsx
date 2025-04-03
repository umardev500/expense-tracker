import {UploadImageButton} from '@/components/ui/atoms';
import {Size} from '@/types';
import {useState} from 'react';
import {View} from 'react-native';

export const ImageUploader = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    // TODO: Pick image
  };

  return (
    <View>
      {imageUri ? (
        <View />
      ) : (
        <UploadImageButton onPress={pickImage} size={Size.lg} />
      )}
    </View>
  );
};
