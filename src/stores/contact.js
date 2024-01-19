import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
    state: () => ({
      contacts: [
        {
            nom: 'Romain',
            numero: '06 06 06 06 06'
        },
        {
            nom: 'Louis',
            numero: '07 07 07 07 07'
        },
        {
            nom: 'Marc ',
            numero: '08 08 08 08 08'
        },
      ],
      historique: [],
    }),
    actions: {
        ajoutContact(contact) {
          this.contacts.push(contact);
        },
        ajoutAppel(appel) {
            this.historique.push(appel); 
          },
      },
  });