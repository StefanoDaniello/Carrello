<!-- components/Home.vue -->
<template>
  <div>
    <h1>Prodotti</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}€
        <input type="number" v-model.number="product.quantity" min="1" max="10" @input="clearError(product.id)" />
        <span v-if="product.quantity > 10" class="error"> Quantità non consentita</span>
        <span v-if="product.error" class="warning">{{ product.error }}</span>
        <button @click="addToCart(product)" :disabled="product.quantity > 10">Aggiungi al carrello</button>
      </li>
    </ul>

    <h1>Carrello</h1>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - {{ item.price }}€ x {{ item.quantity }}
        <span v-if="item.quantity === 10" class="warning"> Quantità massima raggiunta</span>
        <button @click="removeFromCart(item.id)">Rimuovi</button>
      </li>
    </ul>
    <p v-if="cart.length === 0">Il carrello è vuoto</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Prodotto 1', price: 10, quantity: 1, error: null },
        { id: 2, name: 'Prodotto 2', price: 20, quantity: 1, error: null },
        { id: 3, name: 'Prodotto 3', price: 30, quantity: 1, error: null }
      ]
    };
  },
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
    addToCart(product) {
      if (product.quantity <= 10) {
        const cartItem = this.cart.find(item => item.id === product.id);
        const newQuantity = cartItem ? cartItem.quantity + product.quantity : product.quantity;
        if (newQuantity <= 10) {
          this.$store.dispatch('addToCart', { ...product, quantity: product.quantity });
          product.error = null; // Clear error if add to cart is successful
        } else {
          product.error = 'Quantità massima superata per questo prodotto';
        }
      } else {
        product.error = 'Quantità massima superata per questo prodotto';
      }
    },
    clearError(productId) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.error = null;
      }
    }
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
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  border-bottom: 1px solid #ddd;
}

input[type="number"] {
  width: 60px;
  margin-right: 1em;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5em;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #36a374;
}

.error {
  color: red;
  font-size: 0.9em;
  margin-left: 1em;
}

.warning {
  color: orange;
  font-size: 0.9em;
  margin-left: 1em;
}

h1 {
  margin-top: 2em;
}
</style>

  
  
  