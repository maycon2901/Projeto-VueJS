<template>
  <div id="Nav">
    <RouterLink to="/">
      <button id="butao">Home</button>
    </RouterLink>

    <RouterLink to="sobre">
      <button id="butao">Sobre</button>
    </RouterLink>

    <RouterLink to="fla">
      <button id="butao">Fla</button>
    </RouterLink>

    <div id="RouterView">
      <RouterView />
    </div>

  </div>
</template>

<script setup>

import { RouterView } from 'vue-router';

</script>

<style>
#butao {
  padding: 10px;
  margin: 3px;
  height: 50px;
  left: 80px;
}
</style>