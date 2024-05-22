import { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'
import { tv, VariantProps } from 'tailwind-variants'

import { ArrowUpRight } from 'phosphor-react-native'

import colors from 'src/theme/colors'

const card = tv({
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

export type CardProps = ViewProps &
  VariantProps<typeof card> & {
    children?: ReactNode | undefined
    withArrow?: boolean
  }

export function Card({
  variant,
  className = undefined,
  children,
  withArrow = true,
  ...props
}: CardProps) {
  const arrowColor =
    variant === 'danger' ? colors['red-dark'] : colors['green-dark']

  return (
    <View className={card({ variant, className })} {...props}>
      {withArrow && (
        <View className="absolute right-2 top-2">
          <ArrowUpRight size={24} color={arrowColor} />
        </View>
      )}

      {children}
    </View>
  )
}
