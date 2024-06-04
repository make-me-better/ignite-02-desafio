import { SectionList, Text, View } from 'react-native'
import { format } from 'date-fns'

import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'

const DATA_MEALS = [
  {
    title: '12.08.22',
    data: [
      {
        id: '1',
        name: 'X-Tudo',
        description: 'Sanduiche com tudo dentro',
        date: new Date(2022, 8, 12, 20, 0),
        diet: false,
      },
      {
        id: '2',
        name: 'Whey protein com leite',
        description: 'Whey protein com leite',
        date: new Date(2022, 8, 12, 16, 0),
        diet: true,
      },
      {
        id: '3',
        name: 'Salada cesar com frango',
        description: 'Salada cesar com frango',
        date: new Date(2022, 8, 12, 12, 30),
        diet: true,
      },
      {
        id: '4',
        name: 'Vitamina de banana com mamão aaaaa',
        description: 'Vitamina de banana com mamãoa a a a a',
        date: new Date(2022, 8, 12, 9, 30),
        diet: true,
      },
    ],
  },
  {
    title: '11.08.22',
    data: [
      {
        id: '1',
        name: 'X-Tudo',
        description: 'Sanduiche com tudo dentro',
        date: new Date(2022, 8, 11, 20, 0),
        diet: false,
      },
      {
        id: '2',
        name: 'Whey protein com leite',
        description: 'Whey protein com leite',
        date: new Date(2022, 8, 11, 16, 0),
        diet: true,
      },
      {
        id: '3',
        name: 'Salada cesar com frango',
        description: 'Salada cesar com frango',
        date: new Date(2022, 8, 11, 12, 30),
        diet: true,
      },
      {
        id: '4',
        name: 'Vitamina de banana com mamão',
        description: 'Vitamina de banana com mamão',
        date: new Date(2022, 8, 11, 9, 30),
        diet: true,
      },
    ],
  },
]

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

      <Text className="mt-10 font-nunito-regular text-base text-gray-100">
        Refeições
      </Text>
      <Button title="Nova refeição" icon="add" className="mt-3" />

      <View>
        <SectionList
          sections={DATA_MEALS}
          keyExtractor={(item) => item.id}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }) => (
            <View className="border border-gray-500 rounded-md mb-2 p-3 flex-row items-center">
              <Text className="font-nunito-bold text-xs text-gray-100">
                {format(item.date, 'kk:mm')}
              </Text>
              <Text className="font-nunito-bold text-xs ml-2 mr-2 text-gray-400">
                |
              </Text>
              <View className="flex-row justify-between flex-1">
                <Text
                  numberOfLines={1}
                  className="font-nunito-regular text-base text-gray-200 flex-1"
                >
                  {item.name}
                </Text>

                <View className="bg-red-mid w-[15] h-[15] rounded-full ml-2"></View>
              </View>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="font-nunito-bold text-xl mt-4 mb-2">{title}</Text>
          )}
        />
      </View>
    </View>
  )
}
