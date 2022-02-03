import 'dotenv/config';

export default {
  name: 'news-app',
  slug: 'news-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    // 一般的にdomainを逆から並べたものが多い
    bundleIdentifier: 'com.zelohas.news-app',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.zelohas.newsapp',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    newsApiKey: process.env.NEWS_API_KEY,
  },
};
