import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Box,
  HStack,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed';

import data from '@/data/122023.json';

export default function SecondaryScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View flex={1} alignItems="center" style={{
      paddingTop: insets.top
    }}>
      <Box flex={1} w="$full">
        <Box px="$4">
          <Text>Monthly expense sums up</Text>
        </Box>
        
        <ScrollView px="$4">
        {data.days.map((d) => (
          <Box
            borderRadius={4}
            borderWidth={1}
            mt="$4"
          >
            <VStack flex={1} p="$4">
              <Text>{d.date}</Text>
              {d.items.map((item) => (
                <HStack justifyContent="space-between">
                  <Text>{item.item_name}</Text>
                  <Text>RM{item.item_price}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        ))}
        </ScrollView>

        <VStack 
          bgColor="white"
          w="$full"
        >
          <Box px="$4" pt="$2.5" mb="$5">
            <HStack justifyContent="space-between">
              <Text>Expenses so far</Text>
              <Text>RM539.20</Text>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </View>
  );
}
