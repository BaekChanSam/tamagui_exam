import { View } from 'react-native';
import { Text, YStack } from 'tamagui';

export default function Index() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="white">
      <Text fontSize={24} fontWeight="bold">Tamagui Main</Text>
    </YStack>
  );
}
