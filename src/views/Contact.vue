<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {
  @Prop({ default: 'This is an contact page' }) msg!: string
}
</script>
