<template>
  <div id="loginflat" class="text-center">
    <img src="../assets/image/logo.png" class="logo" />
    <form class="bg p-5 text-white">
      <h1 class="h3 mb-3 font-weight-bold">
        Bienvenue sur notre Reseaux Social
      </h1>
      <h5 class="rounded">
        Du mal à trouver de nouvelle inspirations ?<br />
        # Collaborer avec vos collegues !<br />
        # Partager l'avancée de vos projet ?<br />
        # Rester informer des derniere actuiallité de l'entreprise
      </h5>
      <div>
        <router-link to="Connexion" class="btn bg-success text-white ml-3 mt-3">
          Connexion
        </router-link>
        <router-link
          to="Inscription"
          class="btn bg-secondary text-white ml-3 mt-3"
        >
          Inscription </router-link
        ><br />
        <router-link to="Motdepasseoublier" class="ml-3 mt-4">
          Mots de passe oublier</router-link
        >
        <p class="mt-3">© 2021 Tout droits réservé</p>
      </div>
    </form>
    <p class="t2"></p>
    <p class="t1"></p>
  </div>
</template>
<style>
.t1 {
  position: fixed;
  z-index: 0;
  height: 0;
  width: 0;
  border: 50rem solid rgba(0, 0, 0, 0);
  border-bottom-color: #3d3d3d;
}
.t2 {
  position: fixed;
  z-index: 0;
  height: 0;
  width: 0;
  border: 50rem solid rgba(0, 0, 0, 0);
  border-top-color: #3d3d3d;
}
.bg {
  background: linear-gradient(50deg, rgba(8, 8, 8, 0.986), #f6b93b, #000000);
  border-radius: 15px 0px 30px;
  z-index: 2;
}
.logo {
  width: 80%;
  max-width: 500px;
  z-index: 3;
  top: 20%;
  padding-bottom: 2%;
  position: fixed;
}
#loginflat {
  background: linear-gradient(70deg, #d4d11b, #f6b93b, #e4830d);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
}
</style>

<script>
// @ is an alias to /src
// Détection

export default {
  name: "Home",
};
</script>
