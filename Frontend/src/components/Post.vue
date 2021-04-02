<template>
  <div>
    <!-- affficher les post -->
    <div class="card mt-2 postView rounded-0"  v-for="info in infos" :key="info.message">
      <div class="card-body ">
        <h5 class="card-title text-primary"> <img :src="info.photo" class="rounded-circle  w-25" alt="..."> {{ info.name }} {{ info.prenom }}</h5>
        <p class="card-text">{{ info.message }} </p>
      </div>
      <small class="text-muted">{{ info.datemessage | moment("DD-MM-YYYY, HH:mm:ss ")}}
        <!-- bouton supprimer un post -->
         <button id="buttonDeletePost" @click.prevent="deletePost" class="btn-danger btn-sm btn float-right ml-1" :data-id="info.id" v-if="info.idusers == user.id">x </button></small>
       
      <hr />
      <!-- afficher les commentaires -->
      <div v-for="com in coms" :key="com.message" class="text-left">
      <span> <small class="font-weight-bold text-primary ml-4"> {{ com.name}} {{ com.prenom}}</small> <p class=" ml-5">{{com.comment}}<small class="float-right ">{{com.datecomment | moment("DD-MM-YYYY, HH:mm:ss ")}}
      <!-- bouton modifier commentaire -->
      <div>
           <b-button id="show-btn" class="btn-success" @click="showModalComment">Modifier mon message</b-button>
    <b-modal ref="my-modalComment" id="name-input"  title="Etes vous sur de vouloir modifer votre message ?">
      <b-form-input id="name-input" v-model="commentChanged" required></b-form-input>
      <b-button @click.prevent="ChangedComment" class="mt-3 btn-success" block>Valider</b-button
      >
      <b-button class="mt-2" block @click="toggleModalComment">Annuler</b-button>
    </b-modal>   
      </div>
    <!-- bouton supprimer commentaire -->
     <button id="buttonDeleteComment" @click.prevent="delecteComment" class="btn-danger btn-sm btn float-right ml-1" :data-id="com.id" v-if="com.idusers == user.id"> x </button></small></p></span> 
      <hr>
      </div>
      
      <!-- bouton crée un commentaire -->
       <input name="comment" v-model="comment" type="text"  placeholder="Poster un commentaire" class="form-control "   required />
         <button @click.prevent="postData" class="btn-success" type="button" >COMMENTER</button>
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
      coms: null,
      comment:"",
      idcomment:"",
      idpost:"",
      user :'',
      modalShow: false,
    };
  },methods: { 
    // afficher, masquer modifier commentaire
  showModalComment() {
      this.$refs["my-modalComment"].show();
    }, toggleModalComment() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modalComment"].toggle("#toggle-btn");
    },
      // envoie api nouveaux commentaire
      ChangedComment(event) {
       this.idcomment = event.target.dataset.id
      axios
        .put("http://localhost:3000/post/modify", {
          message: this.commentChanged,
          userid: localStorage.getItem("jwt"),
          id: this.idcomment,
        })
         this.$router.go(0);
    },
    // crée un commentaire
    postData(e) {
      e.preventDefault();
      var optionAxios = {headers: {"Content-Type": "application/x-www-form-urlencoded",},};
      axios
        .post(
          "http://localhost:3000/comment/create",
          {
            userid: localStorage.getItem("jwt"),
            comment: this.comment,
            postid: this.infos[0].id,
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
    // supprimer un post
    deletePost(event) {
      this.idpost = event.target.dataset.id
      console.log(this.idpost)
      console.log(event)
      axios
        .delete("http://localhost:3000/post/delete", {
           data: {
            userid: localStorage.getItem("jwt"),
            id: this.idpost,
           }
        })
        .then((response) => {
          this.$router.go(0);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 
    // supprimer un commentaire
    delecteComment(event) {
      this.idcomment = event.target.dataset.id
       axios
        .delete("http://localhost:3000/comment/delete", {
           data: {
             userid: localStorage.getItem("jwt"),
            id: this.idcomment,
           }
        })
        .then((response) => {
          this.$router.go(0);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
     axios.get("http://localhost:3000/post").then((response) => {
      this.infos = response.data  
      this.user = JSON.parse(localStorage.getItem("user"))
     }),
     axios.get("http://localhost:3000/comment").then((response) => {
      this.coms = response.data
     })
     }
  
};
</script>
