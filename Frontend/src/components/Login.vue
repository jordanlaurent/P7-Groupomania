<template>
  <div id="loginflat" class="text-center">
    <img src="../assets/image/logo.png" class="logo" />
    <form @submit="postData" method="post" class="bg text-light p-5">
      <h4>CONNEXION</h4>
      <section class="popup" v-if="posts.errors">
        <p class="pt-2 text-light popuptext h5">
          Nous sommes désolés, les informations saisie ne corresponde <br />à
          aucun compte veuillez verifier votre email et votre mots de passe.
        </p>
      </section>
      <div class="form-group">
        <label>Email </label>
        <input
          id="email"
          type="email"
          class="form-control form-control-lg"
          name="email"
          v-model="posts.email"
          required
        />
      </div>

      <label>Mots de passe</label>
      <div class="input-group mb-3">
        <input
          v-bind:type="[showPassword ? 'text' : 'password']"
          class="form-control"
          id="password"
          name="password"
          v-model="posts.password"
          required
        />
        <div class="input-group-append">
          <span class="input-group-text" @click="showPassword = !showPassword">
            <i
              class="fa"
              :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']"
              aria-hidden="true"
            ></i>
          </span>
        </div>
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Connexion
      </button>

      <p class="forgot-password text-right">
        Pas encore inscrit ?
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
          let user = {
            email: response.data.email,
            bio: response.data.bio,
            prenom:response.data.prenom,
            name:response.data.name,
            photo:response.data.photo,
            id: response.data.id,
            
          }
          localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("jwt", response.data.token)
            this.$router.replace({ name: "Mur" });
        })
        .catch((error) => {
          (this.posts.errors = true), console.log(error);
        });
    },
  },
};
</script>