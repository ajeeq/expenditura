import React from 'react';
import { Stack } from 'expo-router/stack';
import { View } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AuthStack() {
  const insets = useSafeAreaInsets();
  
  return (
    <View  style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        paddingTop: insets.top,
        // paddingLeft: insets.left,
        // paddingRight: insets.right,
      }}>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name='LoginScreen'
          />
          <Stack.Screen 
            name='RegisterScreen'
          />
        </Stack>
      </View>
    </View>
  );
}
