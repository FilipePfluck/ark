<script setup lang="ts">
import { Field } from '../'
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <Field.Textarea />
    <Field.HelperText>Some additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
