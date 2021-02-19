<template>
  <div id="Mur">
    <Toolbar id="profil" />
    <div>
      <div id="messagedisplay">
        <Search id="search" />
        <Addmessage />
        <Post />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Search from "@/components/search";
import Addmessage from "@/components/Addmessage.vue";
import Post from "@/components/Post.vue";
import Toolbar from "../components/Toolbar.vue";
import Footer from "../components/footer.vue";

export default {
  name: "Mur",
  data() {
    return {};
  },
  components: {
    Toolbar,
    Addmessage,
    Post,
    Search,
    Footer,
  },
  created: function () {
    document.title = "Groupomania";
    var jwt = localStorage.getItem("email");
    if (jwt != null) {
      console.log("succes");
    } else {
      localStorage.clear();
      console.log("jwt vide");
      //localStorage.setItem('jwt');
      window.location = "/Connexion";
    }
  },
};
//var textPost = document.querySelector(".form-control")
//var inputPost = document.querySelector('.form')
//var ViewPost = document.querySelector('.notes')

//var Postuser = textPost.nodeValue
</script>
<style lang="scss">
#app {
  padding: 0px;
}
#profil {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
#Mur {
  position: inherit;
  top: 0;
  bottom: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
  background: linear-gradient(
    70deg,
    rgb(242, 242, 247),
    rgba(216, 216, 216, 0.466)
  );
}
#search {
  margin-top: 10%;
  background-image: url("../assets/image/graffiti.jpg");
  padding: 60px;
  background-position: right;
}
#messagedisplay {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-top: 7%;
}
@media (min-width: 1920px) {
  #messagedisplay {
    margin-right: 20%;
    margin-left: 20%;
  }
  #profil {
    margin-bottom: 7%;
  }
}
@media (max-width: 1920px) {
  #messagedisplay {
    margin-right: 20%;
    margin-left: 20%;
    padding-top: 10%;
  }
  .logo{top: 8%;}
  #profil {
    margin-bottom: 7%;
  }
}
@media (max-width: 1360px) {
  #messagedisplay {
    margin-right: 0%;
    margin-left: 0%;
  }
  #profil {
    margin-bottom: 7%;
  }
}
@media (max-width: 720px) {
  .t1,
  .t2 {
    display: none;
  }
  .bg{background: rgba(255, 255, 240, 0);}
  .logo{top: 6%;}
}
</style>
