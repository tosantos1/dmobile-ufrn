import { StyleSheet, View, Image, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/ufrngram.png")} style={styles.ufrngram} />
            <FontAwesome5 name='paper-plane' size={24} color='black' />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      padding: 10,
      height: 50,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center',
      zindex: -100
    },
    ufrngram: {
      width: 110,
      height: 25
    },
  });