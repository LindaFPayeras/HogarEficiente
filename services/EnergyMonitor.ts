
import * as TaskManager from 'expo-task-manager';
import * as Notifications from 'expo-notifications';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Battery from 'expo-battery';
import * as Network from 'expo-network';

const TASK_NAME = 'ENERGY_MONITOR_TASK';
const CONSUMPTION_THRESHOLD = 100;

TaskManager.defineTask(TASK_NAME, async () => {
  try {
    // Check battery and network status first
    const batteryState = await Battery.getBatteryStateAsync();
    const networkState = await Network.getNetworkStateAsync();

    // Only run if charging and on an unmetered network (like Wi-Fi)
    if (batteryState !== Battery.BatteryState.CHARGING || !networkState.isInternetReachable || networkState.type !== Network.NetworkStateType.WIFI) {
      console.log('Skipping task: Device is not charging or not on a Wi-Fi network.');
      return BackgroundFetch.BackgroundFetchResult.NoData;
    }

    const energyConsumption = Math.floor(Math.random() * 200);
    console.log(`New energy consumption data: ${energyConsumption} kWh`);

    if (energyConsumption > CONSUMPTION_THRESHOLD) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Pico de consumo detectado',
          body: `El consumo actual es de ${energyConsumption} kWh.`,
        },
        trigger: null,
      });
    }
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('Task failed:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export { TASK_NAME };
