<template>
<div id="loginflat" class="text-center">
    <video autoplay muted loop id="bgvid">
  <!-- <source src="../assets/Beach.webm" type="video/webm"> -->
  <source src="../assets/video/Beach.webm" type="video/webm"> </video>
      <form @submit="postData" method="post" class="bg text-light p-5">
            <h3>Groupomania</h3>
            <h4>CONNEXION   </h4>
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


<style scoped>
@media (max-width: 1920px) {
#loginflat{display: flex;flex-direction: column; position: fixed; justify-content: center;align-items: center;}
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:1920px; height: 1080px; z-index: -100;
  background-size: cover;
}
.bg{background-color: rgba(0, 0, 0, 0.527);}
}
@media (min-width: 1920px) {
  #loginflat{display: flex;flex-direction: column; position: fixed; justify-content: center;align-items: center;}
video#bgvid {
  position: fixed; right: 0; bottom: 0;
  min-width: auto; min-height: auto;
  width:2560px; height: 1440px; z-index: -100;
  background-size: cover;
}
.bg{background-color: rgba(0, 0, 0, 0.527);}
}
@media (max-width: 860px) {
#loginflat{background: linear-gradient(70deg, rgb(40, 40, 151), rgb(160, 14, 39)); display: flex;flex-direction: column; position: fixed; justify-content: center;align-items: center;}
}
</style>

<script>
import axios from 'axios';

export default {
  name: "loginflat",
  data() {
    return {
      posts:{
        email:'',
        password:''
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

      axios.post("http://localhost:3000/api/users/login",{
        email: JSON.stringify(this.posts.email),
        password: JSON.stringify(this.posts.password)
      }, { optionAxios } )
      .then(function (response) {
        //localStorage.setItem("userName", response.data.userName)
        console.log(response)
      })
    }
  }
};
</script>