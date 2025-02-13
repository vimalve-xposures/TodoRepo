<template>
  <div class="todo-container">
    <div class="head">
      <h2>To-Do List</h2>
      <img src="../assets/images/icon.png" alt="icon" />
    </div>
    
    <!-- Input Box Component -->
    <InputBox @add-task="addTask" />

    <!-- Task List Component -->
    <TaskList :tasks="tasks" @remove-task="removeTask" />
  </div>
</template>

<script>
import { ref } from "vue";
import InputBox from "@/components/InputBox.vue";
import TaskList from "@/components/TaskList.vue"; // Import the new component

export default {
  components: { InputBox, TaskList },
  setup() {
    const tasks = ref([]);

    const addTask = (taskText) => {
      tasks.value.unshift({ text: taskText, completed: false });
    };

    const removeTask = (index) => {
      tasks.value.splice(index, 1);
    };

    return { tasks, addTask, removeTask };
  },
};
</script>

<style lang="scss">
.todo-container {
  max-width: 400px;
  max-height: 500px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  border: 1px solid grey;
  margin-top: 10%;
  padding-inline: 2rem;
  padding-block: 2rem;
  border-radius: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.head {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-bottom: 1rem;
}
img {
  height: 3rem;
  width: 3rem;
}
</style>
