<template>
  <div>
    <h1>{{ t('todos.todosList.title') }}</h1>

    <v-data-table-server
      :items="todos || []"
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
    <BaseButton label="This Button from shared ui lib in mutli front monorepo" color="secondary" />
  </div>
</template>

<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query'
  import { BaseButton } from 'ui-components'
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { fetchUsers } from '@/modules/todos/api/todos.api'

  const { t } = useI18n()
  const page = ref(1)
  const limit = ref(5)

  const { data: todos, isFetching } = useQuery({
    queryKey: computed(() => ['todos', { page: page.value, limit: limit.value }]),
    queryFn: () => fetchUsers({ page: page.value, limit: limit.value }),
  })

  const headers = computed(() => [
    { title: t('todos.todosList.table.header.id'), key: 'id' },
    { title: t('todos.todosList.table.header.title'), key: 'title' },
    { title: t('todos.todosList.table.header.userId'), key: 'userId' },
    { title: t('todos.todosList.table.header.completed'), key: 'completed' },
  ])

  const onOptionsChange = (options: { page: number; itemsPerPage: number }) => {
    page.value = options.page
    limit.value = options.itemsPerPage
  }
</script>

<style scoped></style>
