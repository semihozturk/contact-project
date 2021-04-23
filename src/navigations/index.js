import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider.js";



const AppNavContainer = () => {
  const {
    authState: {isLoggedIn}, // global den yakalıyor sanırım isLoggedIn i, normalde authState içinde, orda isLoggedIn i değiştirince algılıyor
  } = useContext(GlobalContext); // when you use useContext, u give the one you want to check
// means we can read from global context from anywhere by doing useContext  
  console.log("isLoggedIn :>> ", isLoggedIn);
  
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator /> }
    </NavigationContainer>
  )  
}

export default AppNavContainer;