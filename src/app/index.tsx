// index.tsx exist just to redirect the initial route to HomeScreen.tsx
import React from 'react';
import { Redirect } from "expo-router";

const Index = () => {
  return <Redirect href="/HomeScreen" />;
};
export default Index;