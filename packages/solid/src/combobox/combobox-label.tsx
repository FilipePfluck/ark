import { mergeProps } from '@zag-js/solid'
import { ark, type HTMLArkProps } from '../factory'
import { useComboboxContext } from './combobox-context'

export type ComboboxLabelProps = HTMLArkProps<'label'>

export const ComboboxLabel = (props: ComboboxLabelProps) => {
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(() => combobox().labelProps, props)

  return <ark.label {...mergedProps} />
}
