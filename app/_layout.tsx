import { useEffect } from 'react';
import { useRouter, useRootNavigationState, Stack } from 'expo-router';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { StatusBar } from 'expo-status-bar';
import { ToastProvider } from '@tamagui/toast';
import { defaultConfig } from '@tamagui/config/v4';

const tamaguiConfig = createTamagui({
  ...defaultConfig,
});

export default function Layout() {
  const router = useRouter();
  const navigationState = useRootNavigationState(); // 라우트 상태 확인 

  useEffect(() => {
    if (navigationState?.key) {
      // 네비게이션 시스템이 랜더링 된 후 이동학도록 설정
      router.replace('/tamagui_main');
    }
  }, [navigationState?.key]);

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
