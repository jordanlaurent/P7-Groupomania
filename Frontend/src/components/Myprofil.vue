<template>
  <div id="MyprofilCover">
    <h2 class="pb-3 dataFont">
      Paramétre du compte de
      <span class="text-primary h1">{{ name }} {{ prenom }}</span>
    </h2>
  <div id='main'>
<input type="file" @change="onFileChanged">
<button @click="onUpload">Upload!</button>
  </div>
<hr>
  {{ photo }} 
    <h4>Votre Biographie : <cite class="text-success h4"> {{ bio }} </cite> </h4>
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
import FormData from 'form-data';
export default {
  name: "Myprofil",
  data() {
    return {
      email: null,
      emaile: null,
      name: null,
      prenom: null,
      emailChanged: "",
      modalShow: false,
      bio: null,
      password: null,
      passwordChanged:"",
      photo:null,
      selectedFile: null,
    };
  },
  methods: {
    test() {
    this.file = this.$refs.file.files[0];
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModalMail() {
      this.$refs["my-modalEmail"].show();
    }, showModalPassword() {
      this.$refs["my-modalPassword"].show();
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
    },toggleModalPassword() {
      this.$refs["my-modalPassword"].toggle("#toggle-btn");
    }, onFileChanged (event) {
    this.selectedFile = event.target.files[0]
  },
  onUpload() {
    const formData = new FormData();
     formData.append('myFile', this.selectedFile )
      axios
      .put('http://localhost:3000/photo',{ 
             userid: localStorage.getItem("jwt"),
             data:formData,
             headers: { "Content-Type": "multipart/form-data" },
        })
      .then((response) => {
        //  this.photo = formData
        //  let user = JSON.parse(localStorage.getItem("user"))
        //  user.photo = formData
        //  localStorage.setItem("user",JSON.stringify(user))
         //this.$router.go(0);
         console.log(response)
      }) .catch ((err) => {
          console.log(err.response)
      })
    },
    ChangedEmail() {
      axios
        .put("http://localhost:3000/update", {
          email: this.emailChanged,
          userid: localStorage.getItem("jwt"),
        })
         this.email = this.emailChanged
         let user = JSON.parse(localStorage.getItem("user"))
         user.email = this.emailChanged
         localStorage.setItem("user",JSON.stringify(user))
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
    let user = JSON.parse(localStorage.getItem("user"))
    this.email = user.email
    this.name = user.name
    this.prenom = user.prenom
      this.photo = user.photo
      this.bio = user.bio
  },
};
</script>