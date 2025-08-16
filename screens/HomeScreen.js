import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const features = [
  {
    key: 'sos',
    title: 'SOS (Dial Pad)',
    icon: 'call',
    onPress: (navigation) => navigation.navigate('SOSDialPad'),
  },
  {
    key: 'location',
    title: 'Location Share',
    icon: 'location',
    onPress: (navigation) => navigation.navigate('LocationShare'),
  },
  {
    key: 'filesave',
    title: 'File Save',
    icon: 'folder-open',
    onPress: (navigation) => navigation.navigate('FileSave'),
  },
  {
    key: 'chat',
    title: 'Chat',
    icon: 'chatbubbles',
    onPress: (navigation) => navigation.navigate('Chat'),
  },
  {
    key: 'hide',
    title: 'App Hidden Feature',
    icon: 'eye-off',
    onPress: (navigation) => navigation.navigate('HiddenFeature'),
  },
  {
    key: 'helpline',
    title: 'Helpline Contacts',
    icon: 'help-circle',
    onPress: (navigation) => navigation.navigate('Helpline'),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => item.onPress(navigation)}
    >
      <Icon name={item.icon} size={36} color="#4CAF50" />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to ResQ</Text>

      {/* PANIC BUTTON */}
      <TouchableOpacity
        style={styles.panicButton}
        onPress={() => navigation.navigate('PanicButton')}
      >
        <Text style={styles.panicButtonText}>🚨 PANIC</Text>
      </TouchableOpacity>

      {/* Feature Grid */}
      <FlatList
        data={features}
        renderItem={renderCard}
        keyExtractor={(item) => item.key}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  panicButton: {
    backgroundColor: 'red',
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  panicButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
