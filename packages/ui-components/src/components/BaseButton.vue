<script setup lang="ts">
export type ButtonProps ={
  label: string
  color?: 'primary' | 'secondary'
}
const props = defineProps<ButtonProps>()
</script>

<template>
<v-btn :color="props.color" class="text-none">
  {{props.label}}
</v-btn>
</template>

<style scoped>

</style>
