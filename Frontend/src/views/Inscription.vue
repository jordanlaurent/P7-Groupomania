<template>
    <div>
        <Signup />
        <router-view/>
    </div>
</template>

<script>
import Signup from '../components/Signup.vue'
export default {
    name: 'Inscription',
     components:{
         Signup
     },
      created: function (){
    document.title = 'Groupomania - Inscription'
    document.querySelector('meta[name="Réseaux social de l entreprise groupomania"]').setAttribute('content','random')
  }
}
</script>