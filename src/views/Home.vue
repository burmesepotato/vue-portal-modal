<template>
  <div class="home">
    <button class="bg-green-500 text-white px-3 py-2" @click="toggleModal">
      Home Modal
    </button>

    <base-modal
      v-if="isShowModal"
      @close="toggleModal"
      :title="'Home Modal Title via prop'"
    >
      <template>
        <p>
          This is modal body content via slot. Press
          <strong
            ><code class="bg-green-100 px-1 py-0.5 rounded">esc</code></strong
          >
          to dismiss modal box.
        </p>
        <p>Now, time for good old lorem ipsum here and there.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          laudantium ut commodi voluptates quos nostrum.
        </p>
      </template>

      <template v-slot:footer>
        <button
          class="bg-purple-500 text-white px-3 py-2 mt-3 mr-0 w-full rounded-md shadow-sm sm:mt-0 sm:mr-3 sm:py-1.5 sm:w-auto"
          @click="toggleModal"
        >
          Footer button via slot
        </button>
      </template>
    </base-modal>
  </div>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue'
import modalControlMixin from '@/mixins/modalControl.mixin.js'

export default {
  name: 'Home',
  components: {
    BaseModal,
  },
  mixins: [modalControlMixin],
}
</script>
