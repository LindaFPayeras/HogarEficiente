import AsyncStorage from '@react-native-async-storage/async-storage';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';

const TASK_NAME = 'ENERGY_MONITORING_TASK';

TaskManager.defineTask(TASK_NAME, async () => {
  try {
    // Simulamos un consumo aleatorio
    const consumption = Math.floor(Math.random() * 150);

    if (consumption > 100) {
      // Notificación de pico de consumo
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Pico de consumo detectado ⚡',
          body: `Consumo actual: ${consumption} kWh`,
        },
        trigger: null,
      });

      // Guardar el valor en almacenamiento local (para que la UI lo lea luego)
      await AsyncStorage.setItem('lastPeak', consumption.toString());
    }

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error(error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});
