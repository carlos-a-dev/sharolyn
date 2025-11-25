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
        :description="cert.description"
        orientation="horizontal"
        variant="ghost"
        :ui="{
          body: 'w-full',
          footer: 'w-full text-right'
        }"
        reverse
      >
        <template #description>
          <UAccordion
            :items="[{
              label: 'Description',
              content: cert.description
            }]"
          />
        </template>

        <template #footer>
          <NuxtLink
            :to="cert.url"
            target="_blank"
          >
            More
            <UIcon name="i-lucide-external-link" />
          </NuxtLink>
        </template>

        <NuxtImg
          :src="cert.img"
          class="max-w-xs max-h-30 mx-auto"
        />
      </UPageCard>
    </UPageList>
  </UPageSection>
</template>
