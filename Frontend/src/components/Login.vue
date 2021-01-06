<template>
<div id="loginflat" class="text-center">
  <video autoplay muted loop id="bgvid">
  <!-- <source src="../assets/Beach.webm" type="video/webm"> -->
  <source src="../assets/video/Beach.webm" type="video/webm">
</video>
      <form class="form-signin bgtransparent text-white rounded p-5">
      <img class="mb-4" src="../assets/image/logoLogin.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Veuillez vous connecter</h1>
      <label for="inputEmail" class="sr-only">Adresse Email</label>
      <input type="email" id="inputEmail" class="form-control mb-3" placeholder="Adresse email" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Mots de passe</label>
      <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Mots de passe" required="">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me">Se souvenir de mes informations
        </label>
      </div>
      <router-link to="Mur" class="btn btn-lg btn-success btn-block mb-2" type="submit">Se connecter</router-link>
      <router-link to="Inscription" >Mots de passe oublier ? / S'inscrire </router-link>
      <p class="mt-5 mb-3 ">© 2021 Tout droits réservé</p>
    </form>
  </div>
</template>

<style scoped>
@media (max-width: 1920px) {
#loginflat{padding-right: 35%; padding-left:35% ;position: auto; padding-top: 5%;
bottom: 0; left: 0; top: 0;right: 0; }
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:1920px; height: 1080px; z-index: -100;
  background-size: cover;
}
}
@media (min-width: 1920px) {
#loginflat{padding-right: 40%; padding-left:40% ;position: auto; padding-top: 13%;
bottom: 0; left: 0; top: 0;right: 0; }
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:2560px; height: 1440px; z-index: -100;
  background-size: cover;
}
}
@media (max-width: 860px) {
#loginflat{padding-right: 0%; padding-left:0% ; position: fixed;align-items: center; display: flex;
background: linear-gradient(70deg, rgb(40, 40, 151), rgb(160, 14, 39)); }
video#bgvid {display: none; }
}

</style>
