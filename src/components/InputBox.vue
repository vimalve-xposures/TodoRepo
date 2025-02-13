<template>
  <div class="input-container">
    <input v-model="task" placeholder="Add your task" @keyup.enter="emitTask" />
    <button @click="emitTask">ADD</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const task = ref("");

    const emitTask = () => {
      if (task.value.trim() !== "") {
        emit("add-task", task.value);
        task.value = ""; // Clear input after adding
      }
    };

    return { task, emitTask };
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  margin-bottom: 10px;
  background-color: rgb(226, 224, 224);
  border-radius: 2rem;
  padding-left: 1rem;
}
input {
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: rgb(226, 224, 224);
  border-radius: 2rem;
  padding-block: 1rem;
}
button {
  background-color:blue;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 2rem;
  padding-inline: 1.5rem;
  padding-block: 1rem;
  font-weight: 600;
}
</style>
