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

  type ToolbarLinkItem = {
    routeName: string
    active?: boolean
    label: string
  }

  const toolbarLinks: Ref<ToolbarLinkItem[]> = computed(() => [])
</script>
