import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function AboutUsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.infoText}>
        Welcome to Dr. Amaka's Dental Clinic App! Our mobile application is designed to enhance your experience at our clinic by providing you with easy access to your dental records, appointment scheduling, and more.
      </Text>
      <Text style={styles.infoText}>
        Features:
      </Text>
      <Text style={styles.featureText}>
        - View your dental records at any time
      </Text>
      <Text style={styles.featureText}>
        - Schedule appointments with ease
      </Text>
      <Text style={styles.featureText}>
        - Receive reminders for upcoming appointments
      </Text>
      <Text style={styles.featureText}>
        - Access dental care tips and guidelines
      </Text>
      <Text style={styles.infoText}>
        At Dr. Amaka's Dental Clinic, we are committed to providing you with the highest quality dental care in a comfortable and welcoming environment. Our app is a step forward in making your dental care more accessible and convenient.
      </Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA', // Nice light blue background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004D40', // Dark green color for the title
    marginBottom: 20,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  infoText: {
    fontSize: 18,
    color: '#004D40', // Dark green color for the info text
    textAlign: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 18,
    color: '#00796B', // Slightly lighter green for features
    textAlign: 'center',
    marginBottom: 5,
  },
});
