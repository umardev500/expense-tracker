import {Icon} from '@/components/custom-icon';
import {Button, Input, InputRef} from '@/components/ui/atoms';
import {useAuth} from '@/hooks';
import {RootStackParamList} from '@/types';
import {androidToast} from '@/utils';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import clsx from 'clsx';
import React, {useRef} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SystemBars} from 'react-native-edge-to-edge';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({route}: Props) => {
  const emailRef = useRef<InputRef | null>(null);
  const passwordRef = useRef<InputRef | null>(null);
  const navigation = useNavigation();
  const {register} = route.params || {};

  const {login, register: registerAuth} = useAuth();
  const handleAuth = async () => {
    const email = emailRef.current?.getValue();
    const password = passwordRef.current?.getValue();
    if (!email || !password) {
      androidToast('Please enter both email and password');
      return;
    }

    try {
      if (register) {
        registerAuth(email, password);
      } else {
        const creds = await login(email, password);
        console.log('creds', creds?.user.emailVerified);
      }
    } catch (err: any) {}
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

            {!register && (
              <View className="flex-row justify-end py-4">
                <TouchableOpacity
                  className="flex-row inline-flex"
                  onPress={() => {}}>
                  <Text className="text-white/70">Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            )}

            <View
              className={clsx('gap-5 items-center', {
                'mt-4': register,
              })}>
              <Button
                className="w-full"
                onPress={handleAuth}
                color="#a3e635"
                size="lg"
                corderRadius={18}>
                <Text className="text-black text-xl font-bold">Login</Text>
              </Button>

              <View className="flex-row gap-1">
                <Text className="text-base text-white/70">
                  {register
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                </Text>
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('Login', {
                      register: !register,
                    })
                  }>
                  <Text className="text-base text-lime-500 font-semibold">
                    {register ? 'Sign in' : 'Sign up'}
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
