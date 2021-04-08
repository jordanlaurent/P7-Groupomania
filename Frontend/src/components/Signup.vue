<template>
  <div id="loginflat" class="text-center">
    <img src="../assets/image/logo.png" class="logo" />
    <form @submit="postData" method="post" class="bg text-light p-5 text-left">
      <h4>Inscription</h4>
        <section class="popup" v-if="errors">
          <p class="pt-2 text-danger popuptext">Nous sommes désolés, les informations saisie sont incorrect
          <br />votre mot de passe doit faire 8 character dont 1 majuscule et 2 chiffres</p>
        </section>
      <div class="row">
        <div class="form-group mr-2">
          <label>Nom </label>
          <input id="name" name="name" v-model="name" type="text" class="form-control form-control-lg" required/>
        </div>
        <div class="form-group">
          <label>Prenom </label>
          <input id="prenom" name="prenom" v-model="prenom" type="text" class="form-control form-control-lg" required/>
        </div>
      </div>
      <div class="form-group">
        <label>Biographie </label>
        <textarea id="bio" name="bio" v-model="bio" type="text" class="form-control form-control-lg" required/>
      </div>
      <div class="form-group ">
        <label>Adresse Email</label>
        <input id="email" name="email" v-model="email" type="text" class="form-control form-control-lg" required/>
      </div>
      <div class="form-group">
        <label>Mots de passe</label>
        <input id="password" name="password" v-model="password" type="password" class="form-control form-control-lg" required/>
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">Inscription</button>
      <p class="forgot-password text-right">Deja enregistrer ?<router-link to="/Connexion">se connecter ?</router-link></p>
    </form>
    <p class="t2"></p>
    <p class="t1"></p>
  </div>
</template>

<style scoped>
h4 {text-align: center;}
</style>


<script>
import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
      email: '',
      password: "",
      name: "",
      bio:"",
      prenom:"",
      errors: false,
    };
  },
  methods: {
    postData(e) {
        e.preventDefault();
      var optionAxios = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      axios
        .post(
          "http://localhost:3000/signup",
          {
            email: this.email,
            bio:this.bio,
            password: this.password,
            name: this.name,
            prenom:this.prenom,
          },
          { optionAxios }
        )
        .then((response) => {
            localStorage.setItem("email", response.data.email),
            localStorage.setItem("jwt", response.data.token),
            this.$router.replace({ name: "Connexion" });
        })
        .catch((error) => {
          (this.errors = true), console.log(error);
        });
    }
  },
};
</script>