import React from 'react';
import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

// Screens
import HomeScreen from '@/app/HomeScreen';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <HomeScreen />
    </GluestackUIProvider>
  );
}
