import { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
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
  const [refreshing, setRefreshing] = useState(false);
  // refはstateと違い値が更新されても再renderされない。また、stateは非即時、refは即時で値を更新
  const pageRef = useRef(1);
  // すべての記事を読み込んだかどうか
  const fetchedAllRef = useRef(false);

  useEffect(() => {
    setLoading(true);
    // Constants.manifest.keyでaccess可
    // alert(Constants.manifest.extra.newsApiKey);
    // unmount時に実行するclean up関数をreturn
    fetchArticles(1);
    // dependencyを配列内に指定、空でmount時のみ実行
    setLoading(false);
  }, []);

  const fetchArticles = async (page) => {
    try {
      const response = await axios.get(`${URL}&page=${page}`);
      if (response.data.articles.length > 0) {
        setArticles((prevArticles) => [
          ...prevArticles,
          ...response.data.articles,
        ]);
      } else {
        fetchedAllRef.current = true;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onEndReached = () => {
    // 全pageを読み込んでいなければpageRefを更新、記事取得
    if (!fetchedAllRef.current) {
      pageRef.current = pageRef.current + 1;
      fetchArticles(pageRef.current);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setArticles([]);
    pageRef.current = 1;
    fetchedAllRef.current = false;
    await fetchArticles(1);
    setRefreshing(false);
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
        // 画面下に到達した時に実行
        onEndReached={onEndReached}
        // pull to refresh実装
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
}
