import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import type { UseTreeViewReturn } from './use-tree-view'
import { TreeViewProvider } from './use-tree-view-context'

interface RootProviderProps {
  value: UseTreeViewReturn
}

export interface TreeViewRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface TreeViewRootProviderProps
  extends HTMLProps<'div'>,
    TreeViewRootProviderBaseProps {}

export const TreeViewRootProvider = forwardRef<HTMLDivElement, TreeViewRootProviderProps>(
  (props, ref) => {
    const [{ value: treeView }, localProps] = createSplitProps<RootProviderProps>()(props, [
      'value',
    ])
    const mergedProps = mergeProps(treeView.getRootProps(), localProps)

    return (
      <TreeViewProvider value={treeView}>
        <ark.div {...mergedProps} ref={ref} />
      </TreeViewProvider>
    )
  },
)

TreeViewRootProvider.displayName = 'TreeViewRootProvider'
