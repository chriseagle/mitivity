import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    tasks: [],
    intervalId: null,
  },
  mutations: {
    createTask(state, task) {
      const newTask = {
        id: uuidv4(),
        start: Date.now(),
        elapsed: 0,
        ...task,
      };
      state.tasks.unshift(newTask);
    },
  },
  actions: {
    startTask({ state }, id) {
      const theTask = state.tasks.filter((task) => task.id === id)[0];
      state.intervalId = setInterval(() => {
        theTask.elapsed += 1;
      }, 1000);
    },
    stopTask({ state }) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    },
  },
});
