import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const ChatScreen = () => {
  const [data, setData] = useState();
  const selectedData = useSelector(state => state.update.savedata);
  const native = useNavigation();
  console.log('sleleleleele', selectedData);

  useEffect(() => {
    if (selectedData) {
      setData(selectedData);
    }
  }, [selectedData]);
  // console.log('==============================', data[0].image);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 1)'}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  native.navigate('typeChat');
                }}>
                <Image source={{uri: item?.image}} style={styles.avatar} />
              </TouchableOpacity>

              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.button}></View>
            </View>
          );
        }}
        contentContainerStyle={{flexDirection: 'coloum'}}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  button: {
    //backgroundColor: 'rgba(12, 204, 131, 1)',
  },
  ButtonText: {
    alignSelf: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
  box: {
    //marginBottom: 10,
    paddingHorizontal: 16,
    //borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 16,
    fontSize: 20,
    borderRadius: 9,
  },
  text1: {
    fontSize: 14,
    textAlign: 'left',
  },
});
