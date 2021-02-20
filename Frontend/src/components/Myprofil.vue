<template>
<div>
  <div id="MyprofilCover">
    <h2 class="pb-3">Paramétre du compte de <span class="text-primary h1">{{ name }} {{ prenom }}</span></h2>
    <img :src="photo" class="pb-3" />
    <h2 class="pb-3">{{ email }}</h2>
    <button class="btn-success">Changer mon adresse email</button>
    <br />
    <button class="btn-warning">Modifier mot de passe</button>
    <br />
    <button class="btn-danger">Supprimer mon compte</button>
  </div>
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

<script>
export default {
  name: "Myprofil",
  data() {
    return {
     email: null,
     photo: null,
     name: null,
     prenom: null,
    }
      },
mounted() {
   this.email = localStorage.getItem('email'),
   this.name  = localStorage.getItem("name"),
   this.prenom = localStorage.getItem('prenom'),
   this.photo = localStorage.getItem("photo"),
   console.log(this.email)
}
  }
</script>