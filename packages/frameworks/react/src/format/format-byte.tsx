import { formatBytes } from '@zag-js/file-utils'
import { useMemo } from 'react'
import { useLocaleContext } from '../locale'

export interface FormatByteProps {
  /**
   * The unit granularity to display
   */
  unit?: 'bit' | 'byte'
  /**
   * The unit display
   */
  unitDisplay?: 'long' | 'short' | 'narrow'
  /**
   * The byte size to format
   */
  value: number
}

export const FormatByte = (props: FormatByteProps) => {
  const { value, ...intlOptions } = props
  const { locale } = useLocaleContext()
  const text = useMemo(() => formatBytes(value, locale, intlOptions), [value, locale, intlOptions])
  return <>{text}</>
}

FormatByte.displayName = 'FormatByte'