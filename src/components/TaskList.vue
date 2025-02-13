<template>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <label class="custom-checkbox">
          <input type="checkbox" v-model="task.completed" />
          <span class="checkmark"></span>
        </label>
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <p class="del" @click="$emit('remove-task', index)">X</p>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array,
    },
    emits: ["remove-task"],
  };
  </script>
  
  <style lang="scss">
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
  .del {
    color: grey;
    font-size: 1.3rem;
    cursor: pointer;
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
  .custom-checkbox input:checked + .checkmark {
    background-color: #ff5f5f;
    border-color: #ff5f5f;
  }
  .custom-checkbox input:checked + .checkmark::after {
    content: "✔";
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
  </style>
  