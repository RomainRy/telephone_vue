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

<style>

.formulaire{
    cursor: pointer;
}


</style>