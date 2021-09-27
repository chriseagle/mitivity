<template>
  <div class="home pt-4">
    <header class="flex items-center mb-8">
      <h1 class="text-xl font-bold m-0">My Tasks</h1>
      <div class="ml-auto">
        <BaseButton type="button"
        level="primary" @click="createTaskModal = !createTaskModal">Add Task</BaseButton>
        <teleport to="body">
          <Modal v-if="createTaskModal" title="Add Task"
          mutation="createTask" @create-task="createTask" @cancel="createTaskModal = false">
            <BaseInput type="text" label="Name" v-model="localTask.name" />
          </Modal>
        </teleport>
      </div>
    </header>
    <div v-for="task in tasks" :key="task.id">
      <SingleTask :task="task" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SingleTask from '@/components/SingleTask.vue';
import Modal from '@/components/Modal.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

export default {
  name: 'Home',
  components: {
    SingleTask,
    Modal,
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      localTask: {
        name: '',
      },
      createTaskModal: false,
    };
  },
  computed: {
    ...mapState({
      tasks: (state) => state.tasks,
    }),
  },
  methods: {
    createTask() {
      this.createTaskModal = false;
      this.$store.commit('createTask', this.localTask);
      this.localTask.name = '';
    },
  },
};
</script>
