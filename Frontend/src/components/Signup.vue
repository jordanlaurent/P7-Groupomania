<template>
<div id="loginflat" class="text-center">
    <video autoplay muted loop id="bgvid">
  <!-- <source src="../assets/Beach.webm" type="video/webm"> -->
  <source src="../assets/video/Beach.webm" type="video/webm"> </video>
       <form class="bg text-light p-5">
            <h3> Groupomania</h3>
            <h4>Inscription </h4>
            <div class="form-group">
                <label>Nom </label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
             <div class="form-group">
                <label>prenom</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>adresse Email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Mots de passe</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Inscription</button>

            <p class="forgot-password text-right">
                Deja enregistrer ?
                <router-link to="/Connexion">se connecter ?</router-link>
            </p>
        </form>
  </div>
</template>

<style scoped>
@media (max-width: 1920px) {
#loginflat{display: flex;flex-direction: column; position: fixed; justify-content: center;align-items: center;}
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:1920px; height: 1080px; z-index: -100;
  background-size: cover;
}
.bg{background-color: rgba(0, 0, 0, 0.527);}
}
@media (min-width: 1920px) {
  #loginflat{display: flex;flex-direction: column; position: fixed; justify-content: center;align-items: center;}
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:2560px; height: 1440px; z-index: -100;
  background-size: cover;
}
.bg{background-color: rgba(0, 0, 0, 0.527);}
}
@media (max-width: 860px) {
#loginflat{background: linear-gradient(70deg, rgb(40, 40, 151), rgb(160, 14, 39)); display: flex;flex-direction: column; position: fixed; justify-content: center;align-items: center;}
}
</style>