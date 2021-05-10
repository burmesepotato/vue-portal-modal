<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="toggleModal">Open Modal</button>
    <base-modal v-if="isShowModal" @close="toggleModal" />

    <portal-target name="modal" />
  </div>
</template>

<script>
import BaseModal from './components/BaseModal.vue'

export default {
  name: 'App',
  components: { BaseModal },
  data: () => ({
    isShowModal: false,
  }),
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  @apply flex flex-col items-center;
}
</style>
