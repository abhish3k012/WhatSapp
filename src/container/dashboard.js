import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatScreen from './chatscreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FirstRoute = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 1)'}}>
      <TouchableOpacity onPress={() => navigation.navigate('adduser')}>
        <Text>back</Text>
      </TouchableOpacity>
      <ChatScreen />
    </SafeAreaView>
  );
};

const SecondRoute = props => (
  <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <Text>Second Tab Content</Text>
  </SafeAreaView>
);
const ThirdRoute = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <Text>Third Tab Content</Text>
  </SafeAreaView>
);

const dashboard = props => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'CHATS'},
    {key: 'second', title: 'STATUS'},
    {key: 'third', title: 'CALL'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};
const styles = StyleSheet.create({
  FirstRoute: {
    alignSelf: 'center',
    backgroundColor: 'rgba(12, 204, 131, 1)',
    marginTop: 25,
    padding: 16,

    borderRadius: 22,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  FirstRouteText: {
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',

    fontSize: 32,
    marginTop: 400,
  },
});
export default dashboard;
