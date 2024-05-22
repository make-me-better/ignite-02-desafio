import { Text, View } from 'react-native'
import { tv, VariantProps } from 'tailwind-variants'

const titleTv = tv({
  base: ['font-nunito-bold text-center'],
  variants: {
    variant: {
      big: 'text-2xl',
      normal: 'text-xxl',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
})

type HighlightProps = VariantProps<typeof titleTv> & {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle, variant }: HighlightProps) {
  return (
    <View>
      <Text className={titleTv({ variant })}>{title}</Text>
      <Text className="font-nunito-regular text-sm text-center">
        {subtitle}
      </Text>
    </View>
  )
}
