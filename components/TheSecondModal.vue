<template>
  <modal name="the-second-modal">
    <div class="the-second-modal">
      <strong>the-second-modal</strong>
      <button @click="onClick">&times;&ensp;close</button>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$modal.pop()
      this.$router.push('/')
    },
  },
}
</script>
