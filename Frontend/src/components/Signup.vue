<template>
<div id="loginflat" class="text-center">
  <img src="../assets/image/logo.png" class="logo">
       <form class="bg text-light p-5 text-left">
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
h4{text-align: center;}

</style>


