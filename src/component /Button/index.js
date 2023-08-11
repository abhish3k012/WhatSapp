import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Style} from './style';

const CustomButton = props => {
  const {onClick, buttonText = 'submit'} = props || {};
  return (
    <View>
      <TouchableOpacity onPress={onClick} style={Style.button}>
        <Text style={Style.txtButton}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
