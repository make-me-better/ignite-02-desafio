import {
  useFonts,
  Nunito_400Regular, // eslint-disable-line camelcase
  Nunito_700Bold, // eslint-disable-line camelcase
} from '@expo-google-fonts/nunito'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { Home } from '@screens/Home'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular, // eslint-disable-line camelcase
    Nunito_700Bold, // eslint-disable-line camelcase
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  onLayoutRootView()

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar style="dark" />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
