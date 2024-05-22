import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: ['flex-1 rounded-md justify-center items-center'],
  variants: {
    variant: {
      success: 'bg-green-light',
      danger: 'bg-red-light',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
})

export type ButtonProps = TouchableOpacityProps &
  VariantProps<typeof button> & {
    title: string
  }

export function Button({
  variant,
  title,
  className = undefined,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity className="bg-gray-600 p-4 rounded-md" {...props}>
      <Text className="text-white text-center font-nunito-bold text-sm">
        {title}
      </Text>
    </TouchableOpacity>
  )
}
