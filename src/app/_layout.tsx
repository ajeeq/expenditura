import React from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack, Redirect } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GluestackUIProvider, View, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export default function App() {
  const insets = useSafeAreaInsets();
  // const [isLoaded] = useFonts(fonts);

  // // After the custom fonts have loaded, we can hide the splash screen and display the app screen.
  // const handleOnLayout = useCallback(async () => {
  //   if (isLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isLoaded]);

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='(AuthStack)'/>
          <Stack.Screen name='(BottomTab)'/>
        </Stack>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
