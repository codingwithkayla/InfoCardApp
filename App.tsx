import { SafeAreaView, ScrollView, Text, View, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [message, setMessage] = useState('Welcome to my app');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Welcome To My Profile</Text>
        <Image source={require("./assets/image.png")} style={styles.image} />

        <Button title="Show Greeting" onPress={() => setMessage(`Hello ${name}, enjoy ${hobby}`)} />
          
  <View style={styles.card}>
  <Text style={styles.cardText}>Hey, {name}</Text>
  <Text style={styles.cardText}>My favourite hobby is {"sleeping all day"}</Text>
  </View>

  
<Image source={{ uri: "https://i.pinimg.com/736x/c1/b7/13/c1b713e73deafe516bec97934a17581b.jpg" }} style={styles.onlineImage} />

  <Text style={styles.extra}>I love noodles</Text>
  <Text style={styles.extra}>I also love my cat Layla</Text>
  <Text style={styles.extra}>MAST is a hectic module</Text>
  <Text style={styles.extra}>I'm running out of ideas</Text>
  <Text style={styles.extra}>Goodbye.</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB7CE',
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  onlineImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  extra: {
    fontSize: 16,
    marginVertical: 5
  }
});


