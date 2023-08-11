import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Style} from './styles';
import {useNavigation} from '@react-navigation/native';

const Linkbutton = navigation => {
  const native = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => native.navigate('forget')}>
        <Text style={Style.text}>Forget Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Linkbutton;
