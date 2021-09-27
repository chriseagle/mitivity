<template>
  <div class="modal bg-gray-800 bg-opacity-75 flex items-center justify-center">
    <div class="modal__inner rounded-lg bg-white">
      <div class="modal__header p-3 border-b border-gray-200">
        <h2 class="text-lg font-bold">{{ title }}</h2>
      </div>
      <div class="modal__content p-3 border-b border-gray-200">
        <slot></slot>
      </div>
      <div class="modal__controls flex justify-between p-3">
        <BaseButton type="button" level="secondary" @click="$emit('cancel')">Cancel</BaseButton>
        <BaseButton type="button" level="primary" @click="$emit(mutation)">Save</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'Modal',
  components: {
    BaseButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .modal {
    position:fixed;
    z-index:99;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    &__inner {
      width:90%;
      max-width:480px;
    }
  }
</style>
