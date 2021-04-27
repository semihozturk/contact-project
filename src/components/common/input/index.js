import React, { useState } from "react";
import { View, TextInput, label, Text } from "react-native";
import colors from "../../../assets/theme/colors.js";
import styles from "./styles.js";

const Input = ({onChangeText,iconPosition,icon,style,value,label, error,...props}) => { //...props must be last item, if you put it before, it wont work
  
  const [focused, setFocused] = useState(false);


  const getFlexDirection = () => {
    if(icon && iconPosition) {// first check if have icon, and iconPosition

      if(iconPosition==="left") {
        return "row";
      } else if(iconPosition==="right") {
        return "row-reverse";
      }
    }
  }

  const getBorderColor = () => {

    if(focused) {
      return colors.primary;
    }
    if(error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  }

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper,
        {alignItems: icon ? "center":"baseline"},//baseline means default one
        {borderColor:getBorderColor(),flexDirection: getFlexDirection()}
      ]}>
        <View>{icon && icon}</View>

        <TextInput 
      //  style={{height:40, borderColor:"gray", borderWidth:1, }}
      //  onChange={text => onChangeText(text)}
        style = {[style, styles.textInput]}
        onChangeText = {onChangeText}
        value={value}

        onFocus={() => {
          setFocused(true);
        }}

        onBlur={() => setFocused(false)}

        {...props}
      />
      </View>
      
      {error && <Text style={styles.error}>{error}</Text>} 
      
    </View>
// if there is error, show it by {error && }

  );
};

export default Input;