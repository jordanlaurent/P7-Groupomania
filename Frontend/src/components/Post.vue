<template>
  <div>
    <div class="card mt-2 postView rounded-0" v-for="info in infos" :key="info.message">
      <div class="card-body ">
        <h5 class="card-title text-primary">PRENOM DE L'UTILISATEUR</h5>
        <p class="card-text">{{ info.message }}</p>
      </div>
      <!-- <img src="../assets/image/posttest.jpg" class="card-img-top" alt="..."> -->
      <hr />
      <small class="text-muted">{{
        info.datemessage | moment("DD-MM-YYYY, HH:mm:ss ")
      }}</small>
      <hr />
      <ul class="bottomSocial">
        <i class="far fa-heart text-danger"><p>Like</p></i>
        <i class="fas fa-comment-alt pl-3"><p>Commenter</p></i>
      </ul>
    </div>
  </div>
</template>
<style lang="css" scoped>
.postView {
  margin-bottom: 5%;
}
.bottomSocial {
  display: flex;
}
p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
}
</style>

<script>
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      infos: null,
    };
  },
  mounted() {
    axios.get("http://localhost:3000/post").then((response) => {
      this.infos = response.data;
    });
  },
};
</script>
