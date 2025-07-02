// Header.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

export default function Header({ title, headerStyles }) {
  return (
    <LinearGradient
      colors={['#005B9E', '#00376B']}
      style={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    width: '100%',
  },
  headerContainer: {
    paddingTop: height * 0.09,
    padding: 26,
    borderWidth: 0.17,
    borderBottomWidth: 2,
    borderColor: '#F26801',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  headerTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Nerko One' : 'Nerko',
    fontSize: 26,
    textAlign: 'center',
    color: '#fff',
  },
});
