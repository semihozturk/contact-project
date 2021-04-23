import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from "react-native";
import { LOGIN, REGISTER } from "../constants/routeNames.js";
import Login from "../screens/Login/index.js";
import Register from "../screens/Register/index.js";


const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return ( // headerShown:false deyince Login header i yok oldu
    <AuthStack.Navigator screenOptions={{headerShown:false}}> 
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  )
  
}

export default AuthNavigator;