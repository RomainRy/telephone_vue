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
    <div class="appel" v-for="appel in appels" :key="appel.numero">
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

h2{
  color: hsla(160, 100%, 37%, 1);
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.appel {
  padding: 20px;
  border-bottom: 2px solid hsla(160, 100%, 37%, 1);
}
</style>
