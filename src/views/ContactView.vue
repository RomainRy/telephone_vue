<script>
import CarteContact from '@/components/CarteContact.vue'
import FormContact from '@/components/FormContact.vue'
import { useContactStore } from '../stores/contact'

  export default {
    name: 'ContactView',
    setup(){
      const contactStore = useContactStore();
      return {
        contactStore
      }
    },
    components: {
      CarteContact,
      FormContact,
    },
    computed: {
      contacts() {
        return this.contactStore.contacts;
      }
    },
    data() {
      return {
      }
    },
        
    methods: {
      ajoutContact(contact) {
        this.contacts.push(contact)
      }
    }
  }
</script>

<template>
  <div class="contact-view">
    <FormContact />
    <div v-for="contact in contacts" :key="contact.nom">
      <CarteContact :contact="contact" />
    </div>
  </div>
</template>

<style>
.contact-view {
  min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

nav{
  display: flex;
}
</style>
