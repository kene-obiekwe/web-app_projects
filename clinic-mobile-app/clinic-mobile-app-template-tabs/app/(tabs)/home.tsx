import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// Assuming you have a constant for the input text color
import Colors from '@/constants/Colors'; // Update the path as per your project structure

const windowHeight = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, { height: windowHeight * 0.3 }]}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: '100%',
    height: '125%',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 62,
    fontWeight: 'bold',
    color: '#4E342E', // Assuming Colors.inputText is defined
  },
});
