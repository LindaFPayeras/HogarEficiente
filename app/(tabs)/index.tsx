import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    // Vista principal que abarca toda la pantalla
    <ThemedView style={styles.container}>
      {/* Contenedor del encabezado con el título y subtítulo. Se posiciona de forma absoluta en la parte superior. */}
      <View style={styles.headerContainer}>
        <ThemedText type="title" style={styles.title}>Hogar Eficiente</ThemedText>
        <ThemedText style={styles.subtitle}>Monitorea y ahorra energía</ThemedText>
      </View>

      {/* Tarjeta que muestra el consumo de energía actual */}
      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>Consumo Actual</ThemedText>
        <ThemedText style={styles.consumptionText}>0 kWh</ThemedText>
      </View>

      {/* Botón para programar el monitoreo de energía */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Monitoreo programado!')}>
        <ThemedText style={styles.buttonText}>Programar Monitoreo</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

// Estilos para los componentes de la pantalla
const styles = StyleSheet.create({
  // Estilo para el contenedor principal
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.light.background,
    justifyContent: 'center', // Centra el contenido verticalmente
  },
  // Estilo para el contenedor del encabezado
  headerContainer: {
    position: 'absolute',
    top: 80, // Distancia desde la parte superior
    left: 24,
    right: 24,
    alignItems: 'center',
  },
  // Estilo para el título principal
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  // Estilo para el subtítulo
  subtitle: {
    fontSize: 16,
    color: Colors.light.icon,
    marginTop: 8,
  },
  // Estilo para la tarjeta de consumo
  card: {
    backgroundColor: Colors.dark.background,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Estilo para el título de la tarjeta
  cardTitle: {
    fontSize: 18,
    color: Colors.dark.text,
    marginBottom: 8,
  },
  // Estilo para el texto del consumo
  consumptionText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: Colors.dark.tint,
  },
  // Estilo para el botón
  button: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
  },
  // Estilo para el texto del botón
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
