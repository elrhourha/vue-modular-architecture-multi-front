<template>
  <v-btn
    @click="toggleTheme"
    aria-label="Toggle theme"
    :icon="isDarkTheme ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  const isDarkTheme = computed(() => theme.global.current.value.dark)

  const toggleTheme = () => {
    const newTheme = isDarkTheme.value ? 'light' : 'dark'
    theme.global.name.value = newTheme
  }
</script>
