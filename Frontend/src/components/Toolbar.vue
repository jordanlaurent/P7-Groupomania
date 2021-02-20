<template >
  <nav class="navbar navbar-expand-lg navbar-dark template">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse logoToolbar" id="navbarNav">
      <img src="../assets/image/logo.png" class="navbar-brand logomur" />
      <ul class="navbar-nav">
        <li class="nav-item active pr-5">
          <button class="nav-link btn" @click="home">
            <i class="fas fa-2x fa-home text-light"></i>
          </button>
        </li>
        <li class="nav-item pr-5">
          <button @click="profil" class="nav-link btn">
            <i class="fas fa-2x fa-user-cog text-light"></i>
          </button>
        </li>
        <li class="nav-item pr-5">
          <button @click="disconnect" class="nav-link btn">
            <i class="fas fa-2x fa-sign-out-alt text-light"></i>
          </button>
        </li>
      </ul>
       <div class="colorBackIcone">
      <button class="btn-light btn"><i  @click="chBackcolor('whitesmoke')" class="fas fa-2x fa-sun "></i></button>
      <button type="button" class="btn btn-dark"><i  @click="chBackcolor('#1e272e')" class="fas fa-2x fa-moon"></i></button>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Profil",
  methods: {
    disconnect() {
      localStorage.clear();
      window.location = "/Connexion";
    },
    home() {
      var jwt = localStorage.getItem("email");
      if (jwt != null) {
        this.$router.go(0);
        window.location = "/Mur";
      } else {
        window.location = "/connexion";
        console.log("jwt vide");
      }
    },
    profil() {
      var jwt = localStorage.getItem("email");
      if (jwt != null) {
        this.$router.go(0);
        window.location = "/Profil";
        console.log("succes");
      } else {
        window.location = "/connexion";
        console.log("jwt vide");
      }
    },  chBackcolor(color) {
        localStorage.setItem("color", color);
        var colorr = localStorage.getItem("color",color);
       var doccolor = document.getElementById("buttonColor").style.backgroundColor = colorr
       document.getElementsById("buttonColor").value = doccolor;
}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.template {
  background-color: #f6b93b;
}
p,
a {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: normal;
}
.logomur {
  margin-right: 29%;
  width: 15%;
}
.logoToolbar {
  display: flex;
  justify-content: left;
}
@media (max-width: 1920px) {
} ;
</style>
