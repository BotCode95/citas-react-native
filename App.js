import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cita from './components/Cita'
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: 'Juan', sintomas: 'Dolor estomago'},
    { id: "2", paciente: "Ivar", propietario: 'Aluan', sintomas: 'Corte lateral'},
    { id: "3", paciente: "Koll", propietario: 'Lautar', sintomas: 'Falta de hidratación'},
  ]);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <FlatList
        data={citas}
        renderItem={ ({item}) => <Cita cita = {item}/>}
        keyExtractor={cita => cita.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo : {
    color: '#FFF',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
