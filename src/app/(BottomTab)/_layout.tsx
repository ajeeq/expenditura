import React from 'react';
import { Tabs } from 'expo-router/tabs';

export default function BottomTab() {
  return (
    <Tabs
      initialRouteName='HomeScreen'
      screenOptions={{ 
        headerShown: false,
      }}
    >
      <Tabs.Screen 
        name='HomeScreen'
      />
      <Tabs.Screen 
        name='SecondaryScreen'
      />
    </Tabs>
  );
}
