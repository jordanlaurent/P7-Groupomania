<template>

    <router-view/>

</template>
<script>

export default {

      created: function (){
    document.title = 'Groupomania - Acceuil'
    document.querySelector('meta[name="Réseaux social de l entreprise groupomania"]').setAttribute('content','random')
  }
}
</script>

