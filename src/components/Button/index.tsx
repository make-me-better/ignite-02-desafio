import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { tv, VariantProps } from 'tailwind-variants'
import { MaterialIcons } from '@expo/vector-icons'
import colors from 'src/theme/colors'

const button = tv({
  base: [
    'p-4 rounded-md border-gray-200 border flex flex-row items-center justify-center',
  ],
  variants: {
    variant: {
      primary: 'bg-gray-200',
      outline: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

const text = tv({
  base: ['text-center font-nunito-bold text-sm'],
  variants: {
    variant: {
      primary: 'text-white',
      outline: 'text-gray-700',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = TouchableOpacityProps &
  VariantProps<typeof button> & {
    title?: string
    icon?: keyof typeof MaterialIcons.glyphMap
  }

export function Button({
  variant,
  title,
  className = undefined,
  icon,
  ...props
}: ButtonProps) {
  const iconColor = variant === 'primary' ? 'white' : colors['gray-700']
  return (
    <TouchableOpacity className={button({ variant, className })} {...props}>
      {icon && <MaterialIcons name={icon} size={20} color={iconColor} />}
      <Text className={text({ variant })}>{title ?? ''}</Text>
    </TouchableOpacity>
  )
}
