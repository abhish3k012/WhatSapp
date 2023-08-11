import {View, Text} from 'react-native';
import React from 'react';

const typescreen = () => {
  return (
    <View>
      <Text>typescreen</Text>
    </View>
  );
};

export default typescreen;

// import {View, Text} from 'react-native';
// import React from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';

// const typescreen = navigation => {
//   const navigation = useNavigation();
//   return (
//     <View>
//       <Text>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate('dashboard')
//           }></TouchableOpacity>{' '}
//         back
//       </Text>
//     </View>
//   );
// };

// export default typescreen;
