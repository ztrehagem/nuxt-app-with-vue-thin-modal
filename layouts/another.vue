<template>
  <div class="layout-another">
    <h1>layout-another</h1>
    <nuxt />
    <TheFirstModal />
    <TheSecondModal />
    <modal-portal />
  </div>
</template>

<script>
import TheFirstModal from '~/components/TheFirstModal.vue'
import TheSecondModal from '~/components/TheSecondModal.vue'

export default {
  components: {
    TheFirstModal,
    TheSecondModal,
  },
}
</script>
