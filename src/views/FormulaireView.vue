<script>
    import CarteContact from '@/components/CarteContact.vue'
    import { useContactStore } from '../stores/contact'
    export default{
        name: 'FormContact',
        setup(){
            const contactStore = useContactStore()
            return {
                contactStore
            }
        },
        components: {
            CarteContact
        },
    
        data(){
            return{
                formContact: {
                    nom: '',
                    numero: ''
                }
            }
        },
        methods: {
            ajoutContact() {
                this.contactStore.ajoutContact(this.formContact)
                this.formContact = {
                    nom: '',
                    numero: ''
                }
                
            }
        }
    }
</script>

<template>
    <form @submit.prevent="ajoutContact()">
      <input type="text" placeholder="Nom" v-model="formContact.nom">
      <input type="text" placeholder="Numéro" v-model="formContact.numero">
      <button type="submit">Ajouter</button>
      <p class="error" v-if="formContact.nom.length < 3 && formContact.nom.length != 0 ">Le nom doit faire aux moins 3 caractères</p>
    </form>
</template>

<style>
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 15%;
}
</style>