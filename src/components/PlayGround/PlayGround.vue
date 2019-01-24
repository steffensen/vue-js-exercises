<template>
  <div class="hello">

    <!-- v-bind -->
    <div v-bind:class="backgroundClassName">What is going on here </div>

    <!-- v-on -->
    <div id="example-1">
      <button v-on:click="handleClick">Click This</button>
    </div>

    <!-- v-once -->
   <div v-once> this will only appear once: {{ message }}</div>
   <div> this will only appear once: {{ message }}</div>

   <!-- V-html -->
   <div v-html="anchorTag"></div>

   <!-- V-model -->
   <label for="firstName">First Name</label>
   <input type="text" name="firstName" v-model="nameInput">

   <!-- computed -->
   <div>{{ message }} => revered: {{ reversedMessage }}</div>

   <!-- Watch -->
      <input type="text" name="firstName" v-model="nameInput">








  </div>


</template>

<script src="./PlayGround.js">
</script>
<style src="./PlayGround.css" scoped>
</style>
