import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "blue"
        }}
      >Hi, I Hate React Native</Text>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
