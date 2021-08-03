<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Citation } from "../citations/CitationsTypes"

export default defineComponent({
  props: {
    citation: { type: Object as PropType<Citation>, required: true },
    showInternals: { type: Boolean, default: false },
  },
  computed: {
    href(): string {
      return this.citation.url.toString()
    },
    title(): string {
      const title = this.citation.title
      return title || this.citation.url.toString()
    },
  },
})
</script>

<template>
  <p>
    <span v-if="citation.authors">{{ citation.authors + citation.dateString() }}. </span>
    <a :href="href">"{{ title }}"</a>.
    <span v-if="citation.publisher">{{ citation.publisher }}. </span>
    <span v-if="citation.comment">Bemerkung: <span v-html="citation.comment" />. </span>
    <span v-if="showInternals && citation.internalComment">Internes: <span v-html="citation.internalComment" />. </span>
    <span v-if="citation.referringUrl"><a :href="citation.referringUrl.toString()">Hier gefunden</a>. </span>
    <span v-if="citation.archiveUrl"><a :href="citation.archiveUrl.toString()">Web Archiv Kopie</a>. </span>
    <span v-if="citation.localCopy"><a :href="'/assets/sources/' + citation.localCopy">Kopie</a>. </span>
  </p>
</template>

<style lang="scss" scoped></style>
