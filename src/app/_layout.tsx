import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack, Redirect } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

// Screens
import HomeScreen from '@/app/(BottomTab)/HomeScreen';

export default function App() {
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
        <Stack>
          <Stack.Screen 
            name='(BottomTab)'
            options={{
              headerShown: false
            }}
          />
        </Stack>
       
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
