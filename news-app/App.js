import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ListItem from './components/ListItem';

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

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/id/10/200/200"
        title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ipsam eos tempora perferendis error magni at, libero commodi harum, dignissimos iste nobis quos cum velit hic non omnis, porro corporis."
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://picsum.photos/id/10/200/200"
        title="Hello world"
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://picsum.photos/id/10/200/200"
        title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ipsam eos tempora perferendis error magni at, libero commodi harum, dignissimos iste nobis quos cum velit hic non omnis, porro corporis."
        author="SampleNews"
      />
    </View>
  );
}
