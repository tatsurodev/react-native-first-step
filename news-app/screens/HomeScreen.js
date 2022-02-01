import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import Constants from 'expo-constants';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

// propsにnavigationがsetされている
export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Constants.manifest.keyでaccess可
    // alert(Constants.manifest.extra.newsApiKey);
    // unmount時に実行するclean up関数をreturn
    fetchArticles();
    // dependencyを配列内に指定、空でmount時のみ実行
  }, []);
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

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
            // navigateの引数はStack.Screenで指定したnameを指定する、第二引数に渡したい変数の値をkey: valueのobjectで渡す
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        // keyの形式はstringであることが必須
        keyExtractor={(item, index) => index.toString()}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
}
