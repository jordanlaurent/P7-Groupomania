<template>
  <div id="Murflat">
    <div class="logocolorsback">
    <img src="../assets/image/logo.png" class="w-25"> 
    </div>
  <div id="view">
    <Profil class="profildesign" />
    <div>
    <Addmessage/> 
    <Post/>
    </div>
    <Amis class="amisdesign"/>
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
    Amis
  },
  created: function (){
    document.title = 'Groupomania - Mur'
    document.querySelector('meta[name="Réseaux social de l entreprise groupomania"]').setAttribute('content','random')
  }
}
//var textPost = document.querySelector(".form-control")
//var inputPost = document.querySelector('.form')
//var ViewPost = document.querySelector('.notes')

//var Postuser = textPost.nodeValue
//console.log(Postuser)

</script>
<style lang="scss">
.logocolorsback{background: linear-gradient(70deg, rgb(40, 40, 151), rgb(160, 14, 39))}
#app{ padding: 0px;}
#Murflat {
  position: inherit; top: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 text-decoration: none;
 background: linear-gradient(70deg, rgb(242, 242, 247), rgba(216, 216, 216, 0.466));
}

@media (min-width: 1920px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; padding-top: 4%; } 
.profildesign {width:20%;margin-right: 150px; height: 60%; }
.amisdesign{margin-left: 100px;width: 20%;}
}
@media (max-width: 1920px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; padding-top: 4%; } 
.profildesign {width:40%;margin-right: 50px; height: 60%; }
.amisdesign{margin-left: 50px;width: 40%;}
};
@media (max-width: 1360px) {
  #view{ display: flex; flex-direction:row ; justify-content: space-between;margin: 0; padding-top: 4%; } 
.profildesign {width:80%;margin-right: 25px; height: 60%; }
.amisdesign{margin-left: 25px;width: 80%;}
};
@media (max-width: 720px) {
#view{ display: flex; flex-direction:column ;margin: 0; margin-top: 5%;padding-right: 5%; padding-left:5% ;align-items: center; display: flex;
background: linear-gradient(70deg, rgb(40, 40, 151), rgb(160, 14, 39)); } 
.profildesign {width:100%;margin: 0px;margin-bottom: 20px;}
.amisdesign{width: 100%;margin: 0px;margin-top: 20px;}

}
</style>
