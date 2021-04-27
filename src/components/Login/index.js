import {useNavigation} from '@react-navigation/native';
import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Container from "../../components/common/Container/index.js";
import CustomButton from "../../components/common/CustomButton/index.js";
import Input from "../../components/common/input/index.js";
import { REGISTER } from "../../constants/routeNames.js";
import styles from "./styles.js";


const LoginComponent = () => {
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
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          <Input 
            label="Username"        
            iconPosition="right"
            placeholder="Enter Username"
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
            <Text style={styles.infoText}>Need a new account</Text>
            <TouchableOpacity 
              onPress={() => {
                navigate(REGISTER)
              }}>
               
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        
        </View>
        

      </View>     

    </Container>
  )
}

export default LoginComponent;