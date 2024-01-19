<template>
    <div class="clavier">
      <div>
        <input type="text" v-model="inputValue">
      </div>
      
      
      <div>
        <button @click="() => appendToInput('1')">1</button>
        <button @click="() => appendToInput('2')">2</button>
        <button @click="() => appendToInput('3')">3</button>
      </div>
      <div>
        <button @click="() => appendToInput('4')">4</button>
        <button @click="() => appendToInput('5')">5</button>
        <button @click="() => appendToInput('6')">6</button>
      </div>
      <div>
        <button @click="() => appendToInput('7')">7</button>
        <button @click="() => appendToInput('8')">8</button>
        <button @click="() => appendToInput('9')">9</button>
      </div>
      <div>
        <button @click="() => appendToInput('*')">*</button>
        <button @click="() => appendToInput('0')">0</button>
        <button @click="() => appendToInput('#')">#</button>
      </div>
      
      <div>
        <button @click="appelerAvecNumero">Appeler</button>
      </div>
    </div>
</template>
  
<script>
import { useContactStore } from '../stores/contact';
  export default {
    data() {
      return {
        inputValue: '',
      };
    },
    methods: {
      appendToInput(value) {
        this.inputValue += value;
      },
      appelerAvecNumero() {
      const numero = this.inputValue;
      if (numero.trim() !== '') {
        const appel = {
          numero: numero,
          heure: new Date().toLocaleTimeString(),
        };
        useContactStore().ajoutAppel(appel);
        this.inputValue = ''; 
      }
    },
    },
  };
</script>
  
<style>
.clavier {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
  
button {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 5px;
    cursor: pointer;
}
  
input {
    width: 200px;
    height: 40px;
}
</style>
  
  