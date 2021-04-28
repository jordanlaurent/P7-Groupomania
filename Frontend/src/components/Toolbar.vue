<template >
  <!-- menu mobile -->
  <nav class="navbar navbar-expand-lg navbar-light template">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse logoToolbar" id="navbarNav">
        <!-- logo site web -->
        <img src="../assets/image/logo.png" class="navbar-brand logomur" alt="logo groupomania" />
        <ul class="navbar-nav toolbarMobile">
          <li class="nav-item active ">
            <a class=" btndesktop mr-3 btn btn-dark" @click="home">MUR </a>
            <button type="button" class="btn-dark btn-sm btn-block text-light textToolbar mb-1 rounded-0" @click="home">MON MUR </button>
          </li>
          <li class="nav-item ">
            <a @click="profil" class="btndesktop mr-3 btn  btn-dark" >PROFIL</a>
            <button type="button"  @click="profil"  class="btn-dark btn-sm btn-block text-light textToolbar mb-1 rounded-0">PROFIL</button>
          </li>
          <li class="nav-item ">
            <a @click="membre" class="btndesktop mr-3 btn  btn-dark" >MEMBRES</a>
            <button type="button"  @click="membre"  class="btn-dark btn-sm btn-block text-light textToolbar mb-1 rounded-0">MEMBRES</button>
          </li>
          <li class="nav-item ">
            <a @click="disconnect" class="btndesktop mr-3 btn disconnect  btn-dark">DECONNEXION</a>
            <button type="button" @click="disconnect" class="btn-danger btn-sm btn-block text-light textToolbar rounded-0">DECONNEXION </button>
          </li>
        </ul>
        <!-- button mode nuit -->
      <div class="colorBackIcone">
        <i @click="chBackcolor('whitesmoke')" class="fas fa-2x fa-sun pr-3"></i>
        <i @click="chBackcolor('#1e272e')" class="fas fa-2x fa-moon"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Profil",
  
  mounted:(color) => {
    if (localStorage.getItem("color") != null) {
      var getcolor = localStorage.getItem("color", color);
      document.getElementById("buttonColor").style.backgroundColor = getcolor;
      }
   },
  methods: {
    disconnect() {
      localStorage.clear();
      window.location = "/Connexion";
    },
    home() {
      var jwt = localStorage.getItem("jwt");
        if (jwt != null) {
          this.$router.go(0);
          window.location = "/Mur";
        } else {
          window.location = "/Connexion";
        }
    },
    profil() {
      var jwt = localStorage.getItem("jwt");
        if (jwt != null) {
          this.$router.go(0);
          window.location = "/Profil";
        } else {
          window.location = "/Connexion";
        }
    },membre() {
      var jwt = localStorage.getItem("jwt");
        if (jwt != null) {
          this.$router.go(0);
          window.location = "/Membre";
        } else {
          window.location = "/Connexion";
        }
    },
    chBackcolor(color) {
      localStorage.setItem("color", color);
      var colorSelect = localStorage.getItem("color", color);
      document.getElementById("buttonColor").style.backgroundColor = colorSelect;
    },
  },
};
</script>

<style scoped lang="scss">
.template {background-color: #eb2f06;}
p,h2, a {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: normal;}
a{color: aliceblue;font-size: 1rem;}
a:hover{color: black;text-decoration: none;}
.disconnect:hover{color: rgb(209, 18, 18);}
.logomur {margin-right: 29%; width: 15%;}
.logoToolbar {display: flex; justify-content: left; z-index: 1;}
.fas {color: rgb(243, 241, 241);}
.fa-sun:hover{color: #ebe717;}
.fa-moon:hover{color: #3d3d3d;}
.colorBackIcone{position: fixed;padding-right: 20px;right: 0;}
.t3 {position: absolute; top: 0; z-index: 0; height: 0; width: 0; border: 6rem solid rgba(0, 0, 0, 0); border-top-color: #3d3d3d;}
.textToolbar{display: none;}
@media (max-width: 992px) {
  .t3 {display: none;}
  .toolbarMobile{display:flex; flex-direction: column;padding-top: 10px;padding-bottom: 10px; width: 100%;color: whitesmoke;}
  .logomur{width: 80%;margin: 0;justify-content: center;}
  .btndesktop{display: none;}
  .logoToolbar {flex-direction: column;padding-bottom: 10px;}
  .textToolbar{ display: initial;}
  .navbar{padding: 0}
  .colorBackIcone{position: inherit}
  .template {background-color: #030303f3;}
};
</style>
