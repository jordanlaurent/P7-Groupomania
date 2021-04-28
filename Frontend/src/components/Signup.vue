<template>
  <div id="loginflat" class="text-center">
    <img src="../assets/image/logo.png" class="logo" alt="logo groupomania" />
    <form @submit="postData" method="post" class="bg text-light p-5 text-left">
      <h4>Inscription</h4>
          <section class="popup" v-if="errors">
          <p class="pt-2 text-light popuptext h5">
         {{errors}} 
          </p>
        </section>
      <div class="row">
        <div class="form-group mr-2">
          <label>Nom </label>
          <input placeholder="EX :lumiere" id="name" name="name" v-model="name" type="text" class="form-control form-control-lg" required/>
        </div>
        <div class="form-group">
          <label>Prenom </label>
          <input placeholder="EX : francois" id="prenom" name="prenom" v-model="prenom" type="text" class="form-control form-control-lg" required/>
        </div>
      </div>
      <div class="form-group">
        <label>Biographie </label>
        <textarea placeholder=" EX : je suis ingenieur " id="bio" name="bio" v-model="bio" type="text" class="form-control form-control-lg" required/>
      </div>
      <div class="form-group ">
        <label>Adresse Email</label>
        <input placeholder="EX : votre@email.fr" id="email" name="email" v-model="email" type="text" class="form-control form-control-lg" required/>
      </div>
      <div class="form-group">
        <label>Mots de passe</label>
        <input placeholder="EX: motDepasse23" id="password" name="password" v-model="password" type="password" class="form-control form-control-lg" required/>
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
      errors:'',
      email: '',
      password: "",
      name: "",
      bio:"",
      prenom:"",
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
        .then(() => {
            this.$router.replace({ name: "Connexion" });
        })
        .catch((error) => {
          (this.errors = error.response.data.error)
        });
    }
  },
};
</script>