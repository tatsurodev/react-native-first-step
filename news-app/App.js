import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://picsum.photos/id/10/200/200' }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit,
            architecto tenetur enim aliquam officia explicabo unde facere totam
            sequi molestiae. Eum, ex? Velit minus aspernatur nihil, quae dolorum
            voluptatibus?
          </Text>
          <Text>ReactNews</Text>
        </View>
      </View>
    </View>
  );
}
