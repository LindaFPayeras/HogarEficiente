import { StyleSheet, Button } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Hogar Eficiente</ThemedText>
      <ThemedText style={styles.consumptionText}>Consumo actual: 0 kWh</ThemedText>
      <Button
        title="Programar Monitoreo"
        onPress={() => alert('Monitoreo programado!')}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  consumptionText: {
    fontSize: 24,
  },
});
