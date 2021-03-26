<template>
  <form @submit="postData" method="post" class="card text-center">
    <hr class="topMessage" />
    <div class="card-header">
      Poster un message
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chat-left-dots"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path
          d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
        />
      </svg>
    </div>
    <div class="card-body">
      <div class="input-group form">
        <input id="message" name="message" v-model="message" type="text" placeholder="Quel message voulez vous postez ?" class="form-control form-control-lg" required/>
      </div><button id="image" name="image" type="button" class="mt-2 mb-2 mr-4 btn btn-secondary">Image
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image"  viewBox="0 0 16 16"> <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
        </svg>
      </button>
      <button @click.prevent="postData" class="btn pr-5 pl-5  btnpost" type="submit" 
        >PUBLIER
      </button>
    </div>
    <div class="card-footer text-muted"></div>
  </form>
</template>


<style lang="css" scoped>
.topMessage {
  border: 2px solid #16a085;
  margin-top: -1px;
}
.btnpost{background-color: #16a085;}
.btnpost:hover{background-color: #1e8570;}
</style>

<script>
import axios from "axios";
export default {
  name: "signup",
  data() {
    return {
      message: "",
      image: "",
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
      // crée un poste
      axios
        .post(
          "http://localhost:3000/post/create",
          {
            userid: localStorage.getItem("jwt"),
            message: this.message,
            image: this.image,
          },
          { optionAxios }
        )
        .then((response) => {
          this.$router.go(0); // refresh de la page
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>