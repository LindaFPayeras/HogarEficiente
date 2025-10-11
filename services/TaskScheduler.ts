
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { Platform } from 'react-native';
import { TASK_NAME } from './EnergyMonitor';

export const scheduleTask = async () => {
  if (Platform.OS === 'web') {
    console.log('Background fetch is not available on web. Task scheduling is disabled.');
    return;
  }
  try {
    const isRegistered = await TaskManager.isTaskRegisteredAsync(TASK_NAME);
    if (isRegistered) {
      console.log('Task is already scheduled.');
      return;
    }

    await BackgroundFetch.registerTaskAsync(TASK_NAME, {
      minimumInterval: 15 * 60, // 15 minutes
      stopOnTerminate: false,
      startOnBoot: true,
    });

    const isNowRegistered = await TaskManager.isTaskRegisteredAsync(TASK_NAME);
    if (isNowRegistered) {
      console.log('Task scheduled successfully.');
    } else {
      console.warn('Task registration may have failed.');
    }
  } catch (error) {
    console.error('Failed to schedule task', error);
  }
};

export const cancelTask = async () => {
  if (Platform.OS === 'web') {
    console.log('Background fetch is not available on web. Task cancellation is disabled.');
    return;
  }
  try {
    const isRegistered = await TaskManager.isTaskRegisteredAsync(TASK_NAME);
    if (!isRegistered) {
      console.log('Task is not scheduled, nothing to cancel.');
      return;
    }

    await BackgroundFetch.unregisterTaskAsync(TASK_NAME);

    const isNowRegistered = await TaskManager.isTaskRegisteredAsync(TASK_NAME);
    if (!isNowRegistered) {
      console.log('Task cancelled successfully.');
    } else {
      console.warn('Task cancellation may have failed.');
    }
  } catch (error) {
    console.error('Failed to cancel task', error);
  }
};
