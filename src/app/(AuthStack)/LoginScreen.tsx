import React from 'react';
import { router } from 'expo-router';
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

export default function LoginScreen() {
  return (
    <View flex={1} alignItems="center">
      <Box flex={1} w="$full" px="$4">
        <Box alignItems='center'>
          <Text>Login</Text>
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
            {/* <Link
              push
              href="/HomeScreen"
            >
              <Button>
                <ButtonText>Continue</ButtonText>
              </Button>
            </Link> */}


            <Button onPress={() => {
                router.push('HomeScreen')
            }}>
              <ButtonText>Continue</ButtonText>
            </Button>
          </Box>

          <VStack space='sm' mt="$4" alignItems='center'>
            <HStack>
              <Text>Don't have an account?</Text>
              <Pressable  onPress={() => {
                router.push('RegisterScreen')
              }}> 
                <Text> Register Here</Text>
              </Pressable>
            </HStack>
            <Text>Forgot Password</Text>
          </VStack>
        </VStack>

        
      </Box>
    </View>
  );
}
