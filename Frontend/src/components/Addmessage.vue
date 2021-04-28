<template>
  <form @submit.prevent="postData" method="post" class="card text-center">
    <hr class="topMessage" />
      <div class="card-header">
        Poster un message
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </div>
      <div class="card-body">
        <div class="input-group form">
          <input id="message" name="message" v-model="message" type="text" placeholder="Quel message voulez vous postez ?" class="form-control form-control-lg" required/>
        </div>
        <input placeholder="telecharger votre image" type="file" id="file" name="image" ref="file" accept="image/png, image/jpeg, image/jpg" class="mt-2 mb-2" @change="handleFileUpload()">
        <button @click.prevent="postData" class="btn pr-5 pl-5  btn-dark" type="submit" >PUBLIER</button>
      </div>
  </form>
</template>


<style lang="css" scoped>
.topMessage {
  border: 2px solid #16a085;
  margin-top: -1px;
}
</style>

<script>
import axios from "axios";
export default {
  name: "signup",
  data() {
    return {
      message: "",
      file: "",
      errors: false,
      userid : localStorage.getItem("jwt")
    };
  },
  methods: {
    handleFileUpload() {
        this.file = this.$refs.file.files[0];
        console.log(this.file)
        },
    postData() {
       const formData = new FormData();
            formData.append('image', this.file)
             formData.append('message', this.message)
             formData.append('userid', this.userid)
         console.log(formData)
            axios.post('http://localhost:3000/post/create' , formData, {
                headers : {'Content-Type' : 'multipart/form-data'}
            })
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