<template>
  <div class="hello">
    <button @click="handleClick">Click</button>
    <!-- <div v-bind:class="ClassName">What is going on here</div> -->
    <div>What is going on here</div>
    <div id="example-1">
      <button v-on:click="increment">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
  </div>
</template>

<script src="./PlayGround.js">
</script>
<style src="./PlayGround.css" scoped>
</style>