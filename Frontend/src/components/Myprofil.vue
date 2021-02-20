<template>
  <div id="MyprofilCover">
    <h2 class="pb-3 dataFont">
      Paramétre du compte de
      <span class="text-primary h1">{{ name }} {{ prenom }}</span>
    </h2>
    <img :src="photo" class="pb-3" />
    <h2 class="pb-3 dataFont">{{ email }}</h2>
    <button class="btn-success">Changer mon adresse email</button>
    <br />
    <button class="btn-warning">Modifier mot de passe</button>
    <br />
    <button @click.prevent="delecteAccount" class="btn-danger">
      Supprimer mon compte
    </button>
  </div>
</template>

<style scoped lang='scss'>
#MyprofilCover {
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 5%;
  background-color: rgb(31, 29, 29);
  color: whitesmoke;
  padding: 10%;
}
@media (max-width: 1360px) {
  .dataFont {
    font-size: 1.5rem;
  }
}
</style>

<script>
import axios from "axios";
export default {
  name: "Myprofil",
  data() {
    return {
      email: null,
      photo: null,
      name: null,
      prenom: null,
    };
  },
  methods: {
    delecteAccount() {
      console.log(localStorage.getItem("jwt"));
      axios
        .delete("http://localhost:3000/user/delete", {
          data: {
            userid: localStorage.getItem("jwt"),
          },
        })
        .then((response) => {
          localStorage.clear
          window.location = "/inscription";
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    (this.email = localStorage.getItem("email")),
      (this.name = localStorage.getItem("name")),
      (this.prenom = localStorage.getItem("prenom")),
      (this.photo = localStorage.getItem("photo"));
  },
};
</script>