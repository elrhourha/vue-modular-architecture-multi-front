<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-translate" density="comfortable" v-bind="{ ...props, ...$attrs }" />
    </template>
    <v-list min-width="2rem">
      <v-list-item
        :active="currentLocal === locale"
        v-for="{ locale, flag } in localesWithFlagIcon"
        :key="locale"
        @click="() => switchLocale(locale)"
        density="compact"
      >
        <v-list-item-title>
          <span>{{ flag }} - </span>
          <span class="text-body-1">
            {{ locale }}
          </span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
  import getUnicodeFlagIcon from 'country-flag-icons/unicode'
  import { type ComputedRef, computed } from 'vue'
  import { type Locale, useI18n } from 'vue-i18n'

  const { availableLocales, locale: currentLocal } = useI18n()

  const localesWithFlagIcon: ComputedRef<{ locale: string; flag: string }[]> = computed(() =>
    availableLocales.map((availableLocale: Locale) => ({
      locale: availableLocale,
      flag: getUnicodeFlagIcon(availableLocale === 'en' ? 'us' : availableLocale),
    })),
  )

  function switchLocale(newLocale: Locale) {
    currentLocal.value = newLocale
  }
</script>

<style scoped lang="scss"></style>
