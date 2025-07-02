import LottieView from 'lottie-react-native';
import { ScrollView, StyleSheet, View } from 'react-native';
import Background from './Background';

const Loader = () => {
  return (
    <Background style={{ flex: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <ScrollView>
          <LottieView
            source={require('../assets/animations/earth.json')}
            autoPlay
            style={{ width: 196, height: 199 }}
          />
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
