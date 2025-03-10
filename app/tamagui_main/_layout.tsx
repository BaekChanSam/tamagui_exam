import { Stack } from 'expo-router';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { ToastProvider } from '@tamagui/toast';
import { StatusBar } from 'expo-status-bar';
import { defaultConfig } from '@tamagui/config/v4';

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  fontLanguages: {}, // 필수 속성 추가
});

export default function Layout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ToastProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ToastProvider>
    </TamaguiProvider>
  );
}
