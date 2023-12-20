import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import {
  View,
  Text,
  Box
} from '@gluestack-ui/themed';

export default function SecondaryScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View flex={1} alignItems="center" style={{
      paddingTop: insets.top
    }}>
      <Box flex={1} w="$full" px="$4">
        <Text>Monthly expense sums up</Text>
      </Box>
      <StatusBar style="auto" />
    </View>
  );
}
