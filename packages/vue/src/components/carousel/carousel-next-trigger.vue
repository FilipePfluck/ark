<script lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import type { PolymorphicProps } from '../factory'

export interface CarouselNextTriggerBaseProps extends PolymorphicProps {}
export interface CarouselNextTriggerProps
  extends CarouselNextTriggerBaseProps,
    /**
     * @vue-ignore
     */
    ButtonHTMLAttributes {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useCarouselContext } from './use-carousel-context'

defineProps<CarouselNextTriggerProps>()
const carousel = useCarouselContext()
</script>

<template>
  <ark.button v-bind="carousel.getNextTriggerProps()" :as-child="asChild">
    <slot />
  </ark.button>
</template>
