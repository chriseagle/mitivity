<template>
  <div class="task flex items-center bg-gray-50 py-2 px-4 my-4 border border-gray-300 rounded">
    <div class="left">
      <div class="task__date text-gray-500 text-xs">
        {{ startDate[1] }}/{{ startDate[0] }}/{{ startDate[2] }}
      </div>
      <div class="task__name text-gray-900 font-bold pt-1">
        {{ task.name }}
      </div>
    </div>
    <div class="right">
      <div class="task__time font-bold text-lg">
        {{ elaspedTime }}
      </div>
      <div class="task__controls ml-4">
        <BaseButton type="button" level="secondary-outline"
        @click="startTask" v-if="!taskRunning">Start Timer</BaseButton>
        <BaseButton type="button" level="secondary-outline"
        @click="stopTask" v-if="taskRunning">Stop Timer</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'SingleTask',
  components: {
    BaseButton,
  },
  data() {
    return {
      taskRunning: false,
    };
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    startDate() {
      const date = new Date(this.task.start);
      return [date.getMonth() + 1, date.getDate(), date.getFullYear()];
    },
    elaspedTime() {
      const fullHours = Math.floor(this.task.elapsed / 3600);
      const partialHours = (this.task.elapsed / 3600) - fullHours;
      const fullMinutes = Math.floor(partialHours * 60);
      const partialMinutes = partialHours * 60 - fullMinutes;
      const seconds = partialMinutes * 60;
      const theHours = `${fullHours}`;
      const theMins = `${fullMinutes}`;
      const theSeconds = `${Math.round(seconds)}`;
      return `${theHours.padStart(2, '0')}:${theMins.padStart(2, '0')}:${theSeconds.padStart(2, '0')}`;
    },
  },
  methods: {
    startTask() {
      this.$store.dispatch('stopTask');
      this.$store.dispatch('startTask', this.task.id);
      this.taskRunning = true;
    },
    stopTask() {
      this.taskRunning = false;
      this.$store.dispatch('stopTask');
    },
  },
};
</script>

<style lang='scss'>
  .task {
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    text-align:left;
    .right {
      margin-left:auto;
      display:flex;
      align-items:center;
    }
    &__date {
      width:100%;
    }
    &__time {
      width:100px;
      text-align:right;
    }
  }
</style>
