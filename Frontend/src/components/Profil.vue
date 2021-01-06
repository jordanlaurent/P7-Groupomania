<template>
<div class="card profil rounded-0">
    <div class="card-body bg-dark">
  <img class="card-img-top w-50" src="../assets/image/Profiltest.png" alt="Card image cap">

    <h5 class="card-title">JEAN LOUIS</h5>
  </div>
  <ul class="list-group list-group-flush">
    <button class="btn list-group-item mb-2 rounded-0">Photo de profil</button>
    <button class="list-group-item mb-2">Mise à jour de l'email</button>
    <button class="list-group-item mb-2">Changemants de mots de passe</button>
    <button  class="list-group-item"> Se déconnecter </button>
  </ul>
  <div class="card-body">
    <router-link to="/" class="btn bg-secondary text-white mb-3"> Se déconnecter </router-link><br>
    <button  class="btn bg-danger text-white">Supprimer mon compte</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Profil',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
h5{
  color: white;
  margin-top: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #c95c29;
}
</style>
