<template>
    <span v-if="error" class="error">{{ error }}</span>
</template>
  
  <script>
  export default {
    name: 'ErrorDisplay',
    props: {
      error: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
    font-size: 0.9em;
    margin-left: 1em;
  }
  </style>
  