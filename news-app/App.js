import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    // スマホの表示領域内に適切に表示する
    <SafeAreaView style={styles.container}>
      {/* 配列dataをrender */}
      <FlatList
        data={articles}
        // dataで指定した各要素がitemに格納
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        // keyの形式はstringであることが必須
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
