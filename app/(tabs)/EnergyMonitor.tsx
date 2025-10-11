import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function EnergyMonitor() {
  const [consumption, setConsumption] = useState<number>(0);

  // 🔹 "Escuchamos" cada pocos segundos si hay nuevo pico guardado
  useEffect(() => {
    const interval = setInterval(async () => {
      const value = await AsyncStorage.getItem('lastPeak');
      if (value && parseInt(value) !== consumption) {
        setConsumption(parseInt(value));
      }
    }, 5000); // revisa cada 5 segundos

    return () => clearInterval(interval);
  }, [consumption]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22 }}>
        Consumo actual: {consumption} kWh
      </Text>
    </View>
  );
}
