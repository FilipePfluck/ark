import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { useMenuContext } from './menu-context'
import { type UseMenuReturn } from './use-menu'

export interface MenuIndicatorProps extends HTMLArkProps<'div'> {}

export const MenuIndicator = forwardRef<HTMLDivElement, MenuIndicatorProps>((props, ref) => {
  const api = useMenuContext() as UseMenuReturn['api']
  const mergedProps = mergeProps(api?.indicatorProps ?? {}, props)

  return <ark.div {...mergedProps} ref={ref} />
})

MenuIndicator.displayName = 'MenuIndicator'