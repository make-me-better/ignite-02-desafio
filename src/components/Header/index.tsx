import { Image, View } from 'react-native'

import logoImg from '@assets/logo.png'
import profileImg from '@assets/profile.png'

export function Header() {
  return (
    <View className="flex-row justify-between">
      <Image source={logoImg} alt="" />
      <Image source={profileImg} alt="" />
    </View>
  )
}
