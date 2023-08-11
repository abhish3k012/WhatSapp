import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {style} from './styles';

const InputFieldWithTitle = props => {
  const {
    placeholder,
    autoCapitalize = 'none',
    autuCorrect = false,
    keyboardType = 'email-address',
    value,
    onChange,
    secureTextEntry = false,
    title,
  } = props || {};
  return (
    <View>
      <Text style={style.titleStyle}>{title}</Text>
      <TextInput
        style={style.textinput}
        onChangeText={onChange}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        autuCorrect={autuCorrect}
        keyboardType={keyboardType}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputFieldWithTitle;
