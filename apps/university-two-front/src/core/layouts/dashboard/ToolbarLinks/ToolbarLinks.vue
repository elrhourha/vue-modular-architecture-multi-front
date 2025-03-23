<template>
  <v-btn
    v-for="toolbarLink in toolbarLinks"
    :active="toolbarLink.active"
    :key="toolbarLink.routeName"
    :to="{ name: toolbarLink.routeName }"
    elevation="0"
    variant="text"
    class="text-none"
    :ripple="false"
  >
    {{ toolbarLink.label }}
  </v-btn>
</template>
<script setup lang="ts">
  import { type Ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  type ToolbarLinkItem = {
    routeName: string
    active?: boolean
    label: string
  }

  const { t } = useI18n()

  const toolbarLinks: Ref<ToolbarLinkItem[]> = computed(() => [])
</script>
