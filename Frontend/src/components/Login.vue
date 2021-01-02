<template>
<body id="loginflat" class="text-center">
    <router-link to="../vue/App"> lien </router-link>
    <form class="form-signin bg-white rounded p-5">
      <img class="mb-4" src="../assets/logoLogin.png" alt="" width="72" height="72">
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
      <button href="./App.vue" class="btn btn-lg btn-success btn-block mb-2" type="submit">Se connecter</button>
      <a href=""> <p>Mots de passe oublier ? / S'inscrire </p> </a>
      <p class="mt-5 mb-3 ">© 2021 Tout droits réservé</p>
    </form>
  </body>
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


<script>

</script>