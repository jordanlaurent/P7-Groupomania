<template>
    <div id="Connexion">
      <Login/>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
    name: 'Connexion',
    components:{
        Login
    },
      created: function (){
    document.title = 'Groupomania'
    document.querySelector('meta[name="Réseaux social de l entreprise groupomania"]').setAttribute('content','random')
  }
}
</script>