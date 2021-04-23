import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_LIST, CONTACT_DETAIL, CREATE_CONTACT, SETTINGS } from "../constants/routeNames.js";
import Contacts from "../screens/Contacts/index.js";
import ContactDetail from "../screens/ContactDetail/index.js";
import CreateContact from "../screens/CreateContact/index.js";
import Settings from "../screens/Settings/index.js";


const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  )
  
}

export default HomeNavigator;