import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.infoText}>
        For assistance, please contact us at:
      </Text>
      <Text style={styles.contactText}>
        Email: keobiekwe@gmail.com
      </Text>
      <Text style={styles.contactText}>
        Phone: +234 705 2818357
      </Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA', // Light blue background color
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
  contactText: {
    fontSize: 18,
    color: '#00796B', // Slightly lighter green for contact info
    textAlign: 'center',
    marginBottom: 5,
  },
});
