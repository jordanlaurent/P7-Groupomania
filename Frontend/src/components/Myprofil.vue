<template>
  <div id="MyprofilCover">
    <h1 class="pb-3">Paramétre du compte nom d'utilisateur</h1>
    <img src="../assets/image/Profiltest.png" class="pb-3" />
    <h2 class="pb-3">Adresse email@outllok.fr</h2>
    <button class="btn-success">Changer mon adresse email</button>
    <br />
    <button class="btn-warning">Modifier mot de passe</button>
    <br />
    <button class="btn-danger">Supprimer mon compte</button>
  </div>
</template>

<style scoped lang='scss'>
#MyprofilCover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  background-color: rgb(31, 29, 29);
  color: whitesmoke;
  padding: 10%;
}
</style>