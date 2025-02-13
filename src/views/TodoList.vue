<template>
    <div class="todo-container">
      <div class="head">
        <h2>To-Do List</h2>
        <img src="../assets/images/icon.png" alt="" srcset="">
      </div>
      <div class="input-container">
        <input v-model="newTask" placeholder="Add your task" @keyup.enter="addTask" />
        <button @click="addTask">ADD</button>
      </div>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <label class="custom-checkbox">
            <input type="checkbox" v-model="task.completed" />
            <span class="checkmark"></span>
          </label>
          <span :class="{ completed: task.completed }">{{ task.text }}</span>
          <p class="del" @click="removeTask(index)">X</p>
        </li>
      </ul>
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
  
      const removeTask = (index) => {
        tasks.value.splice(index, 1);
      };
  
      return { newTask, tasks, addTask, removeTask };
    }
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
    &::-webkit-scrollbar{
        display: none;
    }
  }
  .head{
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-bottom: 1rem;
  }
  img{
    height: 3rem;
    width: 3rem;
  }
  .input-container {
    display: flex;
    margin-bottom: 10px;
    background-color: rgb(226, 224, 224);
    border-radius: 2rem;
    padding-left: 1rem;

  }
  h2{
    font-weight: 600;
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
  
  /* Styling the checkbox */
  .custom-checkbox {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  
  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  .del{
    color: grey;
    font-size: 1.3rem;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  /* Checkmark when checked */
  .custom-checkbox input:checked + .checkmark {
    background-color: #ff5f5f;
    border-color: #ff5f5f;
  }
  
  .custom-checkbox input:checked + .checkmark::after {
    content: '✔';
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
  
  ul {
    list-style: none;
    padding: 0;

  }
  
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  