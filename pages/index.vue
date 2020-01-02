<template>
  <div class="page-index">
    <h2>page-index</h2>
    <ul>
      <li>
        <nuxt-link to="/another">page-another</nuxt-link>
      </li>
    </ul>
    <button @click="openModal">openModal</button>
  </div>
</template>

<script>
export default {
  methods: {
    async openModal() {
      await this.$store.dispatch('modal/openFirstModal')
    },
  },
}
</script>
