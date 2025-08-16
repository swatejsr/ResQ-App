import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  BackHandler,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HiddenFeature = () => {
  const [notesVisible, setNotesVisible] = useState(false);
  const navigation = useNavigation();

  const revealNotes = () => {
    setNotesVisible(true);
    Alert.alert('✅ Hidden Notes Revealed');
  };

  const disguiseExit = () => {
    Alert.alert('🕵️ Exit', 'App will now exit silently.');
    BackHandler.exitApp();
  };

  const logoutUser = async () => {
    try {
      await AsyncStorage.multiRemove(['username', 'userPin', 'isRegistered']);
      Alert.alert('Logged out', 'You have been logged out.', [
        { text: 'OK', onPress: () => navigation.replace('Register') },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to log out. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔒 Hidden Features</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HiddenNotes')}>
        <Text style={styles.buttonText}>Reveal Hidden Notes</Text>
      </TouchableOpacity>

      {notesVisible && (
        <View style={styles.notes}>
          <Text style={{ fontWeight: 'bold' }}>My Hidden Notes:</Text>
          <Text>This is a sample secret note...</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={disguiseExit}>
        <Text style={styles.buttonText}>Discreet Exit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={logoutUser}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HiddenFeature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333',
    padding: 14,
    marginVertical: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  notes: {
    marginTop: 20,
    padding: 14,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  logoutButton: {
    backgroundColor: '#e53935',
    padding: 14,
    marginTop: 30,
    borderRadius: 12,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
