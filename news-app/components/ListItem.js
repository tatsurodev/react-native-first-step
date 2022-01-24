import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
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
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

const ListItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://picsum.photos/id/10/200/200' }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.Text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit,
          architecto tenetur enim aliquam officia explicabo unde facere totam
          sequi molestiae. Eum, ex? Velit minus aspernatur nihil, quae dolorum
          voluptatibus?
        </Text>
        <Text style={styles.subText}>ReactNews2</Text>
      </View>
    </View>
  );
};

export default ListItem;
