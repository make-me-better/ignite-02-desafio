import { Text, View } from 'react-native'

import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'

export function Home() {
  return (
    <View className="px-5 pt-5">
      <Header />

      <View className="h-[102] mt-7">
        <Card>
          <Highlight
            title="90,86%"
            subtitle="das refeições dentro da dieta"
            variant="big"
          />
        </Card>
      </View>

      <Text className="mt-10 font-nunito-regular text-base text-gray-700">
        Refeições
      </Text>
      <Button variant="success" title="Nova refeição" className="mt-3" />
    </View>
  )
}
