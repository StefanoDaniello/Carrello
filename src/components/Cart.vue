<template>
    <div>
      <h1>Carrello</h1>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.price }}€
          <button @click="removeFromCart(item.id)">Rimuovi</button>
        </li>
      </ul>
      <p v-if="cart.length === 0">Il carrello è vuoto</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cart'])
    },
    methods: {
      ...mapActions(['removeFromCart'])
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
    border-bottom: 1px solid #ddd;
  }
  
  button {
    background-color: #ff4d4f;
    color: white;
    border: none;
    padding: 0.5em;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #d43f3a;
  }
  </style>
  