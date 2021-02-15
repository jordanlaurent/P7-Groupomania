<template>
  <div id="loginflat" class="text-center ">
    <img src="../assets/image/logo.png" class="logo">
      <form class="bg rounded p-5 text-white">
      <h1 class=" h3 mb-3 font-weight-bold">Bienvenue sur notre Reseaux Social</h1>
      <h4 class=" rounded">Du mal à trouver de nouvelle inspirations ?<br>
        # Collaborer avec vos collegues !<br>
        # Partager l'avancée de vos projet ?<br>
        # Rester informer des derniere actuiallité de l'entreprise </h4>
        <div >
    <router-link to="Connexion" class="btn bg-success text-white ml-3 mt-3"> Connexion </router-link>
    <router-link to="Inscription" class="btn bg-secondary text-white ml-3 mt-3"> Inscription </router-link><br>
    <router-link to="Motdepasseoublier" class=" ml-3 mt-4"> Mots de passe oublier</router-link>
    <p class="mt-3">© 2021 Tout droits réservé</p>
            </div>
    </form>
  </div>
</template>
<style>
.bg{background: linear-gradient(70deg, rgba(8, 8, 8, 0.76), rgba(88, 87, 87, 0.76));border: solid 2px;border-radius: 15px 0px 30px}
.logo{width: 80%; padding-bottom: 2%;max-width: 500px;}
#loginflat{background: linear-gradient(70deg, #d4d11b,#f6b93b, #e4830d);display: flex;flex-direction: column;position: absolute;top: 0;bottom: 0;right: 0;left: 0; align-items: center; justify-content: center;}
</style>

<script>
// @ is an alias to /src
// Détection



export default {
  name: 'Home',
}

</script>
