<template>
  <div class="cursor-pointer" @click="() => {}">
    <v-icon alt="App Logo" class="shrink mr-2" size="x-small">mdi-sync</v-icon>
    <span class="pr-5">{{ t('header.title') }}</span>
  </div>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>
