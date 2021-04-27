<template>
  <transition name="center-modal">
    <div
      class="center-modal-mask"
      @click="close"
      v-show="show"
    >
      <div
        class="center-modal-container"
        @click.stop
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "center-pane-modal",
  props: ["show"],
  mounted () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  },
  methods: {
    /** To close the modal
     * @event -
     * @type {method}
     */
    close: function () {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.center-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}
.center-modal-container {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
  height: auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Lato, sans-serif;
}

/*
 * The following styles are auto-applied to elements with
 * transition="center-modal" when their visibility is toggled
 * by Vue.js.
 *
 */

.center-modal-enter-from {
  opacity: 0;
}

.center-modal-leave-active {
  opacity: 0;
}

.center-modal-enter-from .center-modal-container,
.center-modal-leave-active .center-modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>