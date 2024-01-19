<script>
import { useContactStore } from '../stores/contact';

export default {
  setup() {
    const contactStore = useContactStore();
    const appels = contactStore.historique;

    return {
      appels,
    };
  },
};
</script>

<template>
  <div class="home">
    <h2>Liste des Appels</h2>
    <div v-for="appel in appels" :key="appel.numero">
      {{ appel.numero }} - {{ appel.heure }}
    </div>
  </div>
</template>

<style>

@media (min-width: 1024px) {
  .nav {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>
