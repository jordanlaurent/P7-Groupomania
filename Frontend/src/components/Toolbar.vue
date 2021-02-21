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
          <button class="nav-link btn btn-light" @click="home">
            <i class="fas fa-2x fa-home"></i>
          </button>
        </li>
        <li class="nav-item pr-5">
          <button @click="profil" class="nav-link btn btn-light">
            <i class="fas fa-2x fa-user-cog"></i>
          </button>
        </li>
        <li class="nav-item pr-5">
          <button @click="disconnect" class="nav-link btn btn-light">
            <i class="fas fa-2x fa-sign-out-alt"></i>
          </button>
        </li>
      </ul>
      <div class="colorBackIcone">
        <button class="btn-light btn">
          <i @click="chBackcolor('whitesmoke')" class="fas fa-2x fa-sun"></i>
        </button>
        <button type="button" class="btn btn-dark">
          <i @click="chBackcolor('#1e272e')" class="fas fa-2x fa-moon"></i>
        </button>
      </div>
    </div>
    <p class="t3"></p>
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
      var jwt = localStorage.getItem("email");
      if (jwt != null) {
        this.$router.go(0);
        window.location = "/Mur";
      } else {
        window.location = "/Connexion";
      }
    },
    profil() {
      var jwt = localStorage.getItem("email");
      if (jwt != null) {
        this.$router.go(0);
        window.location = "/Profil";
      } else {
        window.location = "/Connexion";
      }
    },
    chBackcolor(color) {
      localStorage.setItem("color", color);
      var colorr = localStorage.getItem("color", color);
      document.getElementById("buttonColor").style.backgroundColor = colorr;
    },
  },
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
  z-index: 1;
}
.fas {
  color: greenyellow;
}
.fas:hover {
  color: goldenrod;
}
.t3 {
  position: absolute;
  top: 0;
  z-index: 0;
  height: 0;
  width: 0;
  border: 6rem solid rgba(0, 0, 0, 0);
  border-top-color: #3d3d3d;
}
@media (max-width: 992px) {
  .t3 {
    display: none;
  }
} ;
</style>
