<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Citation } from "../citations/CitationsTypes"

export default defineComponent({
  props: {
    citation: { type: Object as PropType<Citation>, required: true },
    showInternals: { type: Boolean, default: false },
  },
  computed: {
    sep(): string {
      return ". "
    },
    href(): string {
      return this.citation.url.toString()
    },
    title(): string {
      const title = this.citation.title
      return title ? title : this.citation.url.toString()
    },
  },
})
</script>

<template>
  <p>
    <span v-if="citation.authors">{{ citation.authors + citation.dateString() }}{{ sep }}</span>
    <span
      ><a :href="href">"{{ title }}"</a>{{ sep }}</span
    >
    <span v-if="citation.publisher">{{ citation.publisher }}{{ sep }}</span>
    <span v-if="citation.comment">Bemerkung: <span v-html="citation.comment" />{{ sep }}</span>
    <span v-if="showInternals && citation.internalComment"
      >Internes: <span v-html="citation.internalComment" />{{ sep }}</span
    >
    <span v-if="citation.referringUrl"><a :href="citation.referringUrl.toString()">Found here</a>{{ sep }}</span>
    <span v-if="citation.archiveUrl"><a :href="citation.archiveUrl.toString()">Archive link</a>{{ sep }}</span>
    <span v-if="citation.localCopy"><a :href="'/assets/sources/' + citation.localCopy">Local copy</a>{{ sep }}</span>
  </p>
</template>

<style lang="scss" scoped></style>
