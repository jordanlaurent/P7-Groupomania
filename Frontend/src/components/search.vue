<template>
  <div class="mb-5 rounded searchBorder"> 
    <input placeholder="Taper votre recherche" v-model="rauMessage" v-on:keyup.enter="checkKeyword" id="Keyword" class="p-2" type="keyword" />
    <button @click.prevent="checkKeyword" class="btn-warning p-2 btnpost rounded-">RECHERCHER</button>
      <div>
        <div class="card mt-2 postView" v-for="message in message" :key="message">
          <div class="card-body notes test">
            <h5 class="card-title text-primary"> <img :src="message.photo" class="image--cover"> {{ message.name}} {{ message.prenom}}</h5>
            <p class="card-text">{{ message.message }}</p>
            <img :src="message.image" class="w-25">
          </div>
          <!-- <img src="../assets/image/posttest.jpg" class="card-img-top" alt="..."> -->
          <hr />
          <small>{{message.Datemessage | moment("DD-MM-YYYY, HH:mm:ss ")}}</small>
          <hr />
        </div>
      </div>
  </div>
</template>

<style>
.searchBorder {border: solid 2px #16a085;}
p {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: normal;}
.image--cover {width: 100px; height: 100px; border-radius: 50%; object-fit: cover; object-position: center;}
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
          this.message = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    keyword() {
      this.checkKeyword();
    },
  },
};
</script>