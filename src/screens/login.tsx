import {Icon} from '@/components/custom-icon';
import {Button, Input, InputRef} from '@/components/ui/atoms';
import React, {useRef} from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SystemBars} from 'react-native-edge-to-edge';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Login = () => {
  const emailRef = useRef<InputRef | null>(null);
  const passwordRef = useRef<InputRef | null>(null);

  const handleLogin = () => {
    const email = emailRef.current?.getValue();
    const password = passwordRef.current?.getValue();

    if (!email || !password) {
      Alert.alert('Login failed', 'Please enter both email and password', [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
      return;
    }

    console.log(email, password);
  };

  return (
    <>
      <SystemBars style={'light'} />
      <SafeAreaView className="flex-1 bg-darkbg">
        <ScrollView className="flex-1">
          <View className="p-4 bg-darkbg flex-1">
            <TouchableOpacity
              onPress={() => {}}
              className="bg-white/25 w-10 h-10 rounded-lg items-center justify-center">
              <Icon name="chevron_left" size={24} color="white" />
            </TouchableOpacity>

            <View className="gap-1 mt-12">
              <Text className="text-4xl font-bold text-white">Hey,</Text>
              <Text className="text-4xl font-bold text-white">
                Welcome Back
              </Text>
            </View>

            <View className="mt-6 gap-3">
              <Text className="text-base text-white/80">
                Login now to track all your expenses
              </Text>

              <View className="gap-4">
                <Input
                  ref={emailRef}
                  size="lg"
                  placeholder="Type your email"
                  leadingIcon={
                    <Icon fill name="email_alternate" size={22} color="white" />
                  }
                />
                <Input
                  ref={passwordRef}
                  size="lg"
                  placeholder="Enter password"
                  leadingIcon={
                    <Icon fill name="lock" size={22} color="white" />
                  }
                />
              </View>
            </View>

            <View className="flex-row justify-end py-4">
              <TouchableOpacity
                className="flex-row inline-flex"
                onPress={() => {}}>
                <Text className="text-white/70">Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View className="gap-5 items-center">
              <Button
                onPress={handleLogin}
                color="#a3e635"
                size="lg"
                corderRadius={18}>
                <Text className="text-black text-xl font-bold">Login</Text>
              </Button>

              <View className="flex-row gap-1">
                <Text className="text-base text-white/70">
                  Dont't have an account?
                </Text>
                <TouchableWithoutFeedback>
                  <Text className="text-base text-lime-500 font-semibold">
                    Sign up
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
