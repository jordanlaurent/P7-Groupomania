<template>
  <div id="loginflat" class="text-center">
    <img src="../assets/image/logo.png" class="logo"  alt="logo groupomania"/>
      <form @submit="postData" method="post" class="bg text-light p-5">
        <h4>CONNEXION</h4>
        <section class="popup" v-if="errors">
          <p class="pt-2 text-light popuptext h5">
         {{errors}} 
          </p>
        </section>
        <div class="form-group">
         <label>Email </label>
          <input placeholder="votre_email@mail.fr" id="email" type="email" class="form-control form-control-lg" name="email" v-model="posts.email" required/>
        </div>
        <label>Mots de passe</label>
        <div class="input-group mb-3">
          <input placeholder="Mot_de_passe" v-bind:type="[showPassword ? 'text' : 'password']" class="form-control" id="password" name="password" v-model="posts.password" required/>
          <div class="input-group-append">
            <span class="input-group-text" @click="showPassword = !showPassword">
            <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">Connexion </button>
      <p class="forgot-password text-right">Pas encore inscrit ?
      <router-link to="/Inscription">s'enregistrer</router-link>
      </p>
    </form>
    <p class="t2"></p>
    <p class="t1"></p>
    <div id="app"></div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "loginflat",
  data() {
    return {
      errors:'',
      posts: {
        email: "",
        password: "",
        errors: false,
      },
      showPassword: false,
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
          "http://localhost:3000/login",
          {
            email: this.posts.email,
            password: this.posts.password,
          },
          { optionAxios }
        )
        .then((response) => {
            localStorage.setItem("jwt", response.data.token)
            this.$router.replace({ name: "Mur" });
        })
        .catch((error) => {
          (this.errors = error.response.data.error)
        });
    },
  },
};
</script>