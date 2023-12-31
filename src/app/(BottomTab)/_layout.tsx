import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { View } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BottomTab() {
  const insets = useSafeAreaInsets();
  
  return (
    <View  style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        paddingTop: insets.top,
        // paddingLeft: insets.left,
        // paddingRight: insets.right,
      }}>
        <Tabs
          screenOptions={{
            headerShown: false
          }}
        >
          <Tabs.Screen 
            name='HomeScreen'
          />
          <Tabs.Screen 
            name='SecondaryScreen'
          />
        </Tabs>
      </View>
    </View>
  );
}
