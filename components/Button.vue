<!-- Button.vue -->
<template>
  <button
    type="button"
    @click="handleClick"
    class="p:13 cursor:pointer bg:black:hover color:white:hover mr:12"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
