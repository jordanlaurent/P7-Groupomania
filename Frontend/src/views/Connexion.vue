<template>
    <div id="connexion">
        <Login />
    </div>
</template>
<style>
#connexion{ position: inherit; top: 0; bottom: 0; padding: 0;margin: 0;background: linear-gradient(70deg, rgb(40, 40, 151), rgb(160, 14, 39));}
</style>

<script>
import Login from '@/components/Login.vue'
export default {
    name: 'Connexion',
     components:{
         Login
     },
      created: function (){
    document.title = 'Groupomania - Connexion'
  }
}
</script>