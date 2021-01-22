<template>
    <div>
        <Login />
    </div>
</template>

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