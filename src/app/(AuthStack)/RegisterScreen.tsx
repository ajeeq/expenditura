import React from 'react';
import { Link } from 'expo-router';
import {
  View,
  Text,
  Box,
  VStack,
  HStack,
  Input,
  Pressable,
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

export default function RegisterScreen() {
  return (
    <View flex={1} alignItems="center">
      <Box flex={1} w="$full" px="$4">
      <Box alignItems='center'>
          <Text>Register</Text>
        </Box>
        
        <VStack mt="$8">
          <FormControl>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="Enter your email" />
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
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="password" placeholder="Enter your password" />
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
              <ButtonText>Create an account</ButtonText>
            </Button>
          </Box>

          <VStack mt="$4" alignItems='center'>
            <HStack>
              <Text>Don't have an account?</Text>
              <Link
                replace
                href="/LoginScreen">
                <Text> Login here</Text>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </View>
  );
}
