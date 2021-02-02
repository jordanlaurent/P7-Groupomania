<template>


<nav class="navbar navbar-expand-lg navbar-dark template">
  <img src="../assets/image/logo.png" class="navbar-brand logo">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active pr-5">
        <i class="fas fa-2x fa-home logoprofil text-light"></i>
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item pr-5">
        <i class="fas fa-2x fa-comment logoprofil text-light"></i>
        <a class="nav-link" href="#">Message</a>
      </li>
      <li class="nav-item pr-5">
        <i class="fas fa-2x fa-user-cog logoprofil text-light"></i>
        <routeur-link class="nav-link" href="#">Profil</routeur-link>
      </li>
      <li class="nav-item pr-5">
        <i class="fas fa-2x fa-sign-out-alt text-light"></i>
        <router-link to="/" class="nav-link">Deconnexion</router-link>
      </li>
    </ul>
  </div>
</nav>
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
.template{background-color:#EE5A24;}
p,a{font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-weight: normal; }
.logo{width: 20%;padding-left: 10%;}
</style>
