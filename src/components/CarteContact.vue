<script>
export default {
    name: 'CarteContact',
    props: [
        'contact'
    ],
}
</script>

<template>
    <div>
        <h2>{{ contact.nom }}</h2>
        <p>{{ contact.numero }}</p>
    </div>
</template>