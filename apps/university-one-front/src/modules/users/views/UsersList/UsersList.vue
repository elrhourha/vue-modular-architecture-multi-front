<template>
  <div>
    <h1>{{ t('users.usersList.title') }}</h1>

    <v-data-table-server
      :items="users || []"
      :headers="headers"
      items-length="10"
      :page="page"
      :loading="isFetching"
      @update:options="onOptionsChange"
      v-model:items-per-page="limit"
    >
      <template #loading>
        <v-progress-linear indeterminate></v-progress-linear>
      </template>
    </v-data-table-server>
    <v-row no-gutters>
      <BaseButton label="This Button from shared ui lib in mutli front monorepo" color="primary" />
    </v-row>
    <v-card>
      <v-card-title
        >Eslint will throw an error it the image bellow is rendered without alt</v-card-title
      >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        height="300"
        alt="Vue.js_Logo_2"
      />
    </v-card>
  </div>
</template>

<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query'
  import { BaseButton } from 'ui-components'
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { fetchUsers } from '@/modules/users/api/users.api'

  const { t } = useI18n()
  const page = ref(1)
  const limit = ref(5)

  const { data: users, isFetching } = useQuery({
    queryKey: computed(() => ['users', { page: page.value, limit: limit.value }]),
    queryFn: () => fetchUsers({ page: page.value, limit: limit.value }),
  })

  const headers = computed(() => [
    { title: t('users.usersList.table.header.id'), key: 'id' },
    { title: t('users.usersList.table.header.name'), key: 'name' },
    { title: t('users.usersList.table.header.username'), key: 'username' },
    { title: t('users.usersList.table.header.email'), key: 'email' },
  ])

  const onOptionsChange = (options: { page: number; itemsPerPage: number }) => {
    page.value = options.page
    limit.value = options.itemsPerPage
  }
</script>

<style scoped></style>
