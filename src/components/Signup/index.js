import {useNavigation} from '@react-navigation/native';
import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Container from "../common/Container/index.js";
import CustomButton from "../common/CustomButton/index.js";
import Input from "../common/input/index.js";
import { LOGIN } from "../../constants/routeNames.js";
import styles from "./styles.js";


const RegisterComponent = () => {
  const {navigate} = useNavigation();
  return(
    <Container>
      <Image 
        height={70} 
        width={70} 
        source={require("../../assets/images/logo.png")} 
        style={styles.logoImage} 
      />
      

      <View>

        <Text style={styles.title}>Welcome to ReactNative Contacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input 
            label="Username"        
            iconPosition="right"
            placeholder="Enter Username"
            //error={"This field is required"}
          />

          <Input 
            label="First name"        
            iconPosition="right"
            placeholder="Enter First name"
            //error={"This field is required"}
          />

          <Input 
            label="Last name"        
            iconPosition="right"
            placeholder="Enter Last name"
            //error={"This field is required"}
          />

          <Input 
            label="Email"        
            iconPosition="right"
            placeholder="Enter Email"
            //error={"This field is required"}
          />

          <Input 
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true} // for security, it doesnt show the password
            icon={<Text>Show</Text>}
            iconPosition="right"
          />

          <CustomButton primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account</Text>
            <TouchableOpacity 
              onPress={() => {
                navigate(LOGIN)
              }}>
               
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        
        </View>
        

      </View>     

    </Container>
  )
}

export default RegisterComponent;