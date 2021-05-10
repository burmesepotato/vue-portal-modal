<template>
  <portal to="modal">
    <transition name="fade">
      <div
        class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          class="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="modal__content">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div class="modal__header">
                <h3
                  class="text-lg leading-6 font-semibold text-green-500"
                  id="modal-headline"
                >
                  {{ title }}
                </h3>

                <button @click="handleClose">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="mt-2">
                <slot></slot>
              </div>
            </div>
          </div>
          <div class="modal__footer">
            <span
              class="mt-3 flex items-start w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="modal__footer-cancel"
                @click="handleClose"
              >
                Cancel
              </button>
            </span>

            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  created() {
    document.addEventListener('keyup', this.onClose)
  },
  destroyed() {
    document.removeEventListener('keyup', this.onClose)
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    onClose(event) {
      // Escape key
      if (event.keyCode === 27) {
        this.handleClose()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/component/baseModal.scss';
</style>
