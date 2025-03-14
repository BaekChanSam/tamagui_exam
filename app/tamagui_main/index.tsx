import React from 'react'
import { TamaguiProvider, Button, YStack, createTamagui, Stack } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'

const config = createTamagui(defaultConfig)

// 스타일 정의
const styles = {
  container: { 
    flex: 1, 
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    bg: '$background'
  },
  button: { size: '$4', bg: '$blue10', color: 'white' }
}

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <YStack {...styles.container}>
        <Button {...styles.button}>Click Me</Button>
      </YStack>
    </TamaguiProvider>
  )
}
