import React from 'react';
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const handleSubmit = () => {
    Alert.alert('Alert', 'Clinical record submitted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Patient Clinical Record</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text style={styles.label}>Clinic date</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" placeholderTextColor="gray" />

      <Text style={styles.label}>Nature of ailment</Text>
      <TextInput style={styles.input} placeholder="Enter nature of ailment" placeholderTextColor="gray" />

      <Text style={styles.label}>Medicine prescribed</Text>
      <TextInput style={styles.input} placeholder="Enter medicine prescribed" placeholderTextColor="gray" />

      <Text style={styles.label}>Procedure undertaken</Text>
      <TextInput style={styles.input} placeholder="Enter procedure undertaken" placeholderTextColor="gray" />

      <Text style={styles.label}>Date of next appointment</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" placeholderTextColor="gray" />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30, // Adjusted padding top to bring inputs closer to the header
    backgroundColor: '#FFD54F', // Yellowish-orange color
    paddingHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: '#FFF3E0', // Matching the input background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // Capsule shape
    marginBottom: 15, // Adjusted margin bottom to bring inputs closer to the header
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
  },
  title: {
    fontSize: 24, // Slightly reduced header size
    fontWeight: 'bold',
    color: '#4E342E', // Darker color for contrast
    textAlign: 'center',
  },
  separator: {
    marginVertical: 15, // Reduced vertical margin
    height: 1,
    width: '80%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: 10,
    color: '#4E342E', // Darker color for contrast
  },
  input: {
    height: 40,
    borderColor: '#FF7043', // Border color matching the submit button
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    marginBottom: 15,
    paddingHorizontal: 10,
    color: 'black', // Black text color for input details
    backgroundColor: '#FFF3E0', // Light background color for input
  },
  submitButton: {
    backgroundColor: '#FF7043', // Same color as the input border
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5, // Slightly rounded corners
    marginBottom: 20, // Margin bottom to create space below the button
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
