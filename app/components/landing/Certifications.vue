<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.certifications.title"
    :ui="{
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      container: 'px-0 !pt-0'
    }"
  >
    <UPageList>
      <UPageCard
        v-for="cert in page.certifications.items"
        :key="cert.title"
        :title="cert.title"
        :to="cert.url"
        target="_blank"
        orientation="horizontal"
        variant="ghost"
      >
        <NuxtImg
          :src="cert.img"
          class="max-w-xs mx-auto"
        />
      </UPageCard>
    </UPageList>
  </UPageSection>
</template>
