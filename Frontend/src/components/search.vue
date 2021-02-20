<template>
  <div class="mb-5 rounded searchBorder">
    <input v-model="rauMessage" v-on:keyup.enter="checkKeyword" id="Keyword" class="p-2" />
    <button @click.prevent="checkKeyword" class="btn-primary p-2">
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
    rauMessage: "",
    message: [],
  }),
  methods: {
    checkKeyword() {
      console.log(`Cheking message: ${this.rauMessage}`);
      axios
        .get("http://localhost:3000/post/search", {
          params: {
            search: this.rauMessage,
          },
          
        })
        .then((res) => {
          console.log(res.search);
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
      this.checkKeyword();
    },
  },
};
</script>