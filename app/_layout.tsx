import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/theme/color';
import { useFonts } from 'expo-font';
// import {
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_600SemiBold,
//   Poppins_700Bold,
// } from '@expo-google-fonts/poppins';

import { Roboto_700Bold,Roboto_400Regular,Roboto_500Medium,Roboto_600SemiBold, } from '@expo-google-fonts/roboto';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Roboto_700Bold,Roboto_400Regular,Roboto_500Medium,Roboto_600SemiBold,
  });
    if (!loaded) return null;

  return (
    <ThemeProvider value={Colors.background === '#1E1E1E' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="userdetail" options={{ headerShown: false }} />
        <Stack.Screen name="startScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Showmore" options={{ headerShown: false }} />
        <Stack.Screen name="Selectlocation" options={{ headerShown: false }} />

      </Stack>
<StatusBar style="light" hidden={true} />    
</ThemeProvider>
  );
}
