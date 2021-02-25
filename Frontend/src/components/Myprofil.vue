<template>
  <div id="MyprofilCover">
    <h2 class="pb-3 dataFont">
      Paramétre du compte de
      <span class="text-primary h1">{{ name }} {{ prenom }}</span>
    </h2>
    <img :src="photo" class="pb-3" />
    <h2 class="pb-3 dataFont">{{ email }}</h2>

    <b-button id="show-btn" class="btn-success" @click="showModalMail"
      >Modifier mon adresse email</b-button
    >
    <b-modal
      ref="my-modalEmail"
      id="name-input"
      hide-footer
      title="Etes vous sur de vouloir modifer votre adresse email ?"
    >
      <b-form-input
        id="name-input"
        v-model="emailChanged"
        placeholder="VotreEmail@outlook.fr"
        required
      ></b-form-input>
      <b-button @click.prevent="ChangedEmail" class="mt-3 btn-danger" block
        >Valider</b-button
      >
      <b-button class="mt-2" block @click="toggleModalMail">Annuler</b-button>
    </b-modal>
    <br />
    <b-button class="btn-warning">Modifier mot de passe</b-button>
    <br />
    <div>
      <b-button id="show-btn" class="btn-danger" @click="showModal"
        >Supprimer mon compte</b-button
      >
      <b-modal
        ref="my-modal"
        hide-footer
        title="Etes vous sur de vouloir supprimer votre compte ?"
      >
        <b-button @click.prevent="delecteAccount" class="mt-3 btn-danger" block
          >Valider</b-button
        >
        <b-button class="mt-2" block @click="toggleModal">Annuler</b-button>
      </b-modal>
    </div>
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
      emaile: null,
      photo: null,
      name: null,
      prenom: null,
      emailChanged: "",
      modalShow: false,
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModalMail() {
      this.$refs["my-modalEmail"].show();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    toggleModalMail() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modalEmail"].toggle("#toggle-btn");
    },
    ChangedEmail() {
      axios
        .put("http://localhost:3000/update", {
          email: this.emailChanged,
          userid: localStorage.getItem("jwt"),
        })
        .then((response) => {
          localStorage.setItem("email");
          console.log(response)
        });
         this.$router.go(0);
    },
    delecteAccount() {
      axios
        .delete("http://localhost:3000/user/delete", {
          data: {
            userid: localStorage.getItem("jwt"),
          },
        })
        .then((response) => {
          localStorage.clear;
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