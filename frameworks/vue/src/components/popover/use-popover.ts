import * as popover from '@zag-js/popover'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/vue'
import { type ComputedRef, computed, ref } from 'vue'
import { useEnvironmentContext } from '../../providers'
import type { EmitFn, Optional } from '../../types'
import { useId } from '../../utils'
import type { RootEmits } from './popover.types'

export interface UsePopoverProps extends Omit<Optional<popover.Context, 'id'>, 'open.controlled'> {
  /**
   * The initial open state of the popover.
   */
  defaultOpen?: popover.Context['open']
  'onUpdate:open'?: (open: popover.OpenChangeDetails['open']) => void
}

export interface UsePopoverReturn extends ComputedRef<popover.Api<PropTypes>> {}

export const usePopover = (props: UsePopoverProps, emit: EmitFn<RootEmits>) => {
  const getRootNode = useEnvironmentContext()
  const context = ref(props)

  const [state, send] = useMachine(
    popover.machine({
      ...context.value,
      id: context.value.id || useId().value,
      open: props.open ?? props.defaultOpen,
      getRootNode,
      'open.controlled': props.open !== undefined,
      onOpenChange: (details) => {
        emit('openChange', details)
        emit('update:open', details.open)
      },
      onEscapeKeyDown: (details) => {
        emit('escapeKeyDown', details)
      },
      onFocusOutside: (details) => {
        emit('focusOutside', details)
      },
      onInteractOutside: (details) => {
        emit('interactOutside', details)
      },
      onPointerDownOutside: (details) => {
        emit('pointerDownOutside', details)
      },
    }),
    { context },
  )

  return computed(() => popover.connect(state.value, send, normalizeProps))
}