<template>
  <button v-bind="$attrs" :class="classes"><slot></slot></button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    level: {
      type: String,
      required: true,
      default: 'primary',
    },
  },
  computed: {
    classes() {
      if (this.level === 'primary') {
        return 'py-2 px-4 text-white bg-green-500 font-normal text-sm rounded-md';
      }
      if (this.level === 'secondary') {
        return 'py-2 px-4 text-black bg-gray-300 font-normal text-sm rounded-md';
      }
      if (this.level === 'secondary-outline') {
        return 'py-2 px-4 text-black bg-white border border-gray-300 font-normal text-sm rounded-md';
      }
      return '';
    },
  },
};
</script>

<style lang="scss">

</style>
