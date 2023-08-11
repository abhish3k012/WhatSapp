import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import InputFieldWithTitle from '../component /Inputfield';
import CustomButton from '../component /Button';
// Import Image Picker
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {addData} from '../redux/slice';

const AddUserScreen = navigation => {
  const native = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filePath, setFilePath] = useState({});
  const [saveData, setSaveData] = useState([]);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  const saveInformation = () => {
    //console.log(filePath?.assets[0]?.uri);
    const data = {name: name, number: number, image: filePath?.assets[0]?.uri};
    setSaveData([...saveData, data]);
    native.navigate('dashboard');
    // native.navigate('dashboard', {data: saveData});
    //console.log(saveData);
    // dispatch(addData(saveData));
  };
  useEffect(() => {
    if (saveData) {
      dispatch(addData(saveData));
    }
  }, [saveData]);

  const handleNameFunc = () => {
    return (
      <InputFieldWithTitle
        title={'Name'}
        onChange={text => setName(text)}
        placeholder="Please enter Email Address"
        keyboardType="email-address"
        value={name}
      />
    );
  };

  const handleNumberFunc = () => {
    return (
      <InputFieldWithTitle
        title={'Mobile Number'}
        onChange={text => setNumber(text)}
        placeholder="whatsappNumber"
        value={number}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {filePath !== {} && filePath?.assets && (
          <Image
            source={{uri: filePath?.assets[0]?.uri}}
            style={styles.imageStyle}
          />
        )}

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 200}}>
        {handleNameFunc()}
        {handleNumberFunc()}

        <CustomButton buttonText={'Save'} onClick={() => saveInformation()} />
      </View>
    </View>
  );
};

export default AddUserScreen;

//const {selectedData} = useSelector(state => state.update);
// useEffect(() => {
//   if (selectedData) {
//     setaddData(selectedData);
//   }
// }, [selectedData]);
