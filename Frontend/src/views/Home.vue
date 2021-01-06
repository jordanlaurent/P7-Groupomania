<template>
  <div id="loginflat" class="text-center">
    <video autoplay muted loop id="bgvid">
  <!-- <source src="../assets/Beach.webm" type="video/webm"> -->
  <source src="../assets/video/Beach.webm" type="video/webm"> </video>
      <form class="bgtransparent rounded p-5 text-white">
      <h1 class=" h3 mb-3 font-weight-bold">Bienvenue sur <img src="../assets/image/logo.png" alt="" width="302" height="72">  Social network</h1>
      <h4 class=" rounded">Du mal à trouver de nouvelle inspirations ?<br>
        # Collaborer avec vos collegues !<br>
        # Partager l'avancée de vos projet ?<br>
        # Rester informer des derniere actuiallité de l'entreprise </h4>
        <div >
    <router-link to="Connexion" class="btn bg-success text-white ml-3 mt-3"> Connexion </router-link>
    <router-link to="Connexion" class="btn bg-secondary text-white ml-3 mt-3"> Inscription </router-link><br>
    <router-link to="Motdepasseoublier" class=" text-muted ml-3 mt-4"> Mots de passe oublier</router-link>
    <p class="mt-3">© 2021 Tout droits réservé</p>
            </div>
    </form>
  </div>
</template>
<style>
.bgtransparent{background-color: rgba(0, 0, 0, 0.692);}
@media (max-width: 1920px) {
  #loginflat{padding-right: 30%; padding-left:30% ;position: auto; padding-top: 1%;
bottom: 0; left: 0; top: 0;right: 0; }
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:1920px; height: 1080px; z-index: -100;
  background-size: cover;
}
}
@media (min-width: 1920px) {
#loginflat{padding-right: 25%; padding-left:25% ; padding-top: 18%;;position: auto;
bottom: 0; left: 0; top: 0;right: 0; }
}
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:2560px; height: 1440px; z-index: -100;
  background-size: cover;
}
@media (max-width: 860px) {
#loginflat{padding-right: 0%; padding-left:0% ; position: fixed;align-items: center; display: flex;
background: linear-gradient(70deg, rgb(40, 40, 151), rgb(160, 14, 39)); }
video#bgvid {display: none; }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
