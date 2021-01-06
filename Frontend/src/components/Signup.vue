<template>
<div id="loginflat" class="text-center">
    <video autoplay muted loop id="bgvid">
  <!-- <source src="../assets/Beach.webm" type="video/webm"> -->
  <source src="../assets/video/Beach.webm" type="video/webm"> </video>
      <form class="form-signin bgtransparent text-white rounded p-5">
        <img class="mb-4" src="../assets/image/logoLogin.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Inscription</h1>
        <div>
          <label for="lasName" class="form-label">Nom </label>
              <input type="text" class="form-control " id="lastName" placeholder=" Gauthier" value="" required="">
              <label for="firstName" class="form-label">Prénom</label>
              <input type="text" class="form-control" id="firstName" placeholder=" Jean paul" value="" required="">
              <label for="email" class="form-label"> Adresse Email </label>
              <input type="email" class="form-control" id="email" placeholder="vous@example.com">
              <label for="firstName" class="form-label">Mots de passe</label>
              <input type="text" class="form-control" id="password" placeholder=" " value="" required="">
              <button class="btn bg-info mt-3">Télécharger une image de profil <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
</svg> </button> 
    <router-link to="Mur" class="btn bg-success text-white ml-3 mt-3"> Valider </router-link>
    <p class="mt-3">© 2021 Tout droits réservé</p>
            </div>
    </form>
  </div>
</template>

<style scoped>
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
#loginflat{padding-right: 40%; padding-left:40% ; padding-top: 8%;;position: auto;
bottom: 0; left: 0; top: 0;right: 0; }
}
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:2560px; height: 1440px; z-index: -100;
  background-size: cover;
}
@media (max-width: 860px) {
#loginflat{padding-right: 10%; padding-left:10% ; position: fixed;
bottom: 0; left: 0; top: 0;right: 0;background: linear-gradient(70deg, rgb(40, 40, 151), rgb(160, 14, 39));}

}
</style>
  
