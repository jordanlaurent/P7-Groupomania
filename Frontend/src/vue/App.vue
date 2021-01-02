<template>
  <div id="app">
        <router-link to="{name:'Connexion'}"> lien </router-link>
        <router-view></router-view>
    <Header class="headerdesign"/>
  <div id="view">
    <Profil class="profildesign" msg="Welcome to Your Vue.js App"/>
    <div>
    <Addmessage/> 
    <Post/>
    </div>
    <Amis class="amisdesign"/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Profil from '../components/Profil.vue'
import Addmessage from '../components/Addmessage.vue'
import Post from '../components/Post.vue' 
import Amis from '../components/Amis.vue' 

export default {
  name: 'App',
  components: {
    Header,
    Profil,
    Addmessage,
    Post,
    Amis
  },
  created: function (){
    document.title = 'Groupomania'
    document.querySelector('meta[name="Réseaux social de l entreprise groupomania"]').setAttribute('content','random')
  }
}
</script>
<style lang="scss">
.headerdesign{background-color:#2c3e50;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 text-decoration: none;
 background: linear-gradient(70deg, rgb(242, 242, 247), rgba(216, 216, 216, 0.466));
}

@media (min-width: 1920px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; margin-top: 4%; } 
.profildesign {width:20%;margin-right: 150px; height: 60%; }
.amisdesign{margin-left: 100px;width: 20%;}
}
@media (max-width: 1920px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; margin-top: 4%; } 
.profildesign {width:40%;margin-right: 50px; height: 60%; }
.amisdesign{margin-left: 50px;width: 40%;}
};
@media (max-width: 1360px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; margin-top: 4%; } 
.profildesign {width:80%;margin-right: 25px; height: 60%; }
.amisdesign{margin-left: 25px;width: 80%;}
};
@media (max-width: 720px) {
#view{ display: flex; flex-direction:column ;margin: 0; margin-top: 5%; } 
.profildesign {width:100%;margin: 0px;margin-bottom: 20px;}
.amisdesign{width: 100%;margin: 0px;margin-top: 20px;}
}
</style>
