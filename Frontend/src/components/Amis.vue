<template>
<div id="amisflat" class=" rounded-0">
      <img src="../assets/image/Profiltest.png" class=" w-50  profilImg" alt="...">
        <h5 class="card-title pt-4">JEAN LOUIS</h5>
        <p class="text-muted"> Web développeur </p>
        <hr>
<div class="pt-2">
  <h3 class="text-left pl-3 pb-2"> Biographie </h3>
  <p class="bio pl-3 text-muted">Bonjour ceci est un texte de presentation je m'appelle jordan et je suis web dev. Ici chaque employé peut entrer une biographique en 250 character </p>
<hr>
<h3>Following </h3>
<p>20</p>
<hr>
<h3>Followers</h3>
<p>89939</p>
<hr>
<a class="buttonprofiledit"> Modifier le profil  </a>
</div>
</div>
</template>

<style scoped lang='scss'>
#amisflat{background-color:whitesmoke;color: rgba(255, 255, 255, 0.877);padding-top: 2%;border-top: 35mm solid #EE5A24;}
.fas{color: #802ba5; position:fixed ; right: 0;margin-right: 2%;}
.bio{text-align: left;}
.buttonprofiledit{color: #eb2f06;font-weight: bold;}
@media (min-width: 1024px) {
#amisflat{margin-right: 5%;}
}
.profilImg{border: 6px solid whitesmoke; border-radius: 50%; margin-top: -120px;}
p,h3,hr,h5{color: black;}
</style>