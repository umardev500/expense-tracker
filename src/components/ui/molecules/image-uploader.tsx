import {IconButton, UploadImageButton} from '@/components/ui/atoms';
import {useState} from 'react';
import {Image, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export const ImageUploader = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri || null);
    }
  };

  return (
    <>
      <View className="flex-row">
        {imageUri ? (
          <View className="">
            <Image source={{uri: imageUri}} className="w-40 h-40 rounded-2xl" />
            <IconButton
              className="absolute top-2 right-2 shadow-lg shadow-black"
              iconColor="black"
              size="xs"
              containerColor="rgba(255,255,255,0.8)"
              iconSize={16}
              name="close"
              onPress={() => setImageUri(null)}
            />
          </View>
        ) : (
          <UploadImageButton onPress={pickImage} size={'lg'} />
        )}
      </View>
    </>
  );
};
