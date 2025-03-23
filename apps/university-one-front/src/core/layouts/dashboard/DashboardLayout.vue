<template>
  <v-app full-height>
    <v-app-bar app density="compact" justify-start elevation="1" color="primary">
      <v-app-bar-title>
        <AppLogo />
      </v-app-bar-title>
      <ToolbarLinks />
      <v-spacer />

      <LanguageSwitcher />
      <ThemeSwitcher />
    </v-app-bar>

    <v-main class="ma-1">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import AppLogo from '@/core/layouts/dashboard/AppLogo/AppLogo.vue'
  import LanguageSwitcher from '@/core/layouts/dashboard/LanguageSwitcher/LanguageSwitcher.vue'
  import ThemeSwitcher from '@/core/layouts/dashboard/ThemeSwitcher/ThemeSwitcher.vue'
  import ToolbarLinks from '@/core/layouts/dashboard/ToolbarLinks/ToolbarLinks.vue'
</script>

<style lang="scss" scoped>
  :deep(.v-toolbar-title) {
    flex: none;
    font-size: 1.3rem !important;
  }
</style>
