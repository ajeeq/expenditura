import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import {
  View,
  Text,
  Box,
  Input,
  Button,
  ButtonText,
  InputField,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  
} from '@gluestack-ui/themed';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View flex={1} alignItems="center" style={{
      paddingTop: insets.top
    }}>
      <Box flex={1} w="$full" px="$4">
        <Text>Enter daily expense</Text>

        <Box mt="$4">
          <FormControl>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Item</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="item" />
            </Input>
            {/* <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError> */}
          </FormControl>

          <FormControl mt="$4">
            <FormControlLabel mb="$1">
              <FormControlLabelText>Price</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="RM" keyboardType='numeric'/>
            </Input>
            {/* <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError> */}
          </FormControl>

          <Box mt="$4">
            <Button onPress={() => {
              console.log("button pressed")
            }}>
              <ButtonText>Add</ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>
    </View>
  );
}
