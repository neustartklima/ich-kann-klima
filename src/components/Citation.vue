<script setup lang="ts">
import { computed } from "vue"
import { Citation } from "../citations/CitationsTypes"

const props = defineProps<{
  citation: Citation
  showInternals: boolean
}>()

const href = computed(() => props.citation.url.toString())
const title = computed(() => {
  const title = props.citation.title
  return title || props.citation.url.toString()
})
</script>

<template>
  <p>
    <span v-if="citation.authors">{{ citation.authors + citation.dateString() }}. </span>
    <a target="_blank" rel="noreferrer noopener" :href="href">"{{ title }}"</a>.
    <span v-if="citation.publisher">{{ citation.publisher }}. </span>
    <span v-if="citation.comment">Bemerkung: <span v-html="citation.comment" />. </span>
    <span v-if="showInternals && citation.internalComment">Internes: <span v-html="citation.internalComment" />. </span>
    <span v-if="citation.referringUrl"
      ><a target="_blank" rel="noreferrer noopener" :href="citation.referringUrl.toString()">Hier gefunden</a>.
    </span>
    <span v-if="citation.archiveUrl"
      ><a target="_blank" rel="noreferrer noopener" :href="citation.archiveUrl.toString()">Web Archiv Kopie</a>.
    </span>
    <span v-if="citation.localCopy"
      ><a target="_blank" rel="noreferrer noopener" :href="'/sources/' + citation.localCopy">Kopie</a>.
    </span>
  </p>
</template>

<style lang="scss" scoped></style>
