import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Image style={styles.ufrngram} source={require("./assets/ufrngram.png")}
        />
        <FontAwesome5 name="paper-plane" size={24} color="black" />
      </View>
      <View style={styles.stories}>
          <View style={styles.story}>
            <Image style={styles.imgStory} source={require('./assets/ufrngram.png')} />
            <Text>Perna</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgStory} source={require('./assets/ufrngram.png')} />
            <Text>Perna</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgStory} source={require('./assets/ufrngram.png')} />
            <Text>Perna</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgStory} source={require('./assets/ufrngram.png')} />
            <Text>Perna</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgStory} source={require('./assets/ufrngram.png')} />
            <Text>Perna</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgStory} source={require('./assets/ufrngram.png')} />
            <Text>Perna</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgStory} source={require('./assets/ufrngram.png')} />
            <Text>Perna</Text>
          </View>
      </View>
      <View style={styles.feed}>
            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image source={require('./assets/ufrngram.png')} style={styles.postheaderimg} />
                        <Text >Piu Piu</Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                </View>
                <Image source={require('./assets/ufrngram.png')} aspectRatio={1.777} style={styles.postimg} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
                </View>
            </View>

            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image source={require('./assets/ufrngram.png')} style={styles.postheaderimg} />
                        <Text >Perna</Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                </View>
                <Image source={require('./assets/ufrngram.png')} aspectRatio={1.777} style={styles.postimg} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
                </View>
            </View>

            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image source={require('./assets/ufrngram.png')} style={styles.postheaderimg} />
                        <Text> Taz </Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                </View>
                <Image source={require('./assets/ufrngram.png')} aspectRatio={1.777} style={styles.postimg} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
                </View>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: Constants.statusBarHeight
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ufrngram: {
    height: 25,
    width: 110,
  },
  stories: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: "fff",
  },
  story: {
    height: 90,
    width: 90,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  imgStory: {
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  feed: {
    flex: 1,
    backgroundColor: "#fff",
  },
  post: {
      backgroundColor: "#fff",
  },
  postheader: {
      height: 60,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
  },
  postheaderesquerda: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  postheaderimg: {
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 10,
  },
  postimg: {
      //aspectRatio={1.777} esse valor é altura/largura
      width: '100%', //conforme o tamanho da tela
      height: undefined,
  },
  footer: {
      height: 60,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',

  },
  footericon: {
      margin: 5,
  },
});
