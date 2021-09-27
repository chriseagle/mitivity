<template>
  <div class="px-4 py-2">
    <label class="block text-sm mb-1">{{ label }} </label>
    <input v-bind="$attrs"
    :value="modelValue"
    @input='$emit("update:modelValue", $event.target.value)'
    class="bg-white border border-gray-300
    focus:outline-none focus:border-green-500 block w-full p-2 rounded">
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss">

</style>
