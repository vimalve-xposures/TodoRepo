<template>
    <div class="input-container">
        <input v-model="newTask" placeholder="Add your task" @keyup.enter="addTask" />
        <button @click="addTask">ADD</button>
    </div>
</template>

<script>
 import { ref } from "vue";
  
  export default {
    setup() {
      const newTask = ref("");
      const tasks = ref([
        // { text: "Learn JavaScript projects", completed: false },
        // { text: "Make a to-do list app", completed: false },
        // { text: "Host it on an online server", completed: true },
        // { text: "Link it to your resume", completed: false },
        // { text: "Get a software job", completed: false }
      ]);
  
      const addTask = () => {
        if (newTask.value.trim() !== "") {
          tasks.value.unshift({ text: newTask.value, completed: false });
          newTask.value = "";
        }
      };
  
      return { newTask, tasks, addTask, removeTask };
    }
  };
</script>

<style lang="scss">
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
    background-color: #ff5f5f;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding-inline: 1.5rem;
    padding-block: 1rem;
    border-radius: 2rem;
    font-weight: 600;
  }
</style>