<template>
<div id="loginflat" class="text-center">
      <form class="form-signin bg-white rounded p-5">
        <img class="mb-4" src="../assets/logoLogin.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Inscription</h1>
        <div>
          <label for="lasName" class="form-label">Votre nom </label>
              <input type="text" class="form-control " id="lastName" placeholder=" Gauthier" value="" required="">
              <label for="firstName" class="form-label">Votre prenom</label>
              <input type="text" class="form-control" id="firstName" placeholder=" Jean paul" value="" required="">
              <label for="email" class="form-label"> Email valide</label>
              <input type="email" class="form-control" id="email" placeholder="vous@example.com">
              <button class="btn bg-info mt-3">Télécharger une image de profil <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
</svg> </button> 
    <router-link to="Mur" class="btn bg-success text-white ml-3 mt-3"> Valider </router-link>
    <p class="mt-5 mb-3 ">© 2021 Tout droits réservé</p>
            </div>
    </form>
  </div>
</template>

<style scoped>
@media (min-width: 860px) {
#loginflat{padding-right: 40%; padding-left:40% ; padding-top: 15%;background: linear-gradient(70deg, #5d5ac5, #b55aba);position: absolute;
bottom: 0; left: 0; top: 0;right: 0; }
}
@media (max-width: 860px) {
#loginflat{padding-right: 10%; padding-left:10% ; padding-top: 15%;background: linear-gradient(70deg, #5d5ac5, #b55aba);position: absolute;
bottom: 0; left: 0; top: 0;right: 0; }
}
</style>
  
