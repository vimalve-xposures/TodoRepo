<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
       <div class="layout">
        <RouterLink to="/">singlepage</RouterLink> |
        <RouterLink to="component">Componentpage</RouterLink>
       </div>
      <RouterView/>
</template>

<style>
.layout{
  text-align: center;
  padding-top: 1rem;
}
</style>


