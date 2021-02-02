<template>
  <div id="Mur">
    <Profil id="profil"/>
  <div id="view">
    <Amis class="amisdesign"/>
    <div id="left">
    <Addmessage/> 
    <Post/>
    </div>
    </div>
  </div>
</template>

<script>
import Profil from '@/components/Profil.vue'
import Addmessage from '@/components/Addmessage.vue'
import Post from '@/components/Post.vue' 
import Amis from '@/components/Amis.vue' 

export default {
  name: 'Mur',
  components: {
    Profil,
    Addmessage,
    Post,
    Amis,
  },
  created: function (){
    document.title = 'Groupomania - Mur'
  }
}
//var textPost = document.querySelector(".form-control")
//var inputPost = document.querySelector('.form')
//var ViewPost = document.querySelector('.notes')

//var Postuser = textPost.nodeValue
//console.log(Postuser)

</script>
<style lang="scss">
#app{ padding: 0px;}
#Mur {
  position: inherit; top: 0; bottom: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 text-decoration: none;
 background: linear-gradient(70deg, rgb(242, 242, 247), rgba(216, 216, 216, 0.466));
}

@media (min-width: 1920px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; padding-top: 0; } 
.amisdesign{margin-left: 350px;}
#left {margin-right: 20%;margin-left: 10%;}
#profil{margin-bottom: 7%;}
}
@media (max-width: 1920px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; padding-top: 0;  } 
.amisdesign{margin-left: 150px;}
#left {margin-right: 15%;margin-left: 10%;}
};
@media (max-width: 1360px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; padding-top: 0; } 
.amisdesign{margin-left: 125px;}
#left {margin-right: 15%;}
#profil{margin-bottom: 7%;}
};
@media (max-width: 720px) {
#view{display: flex;flex-direction: column;}
#left{margin: 0;}
.amisdesign{margin-left: 0; }
}
</style>
