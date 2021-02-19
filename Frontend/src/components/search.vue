<template>
  <div class="mb-5 rounded searchBorder">
    <input v-model="Keyword" id="name" class="p-2" />
    <button @click.prevent="checkName" class="btn-primary p-2">
      Rechercher
    </button>
    <div>
      <div class="card mt-2 postView" v-for="message in message" :key="message">
        <div class="card-body notes test">
          <h5 class="card-title">PRENOM DE L'UTILISATEUR</h5>
          <p class="card-text">{{ message.message }}</p>
        </div>
        <!-- <img src="../assets/image/posttest.jpg" class="card-img-top" alt="..."> -->
        <hr />
        <small class="text-muted">{{
          message.datemessage | moment("DD-MM-YYYY, HH:mm:ss ")
        }}</small>
        <hr />
        <ul class="bottomSocial">
          <i class="far fa-heart"><p>Like</p></i>
          <i class="fas fa-comment-alt pl-3"><p>Commenter</p></i>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.searchBorder {
  border: solid 2px #f6b93b;
}
</style>

<script>
import axios from "axios";
export default {
  name: "Search",
  data: () => ({
    keyword: "",
    message: [],
  }),
  methods: {
    checkName() {
      console.log(`Cheking message: ${this.keyword}`);
      axios
        .get("http://localhost:3000/post", {
          params: {
            search: this.keyword,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.message = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    keyword(newKeyword, oldKeyword) {
      console.log(`New keyword is ${newKeyword}`);
      console.log(`old keyword is ${oldKeyword}`);
      this.checkName();
    },
  },
};
</script>