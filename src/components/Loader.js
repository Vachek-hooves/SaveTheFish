import LottieView from 'lottie-react-native';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Background from './Background';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);

  return (
    <Background style={{ flex: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <ScrollView>
          {loader ? (
            <Image source={require('../assets/images/onb1.png')} />
          ) : (
            <LottieView
              source={require('../assets/animations/earth.json')}
              autoPlay
              style={{ width: 196, height: 199 }}
            />
          )}
        </ScrollView>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Loader;
