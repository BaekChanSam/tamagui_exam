import { useEffect } from 'react';
import { useRouter, useRootNavigationState, Stack } from 'expo-router';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { StatusBar } from 'expo-status-bar';
import { ToastProvider } from '@tamagui/toast';
import { defaultConfig } from '@tamagui/config/v4';

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  fontLanguages: {},
});

export default function Layout() {
  const router = useRouter();
  const navigationState = useRootNavigationState(); // ✅ 라우트 상태 확인

  useEffect(() => {
    if (navigationState?.key) {
      // ✅ 네비게이션 시스템이 로드된 후 이동
      router.replace('/tamagui_main');
    }
  }, [navigationState?.key]);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ToastProvider>
        {/* ✅ 반드시 Stack을 렌더링해야 오류가 발생하지 않음 */}
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ToastProvider>
    </TamaguiProvider>
  );
}
