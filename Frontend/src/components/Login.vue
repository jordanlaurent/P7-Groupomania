<template>
<div id="loginflat" class="text-center">
  <img src="../assets/image/logo.png" class="logo">
      <form @submit="postData" method="post" class="bg text-light p-5">
            <h3>Groupomania</h3>
            <h4>CONNEXION   </h4>
                    <section class="popup"  v-if="posts.errors">
    <p class="pt-2 text-danger popuptext">Nous sommes désolés, les informations saisie ne corresponde <br>à aucun compte veuillez verifier votre email et votre mots de passe.</p>
  </section>
            <div class="form-group">
                <label>Email </label>
                <input id="email" type="email" class="form-control form-control-lg" name="email" v-model="posts.email" required/>
            </div>

            <div class="form-group">
                <label>Mots de passe</label>
                <input id="password" type="password" class="form-control form-control-lg" name="password" v-model="posts.password" required/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" >Connexion</button>

            <p class="forgot-password text-right">
                Pas encore inscrit ?
                <router-link to="/Inscription">s'enregistrer</router-link>
            </p>
        </form>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: "loginflat",
  data() {
    return {
      posts:{
        email:'',
        password:'',
        errors: false ,
      }
    }

  },
  methods: {
    postData(e)
    { 
      e.preventDefault();
      var optionAxios = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

      axios.post("http://localhost:3000/login",{
        email: this.posts.email,
        password: this.posts.password
      }, { optionAxios } )
      .then(response => {
        localStorage.setItem('email',response.data.email),
        localStorage.setItem('jwt',response.data.token),
        this.$router.replace({ name: "Mur" });
      })
      .catch(error => {
        this.posts.errors = true,
        console.log(error)
      })
    } 
  } 
};
</script>