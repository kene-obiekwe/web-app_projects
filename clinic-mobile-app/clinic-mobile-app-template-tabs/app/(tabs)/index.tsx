import { StyleSheet, TextInput, ScrollView, Switch, TouchableOpacity, View as DefaultView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';

export default function TabOneScreen() {
  const [isDeveloperMatriculation, setIsDeveloperMatriculation] = useState(false);

  const toggleSwitch = () => setIsDeveloperMatriculation(previousState => !previousState);

  const handleSubmit = () => {
    // Handle form submission
    alert('Biodata submitted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Patient Biodata</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text style={styles.label}>First Name*</Text>
      <TextInput style={styles.input} placeholder="Enter first name" placeholderTextColor="gray" />

      <Text style={styles.label}>Surname*</Text>
      <TextInput style={styles.input} placeholder="Enter surname" placeholderTextColor="gray" />

      <Text style={styles.label}>Middle Name</Text>
      <TextInput style={styles.input} placeholder="Enter middle name" placeholderTextColor="gray" />

      <Text style={styles.label}>Date of Birth*</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" placeholderTextColor="gray" />

      <Text style={styles.label}>Home Address*</Text>
      <TextInput style={styles.input} placeholder="Enter home address" placeholderTextColor="gray" />

      <Text style={styles.label}>Date of Registration*</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" placeholderTextColor="gray" />

      <DefaultView style={styles.switchContainer}>
        <Text style={styles.label}>Developer's Matriculation Number</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#FF7043" }}
          thumbColor={isDeveloperMatriculation ? "white" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDeveloperMatriculation}
        />
      </DefaultView>

      {isDeveloperMatriculation && (
        <TextInput style={styles.fixedInput} editable={false} value="_22120613021" />
      )}

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
    paddingTop: 20, // Adjusted padding top to bring inputs closer to the header
    backgroundColor: '#FFD54F', // Yellowish-orange color
    paddingHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: '#FFF3E0', // Matching the input background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // Capsule shape
    marginBottom: 10, // Adjusted margin bottom to bring inputs closer to the header
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
    marginVertical: 10, // Reduced vertical margin
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
    borderColor: '#FF7043', // Restored original border color
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10, // Reduced margin bottom to bring inputs closer together
    paddingHorizontal: 10,
    color: 'black', // Black text color for input details
    backgroundColor: '#FFF3E0', // Light background color for input
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10, // Adjusted margin vertical
  },
  fixedInput: {
    height: 40,
    borderColor: '#FF7043', // Restored original border color
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    marginBottom: 50, // Increase bottom margin to move it to the bottom
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
