// Importamos componentes necesarios de Expo y React Native
import { Image } from 'expo-image';
import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';

// Componente principal de la pantalla de inicio
export default function HomeScreen() {
  // Estado para el consumo histórico y la carga
  const [historicalConsumption, setHistoricalConsumption] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(true);

  // Al montar el componente, simulamos la carga de datos históricos
  React.useEffect(() => {
    setLoading(true); // Mostramos el indicador de carga
    setTimeout(() => {
      // Simulamos una petición de red generando un número aleatorio entre 10 y 100 kWh
      const randomConsumption = Math.floor(Math.random() * 90) + 10;
      setHistoricalConsumption(randomConsumption); // Guardamos el valor simulado
      setLoading(false); // Ocultamos el indicador de carga
    }, 2000); // Esperamos 2 segundos para simular la espera
  }, []);

  // Renderizado de la interfaz de usuario
  return (
  // ParallaxScrollView da un efecto visual moderno en la cabecera
  <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* Cabecera visual con gradiente y el nombre de la app */}
      <View style={styles.headerGradient}>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>🏠</Text>
          <Text style={styles.headerTitle}>Hogar Eficiente</Text>
        </View>
      </View>
      {/* Tarjeta con sombra que muestra el consumo histórico */}
      <View style={styles.cardContainer}>
        <View style={styles.cardShadow}>
          <View style={styles.card}>
            <Text style={styles.energyIcon}>⚡</Text>
            <Text style={styles.cardTitle}>Consumo histórico</Text>
            {/* Indicador de carga mientras se obtienen los datos */}
            {loading ? (
              <ActivityIndicator size="large" color="#007AFF" style={{marginVertical: 16}} />
            ) : (
              <Text style={styles.consumptionText}>
                {historicalConsumption} kWh
              </Text>
            )}
          </View>
        </View>
      </View>
      {/* Botón estilizado para programar el monitoreo */}
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>¿Quieres programar el monitoreo?</Text>
        <View style={styles.buttonWrapper}>
          <Button
            title="Programar Monitoreo"
            color="#4CAF50"
            onPress={() => {}}
          />
        </View>
      </View>
    </ParallaxScrollView>
  );
}

// Estilos visuales para los componentes
const styles = StyleSheet.create({
  headerGradient: {
    width: '100%',
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: '#4CAF50',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerIcon: {
    fontSize: 48,
    marginRight: 8,
    textShadowColor: '#333',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#333',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 2,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 24,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  card: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    minWidth: 260,
  },
  energyIcon: {
    fontSize: 48,
    marginBottom: 8,
    color: '#FFD600',
    textShadowColor: '#FFD600',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  consumptionText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginVertical: 16,
    letterSpacing: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  buttonLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  buttonWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    width: 220,
  },
});
